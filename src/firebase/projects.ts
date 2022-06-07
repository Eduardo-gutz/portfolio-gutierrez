import { db } from "./firebase";
import { getDocs, collection } from "firebase/firestore";
import { Project } from "../interfaces/projects";

export const getProyects = async () => {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const docs = querySnapshot.docs.map((doc) => doc.data());
    return (docs as Project[]);
};