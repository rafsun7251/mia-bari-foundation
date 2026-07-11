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
export const getPendingMembers = async () => {
  const q = query(
    collection(db, "users"),
    where("status", "==", "Pending")
  );

  const querySnapshot = await getDocs(q);

  const members = [];

  querySnapshot.forEach((doc) => {
    members.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return members;
};
export const approveMember = async (id) => {
  const memberRef = doc(db, "users", id);

  await updateDoc(memberRef, {
    status: "Active",
    role: "Member",
  });
};