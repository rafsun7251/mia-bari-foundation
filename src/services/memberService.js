import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

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