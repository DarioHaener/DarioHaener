"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import wordList from '../JS/wordList.js'
import Image from 'next/image'
import letters from '../components/letter.js'
import dbAddData from '../JS/dbAddData.js'
import ReactDOM from "react-dom";

export default function game() {
  const [phrase,setPhrase] = useState('');
  const [hint, setHint] = useState('');
  const router = useRouter();
  const render = phrase.split('');

  //User Data
  const { name, password } = router.query;
  const [money, setMoney] = useState(1000);
  const [rang, setRang] = useState('');
  const [rounds, setRounds] = useState(0);

  function addData() {
    dbAddData();
  }

  function createWord(){
    setPhrase(wordList[getRandomInt(wordList.length)].word);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <main style={{ color: 'black' }}>
      <div>
        <div>
          <h1>Welcome, {name}!</h1>
        </div>
        <button onClick={createWord}>Word</button>
        <div style={{position: absolute, top: 50%, left: 50%;
    margin-top: -50px;
    margin-left: -50px;
    width: 100px;
    height: 100px;}}>
          {render.map((item) => (
            <div style = {{float: 'left', marginRight:'1%', fontSize: '20', width:'5%', height:'20%', textAlign:'center', border:'1px solid', paddingBottom:'1%', paddingTop:'1%'}}>
              <a>{item.toUpperCase()}</a>
            </div>
          ))}
          <a>{}</a>
        </div>
      </div>
    </main>
  )
}