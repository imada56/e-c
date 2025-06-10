// utils/checkEmail.ts

import { db } from "../../../Firebase/Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
export async function emailExisteDéjà(email: string): Promise<boolean> {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
}
