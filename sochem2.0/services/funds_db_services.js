import { db } from "@/firebase/firebaseConfig";
import {collection,  addDoc,} from "firebase/firestore";

const dbRef = collection(db, "funds");

class FundsDataService {
    addEntry = (entry) => {
      return addDoc(dbRef, entry);
    };
}

export default new FundsDataService()