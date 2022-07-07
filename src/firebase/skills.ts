import { db } from "./firebase";
import { getDocs, collection } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Skill } from "../interfaces/skills";

const storage = getStorage();

export const getSkills = async () => {
    const querySnapshot = await getDocs(collection(db, "skills"));
    const docs = querySnapshot.docs.map((doc) => doc.data());
    return (docs as Skill[]);
};


export const downloadCurriculum = async () => {
    const url = await getDownloadURL(ref(storage, 'Eduardo_Gutiérrez.pdf'))
    return url
}
