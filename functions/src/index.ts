import * as functions from "firebase-functions";
import axios from "axios";
import * as admin from "firebase-admin";
admin.initializeApp();
const db = admin.firestore();
import { Dalle } from "library";

const assimilatePrompt = (prompt: string): string => {
  return prompt.split(" ")
    .map((word) => word.toLowerCase().replace(/[^a-z]+/g, ""))
    .filter((word) => word.length > 0)
    .join(" ");
};

// export const dalle = functions.https.onRequest(async (req, res) => {
//     const q = await db.collection("dalle").get()
//     const d = q.docs
//     for (const doc of d) {
//       await new Promise(function (resolve) {
//         setTimeout(resolve, 100);
//       });
//       console.log("updating")
//       doc.ref.update({
//         timestamp: Date.now()
//       })
//     }
//   })

export const onSubmissionCreation = functions
  .runWith({ timeoutSeconds: 300 })
  .firestore.document("submissions/{submissionId}")
  .onCreate(async (snapshot, context) => {
    // the prompt is stored in the id of the document
    const prompt = assimilatePrompt(snapshot.id);
    const data = {
      prompt,
    };
    const options = {
      headers: {
        "Content-Type": "application/json",
        "Connection": "keep-alive",
      },
    };
    const res = await axios.post("https://backend.craiyon.com/generate", data, options);
    const { images } = res.data;
    const timestamp: number = Date.now();
    const dalle: Dalle = {
      images,
      prompt,
      timestamp,
    };
    return db.doc(`dalle/${prompt}`).set(dalle);
  });
