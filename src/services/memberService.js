import {
  collection,
  getDocs,
  getCountFromServer,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase.config";


export const getMemberById = async (id) => {
  console.log("Member ID:", id);

  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);

  console.log("Exists:", docSnap.exists());

  if (docSnap.exists()) {
    console.log(docSnap.data());

    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  }

  return null;
};
// Get all members
export const getAllMembers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));

  const members = [];

  querySnapshot.forEach((doc) => {
    members.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return members;
};

// Get total member count
export const getMemberCount = async () => {
  const snapshot = await getCountFromServer(collection(db, "users"));
  return snapshot.data().count;
};
