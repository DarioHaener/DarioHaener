import db from "JS/dbInitialize.js"

export default function Write(name, geldbetrag, rang, zeitpunkt, spielrunden){
    db.collection("Spieler Daten").add({
        Name: name,
        Geldbetrag: geldbetrag,
        Rang: rang,
        Zeitpunkt: zeitpunkt, 
        Spielrunden, spielrunden,
    });  
}