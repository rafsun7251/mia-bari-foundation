import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export const saveUserToDatabase = async (user, name) => {
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    name: name,
    email: user.email,

    role: "Pending",
    designation: "Pending",
    department: "Pending",

    status: "Pending",

    memberId: "",

    phone: "",
    photoURL: "",

    approvedBy: "",
    approvedAt: "",

    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
  });
};