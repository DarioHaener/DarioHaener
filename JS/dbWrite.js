import db from "JS/dbInitialize.js"

var citiesRef = db.collection("Test");

export default function TestWrite(value){
    citiesRef.doc("Test").set({
        Feld: value,
    });  
}


