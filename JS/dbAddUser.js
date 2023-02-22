import db from "JS/dbInitialize.js"

export default function addUser(name, password){
    if(name != "" && password != ""){
        db.collection("Login Daten").add({
            Name: name,
            Password: password,
        }); 
    }
}