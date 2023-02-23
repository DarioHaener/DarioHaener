import db from "JS/dbInitialize.js";

export default async function Read(name, password) {
    const querySnapshot = await db.collection("User Data")
      .where("Name", "==", name)
      .where("Password", "==", password)
      .get();
  
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const data = doc.data();
      return data;
    } else {
      console.log("No matching documents");
      return null;
    }
  }