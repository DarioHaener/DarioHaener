import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { getFirestore, getDocs } from 'firebase/firestore';
import { collection } from "firebase/firestore";
import db from "JS/dbInitialize.js";
import dbAddUser from '../JS/dbAddUser';

export default function Index() {
    const [name, setName] = useState(db.collection('User Data').where);
    const [password, setPassword] = useState("");
    const router = useRouter();

    //Check if user is in Database
    async function checkUser() {
        //Empty inputs
        if (name.trim() !== "" && password.trim() !== "") {

            const querySnapshot = await db.collection("Login Data").where("Name", "==", name).where("Password", "==", password).get();

            //User exists
            if (!querySnapshot.empty) {
                router.push({
                    pathname: '/game',
                    query: { name, password },
                });
            //User doesn't exist   
            } else {
                if (window.confirm("Are you sure you want to create a new account?")) {
                    dbAddUser(name, password);
                    router.push({
                        pathname: '/game',
                        query: { name, password },
                    });
                }
            }
        }
    }

    return (
        <main style={{ color: 'black' }}>
            <label>Name</label> <br />
            <input type="text" id="name" name="name" value={name} onChange={newText => setName(newText.target.value)} /> <br />
            <label>Password</label> <br />
            <input type="password" id="password" name="password" value={password} onChange={newText => setPassword(newText.target.value)} /> <br />
            <button type="button" onClick={checkUser}>Login</button>
        </main>
    );
}