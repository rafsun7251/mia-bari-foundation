import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export const saveUserToDatabase = async (user, name) => {
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    name: name,
    email: user.email,
    role: "Pending",
    committee: "",
    status: "Active",
    createdAt: new Date().toISOString(),
  });
};