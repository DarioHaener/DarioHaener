import db from "JS/dbInitialize.js"

export default async function Write(name, password, geldbetrag, rang, zeitpunkt, spielrunden) {
    const querySnapshot = await db.collection("User Data")
        .where("Name", "==", name)
        .where("Password", "==", password)
        .limit(1)
        .get();

    if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        db.collection("User Data").doc(doc.id).update({
            Geldbetrag: geldbetrag,
            Rang: rang,
            Zeitpunkt: zeitpunkt,
            Spielrunden: spielrunden,
        });
    } else {
        db.collection("User Data").add({
            Name: name,
            Password: password,
            Geldbetrag: geldbetrag,
            Rang: rang,
            Zeitpunkt: zeitpunkt,
            Spielrunden: spielrunden,
        });
    }
}