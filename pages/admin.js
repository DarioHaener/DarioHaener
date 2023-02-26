import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getFirestore, getDocs } from 'firebase/firestore';
import { collection } from "firebase/firestore";
import db from '../JS/dbInitialize.js';

export default function admin() {
    const router = useRouter();
    const [phrase, setPhrase] = useState('');
    const [hint, setHint] = useState('');
    const [rank, setRank] = useState(0);
    const [wordList, setWordList] = useState([]);
    const [leaderboard, setLeaderboard] = useState([]);

    //Initial Load
    useEffect(() => {
        updateLeaderboard();
        fetchData();
    }, []);

    const fetchData = async () => {
        const querySnapshot = await db.collection('Phrasen').get();
        const words = [];
        querySnapshot.forEach((doc) => {
            words.push(doc.data());
        });
        setWordList(words);
    };

    //Delete Phrase
    function deletePhrase() {
        console.log(phrase);
        console.log(hint);

        console.log("delete");
        db.collection("Phrasen")
            .where("word", "==", phrase)
            .where("hint", "==", hint)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    doc.ref.delete();
                    console.log(doc.data().word);
                });
            })

            fetchData();
    }

    //Add Phrase
    function addPhrase() {
        console.log("add");
        db.collection("Phrasen").add({
            word: phrase,
            hint: hint,
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

    //Get leaderboard array
    async function updateLeaderboard() {
        const querySnapshot = await db.collection("Leaderboard")
            .orderBy("Geldbetrag", "desc")
            .get();

        const leaderboardArray = [];
        querySnapshot.forEach((doc) => {
            leaderboardArray.push(doc.data());
        });

        setLeaderboard(leaderboardArray);
    }

    //return to login screen
    function logout() {
        router.push({
            pathname: '/',
        });
    }

    return (
        <main >
            <h1>Admin page</h1> <br />
            <button onClick={logout}>Logout</button>

            <div style={{ display: 'flex' }}>
                <div>
                    <form style={{ marginTop: '3%' }}>
                        <label>Phrase:</label>
                        <input type="text" value={phrase} onChange={newText => setPhrase(newText.target.value)} style={{ marginLeft: '1%' }}></input> <br />
                        <label>Hint:</label>
                        <input type="text" value={hint} onChange={newText => setHint(newText.target.value)} style={{ marginLeft: '1.8%' }}></input><br></br>
                        <button type='button' onClick={addPhrase}>ADD</button>
                        <button type='button' onClick={deletePhrase}>DELETE</button>
                    </form>

                    <div style={{ height: '520px', overflowY: 'scroll' }}>
                        {wordList.map((item) => (
                            <div style={{ marginRight: '5px', fontSize: '16px', border: '1px solid', padding: '5px', borderRadius: '10px', width: '300px' }}>
                                <a>{"Word: " + item.word}</a>
                                <br />
                                <a>{"Hint: " + item.hint}</a>
                                <br />
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginLeft: '10%' }}>
                    <form style={{ marginTop: '3%' }}>
                        <label>Leaderboard entry:</label>
                        <input type="text" value={rank} onChange={newText => setRank(newText.target.value)} style={{ marginLeft: '1%' }}></input> <br />
                        <button type='button' onClick={deleteEntry}>DELETE</button>
                    </form>

                    <div style={{ height: '520px', overflowY: 'scroll' }}>
                        {leaderboard.map((item, index) => (
                            <div key={index + 1} style={{ marginRight: '5px', fontSize: '16px', border: '1px solid', padding: '5px', borderRadius: '10px', width: '300px' }}>
                                <a>{"#" + (index + 1) + " | Name: " + item.Name + " | Money: " + item.Geldbetrag + " | Rounds: " + item.Spielrunden + " | Date: " + item.Zeitpunkt}</a>
                                <br />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}