"use client";
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import wordList from '../JS/wordList.js'
import dbRead from 'JS/dbRead';
import dbAddData from '../JS/dbAddData.js'
import db from "JS/dbInitialize.js";

export default function game() {
  const [phrase, setPhrase] = useState('');
  const [hint, setHint] = useState('');
  const [usedLetters, setUsedLetters] = useState([]);
  const router = useRouter();
  const render = phrase.split('');

  //User data
  const { name, password } = router.query;

  const [userData, setUserData] = useState(null);
  const [money, setMoney] = useState(null);
  const [rang, setRang] = useState(null);
  const [rounds, setRounds] = useState(null);

  //Initial user data set
  useEffect(() => {
    async function fetchData() {
      const data = await dbRead(name, password); //fetch data
      setUserData(data);
    }
    fetchData();
  }, [name, password]);

  //Set user data
  useEffect(() => {
    if (userData) {
      setMoney(userData.Geldbetrag);
      setRang(userData.Rang);
      setRounds(userData.Spielrunden); 
    }
  }, [userData]);

  //Update user data when values change
  useEffect(() => {
    if (name && password) {
      dbAddData(name, password, money, rang, new Date(), rounds);
    }
  }, [money, rounds, rang]);

  //Add user to database
  function addData() {
    dbAddData(name, password, money, rang, new Date(), rounds);
  }

  //Start by creating new word
  async function createWord() {
    setPhrase(wordList[getRandomInt(wordList.length)].word);
    setRounds(rounds + 1);
  }

  //Random number for wordlist
  function getRandomInt(max) {
    var rnd = Math.floor(Math.random() * max);
    setHint(wordList[rnd].hint);
    return rnd;
  }

  //Logout
  function logout(){
    router.push({
      pathname: '/',
    });
  }

  //While user data is being loaded
  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div>

        <div style={{ backgroundColor: 'grey', width: '15%', padding: '2% 1%', borderRadius: '10px', paddingBottom: '3%' }}>

          <div style={{ marginLeft: '26%', marginBottom: '5%' }}>
            <button onClick={logout}>Logout</button>
            <button>Admin</button>
          </div>

          <h1>Welcome back, {name}!</h1>

          <li><a>Money: {money}</a></li>
          <li><a>Rank: {rang}</a></li>
          <li><a>Rounds: {rounds}</a></li>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
          <button onClick={createWord} style={{ padding: '1% 2%' }}>START</button>
        </div>

        {/*
        <div name ='game'>
          <div>
            {render.map((item) => (
              <div style={{ display: 'inline-block', marginRight: '10px', fontSize: '20px', border: '1px solid', padding: '5px' }}>
                <a>{item.toUpperCase()}</a>
              </div>
            ))}
          </div>
          <input type={'text'} />
          <br />
          <a>Hint: {hint}</a>
          <br />
        </div> 
            */}

      </div>
    </main>
  )
}