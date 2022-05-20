import { db } from "./firebase";
import { getDocs, collection } from "firebase/firestore";

export const getProyects = async () => {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const docs = querySnapshot.docs.map((doc) => doc.data());

    return docs;
}