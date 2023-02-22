import db from "JS/dbInitialize.js"

export default function addUser(name, password){
    if(name != "" && password != ""){
        db.collection("Login Data").add({
            Name: name,
            Password: password,
            Admin: false,
        }); 
    }
}