import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { getFirestore, getDocs } from 'firebase/firestore';
import { collection } from "firebase/firestore";
import db from '../JS/dbInitialize.js';
import wordList from '../JS/wordList.js';

export default function admin() {
    const router = useRouter();
    const [phrase, setPhrase] = useState('');
    const [hint, setHint] = useState('');
    const [rank, setRank] = useState(0);

    //Delete Phrase
    function deletePhrase() {
        db.collection("Phrasen")
            .where("Phrase", "==", phrase)
            .where("Hint", "==", hint)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    doc.ref.delete();
                });
            })
    }

    //Add Phrase
    function addPhrase() {
        db.collection("Phrasen").add({
            Phrase: phrase,
            Hint: hint,
        })
    }

    //Delete Leaderboard entry
    function deleteEntry() {
        db.collection('Leaderboard')
            .orderBy("Geldbetrag", "desc")
            .limit(5)
            .get()
            .then(querySnapshot => {
                const fifthDoc = querySnapshot.docs[4];
                return fifthDoc.ref.delete();
            })
    }

    //return to login screen
    function logout() {
        router.push({
            pathname: '/',
        });
    }

    return (
        <main>
            <h1>Admin page</h1> <br />
            <button onClick={logout}>Logout</button>

            <form style={{ marginTop: '3%' }}>
                <label>Phrase:</label>
                <input type="text" value={phrase} onChange={newText => setPhrase(newText.target.value)} style={{ marginLeft: '1%' }}></input> <br />
                <label>Hint:</label>
                <input type="text" value={hint} onChange={newText => setHint(newText.target.value)} style={{ marginLeft: '1.8%' }}></input><br></br>
                <button type='button' onClick={addPhrase}>ADD</button>
                <button type='button' onClick={deletePhrase}>DELETE</button>
            </form>

            <form style={{ marginTop: '3%' }}>
                <label>Leaderboard entry:</label>
                <input type="text" value={rank} onChange={newText => setRank(newText.target.value)} style={{ marginLeft: '1%' }}></input> <br />
                <button type='button' onClick={deleteEntry}>DELETE</button>
            </form>
        </main>
    );
}