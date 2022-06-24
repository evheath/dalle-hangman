import * as functions from "firebase-functions";
import axios from "axios";
import * as admin from "firebase-admin";
admin.initializeApp(); // only needs to be done once (within any file)
const db = admin.firestore();
import { Dalle, assimilatePrompt } from "library";
import { Timestamp } from "firebase/firestore";

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
    const timestamp: Timestamp = Timestamp.now();
    const dalle: Dalle = {
      images,
      prompt,
      timestamp
    };
    return db.doc(`dalle/${prompt}`).set(dalle);
  });
