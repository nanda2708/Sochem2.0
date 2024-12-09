import { db, storage } from "@/firebase/firebaseConfig";
import {collection,  addDoc,} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const dbRef = collection(db, "funds");

class FundsDataService {
  addEntry = (entry) => {
    return addDoc(dbRef, entry);
  };

  uploadScreenshot = (file) => {
    const storageRef = ref(storage, `funds_screenshots/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        null,
        (error) => reject(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };
}

export default new FundsDataService()