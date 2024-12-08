import { db } from "@/firebase/firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

const dbRef = collection(db, "members");;

class MembersDataService {
  addMembers = (member) => {
    return addDoc(dbRef, member);
  };

  deleteMember = (id) => {
    const member = doc(db, "members", id);
    return deleteDoc(member);
  };
}

async function verifyEmail(email) {

  const q = query(dbRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) return true;
  else return false;
}

const membersDataService = new MembersDataService();

export { membersDataService, verifyEmail };
