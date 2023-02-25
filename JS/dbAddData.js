import db from "JS/dbInitialize.js"

export default async function Write(name, geldbetrag, zeitpunkt, spielrunden) {
    db.collection('User data').add({
        Name: name,
        Geldbetrag: geldbetrag,
        Rang: rang,
        Zeitpunkt: zeitpunkt,
        Spielrunden: spielrunden,
    })
}