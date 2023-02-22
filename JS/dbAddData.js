import db from "JS/dbInitialize.js"

export default function Write(name, geldbetrag, rang, zeitpunkt, spielrunden){
    db.collection("User Data").add({
        Name: name,
        Geldbetrag: geldbetrag,
        Rang: rang,
        Zeitpunkt: zeitpunkt, 
        Spielrunden, spielrunden,
    });  
}