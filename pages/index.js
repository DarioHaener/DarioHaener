import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { getFirestore, getDocs } from 'firebase/firestore';
import { collection } from "firebase/firestore";
import db from "JS/dbInitialize.js";
import dbAddUser from '../JS/dbAddUser';

export default function Index() {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    //Check if Admin is in Database
    async function checkUser() {
        //Empty inputs
        if (name.trim() !== "" && password.trim() !== "") {

            const querySnapshot = await db.collection("Login Data").where("Name", "==", name).where("Password", "==", password).get();

            //Admin exists
            if (!querySnapshot.empty) {
                router.push({
                    pathname: '/game',
                    query: { name, password },
                });
            }
        }
    }

    function moveToGame(){
        router.push({
            pathname: '/game',
            query: { name: userName, password },
        });
    }

    return (
        <main style={{ color: 'black' }}>
            <div>
                <div>
                    <h1>Admin login</h1>
                    <label>Name</label> <br />
                    <input type="text" id="name" name="name" value={name} onChange={newText => setName(newText.target.value)} /> <br />
                    <label>Password</label> <br />
                    <input type="password" id="password" name="password" value={password} onChange={newText => setPassword(newText.target.value)} /> <br />
                    <button type="button" onClick={checkUser}>Login</button>
                </div>

                <div>
                    <h1>Normal Play</h1>
                    <label>Name</label> <br />
                    <input type="text" id="name" name="name" value={userName} onChange={newText => setUserName(newText.target.value)} /> <br />
                    <button type="button" onClick={moveToGame}>Play</button>
                </div>
            </div>
        </main>
    );
}