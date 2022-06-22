import * as functions from "firebase-functions";
import axios from "axios";

export const onDalleDocumentCreation = functions
    .runWith({timeoutSeconds: 300})
    .firestore.document("dalle/{dalleId}")
    .onCreate(async (snapshot, context) => {
      const {prompt} = snapshot.data();
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
      const {images} = res.data;
      return snapshot.ref.update({images});
    });
