import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import wordList from '../JS/wordList.js';
import dbRead from '../JS/dbRead.js';
import dbAddData from '../JS/dbAddData.js';
import db from '../JS/dbInitialize.js';

export default function Game() {
  const [phrase, setPhrase] = useState('');
  const [hint, setHint] = useState('');
  const [usedLetters, setUsedLetters] = useState([]);
  const [guessedLetter, setGuessedLetters] = useState(0);
  const [empty, setEmpty] = useState([]);
  const [letter, setLetter] = useState('');
  const [vLetter, setVLetter] = useState('');
  const [word, setWord] = useState('');

  const [textColor, setTextColor] = useState('black');
  const [reward, setReward] = useState(0);
  const router = useRouter();

  const vowalCost = 150;

  // User data
  const { name, password } = router.query;
  const [money, setMoney] = useState(1000);
  const [lives, setLives] = useState(5);
  const [rounds, setRounds] = useState(0);

  // Game over
  useEffect(() => {
    if (lives <= 0) {
      //addData();
    }

    if (phrase.length === guessedLetter) {
      const wordButton = document.getElementById('wordButton');
      wordButton.disabled = true;
      const letterButton = document.getElementById('letterButton');
      letterButton.disabled = true;
      const startButton = document.getElementById('startButton');
      startButton.disabled = false;
      const vButton = document.getElementById('vocalButton');
      vButton.disabled = true;
      const spin = document.getElementById('spin');
      spin.disabled = true;

      setGuessedLetters(0);
      setUsedLetters([]);
      setReward(0);
    }
  }, [lives, empty, guessedLetter]);

  useEffect(() => {
    setEmpty([]);
    for (let i = 0; i < phrase.length; i++) {
      setEmpty((prevEmpty) => [...prevEmpty, ' ']);
    }
  }, [phrase]);

  useEffect(() =>{

    if(money < 0){
      setMoney(0);
    }
  }, [money]);

  useEffect(() => {
    if(reward === 0){
      const wordButton = document.getElementById('wordButton');
      wordButton.disabled = true;
      const letterButton = document.getElementById('letterButton');
      letterButton.disabled = true;
      const vButton = document.getElementById('vocalButton');
      vButton.disabled = true;
      const spin = document.getElementById('spin');
      spin.disabled = false;
    }
    else{
      const wordButton = document.getElementById('wordButton');
      wordButton.disabled = false;
      const letterButton = document.getElementById('letterButton');
      letterButton.disabled = false;
      const vButton = document.getElementById('vocalButton');
      vButton.disabled = false;
    }
  }, [reward])

  // Add to leaderboard
  function addData() {
    dbAddData(name, money, new Date(), rounds);
  }

  // Start by creating new word
  function createWord() {
    spin.disabled = false;
    startButton.disabled = true;

    const randomWord = wordList[getRandomInt(wordList.length)];
    setPhrase(randomWord.word);
    setHint(randomWord.hint);
    setRounds((prevRounds) => prevRounds += 1);
  }

  // Letter guessing
  function guess() {
    let correctGuess = false;

    console.log(phrase.length + "|" + guessedLetter);

    for (let i = 0; i < phrase.length; i++) {
      if (letter.toLowerCase() === phrase[i] || vLetter.toLocaleLowerCase() === phrase[i]) {
        setEmpty((prevEmpty) => [...prevEmpty.slice(0, i), phrase[i], ...prevEmpty.slice(i + 1)]);
        setGuessedLetters((prevGuessedLetter) => prevGuessedLetter += 1);
        setMoney(money + reward);
        makeTextGreen();
        correctGuess = true;
      }
    }
    if (!correctGuess) {
      if (!usedLetters.includes(letter)) {
        if(letter === ''){
          setUsedLetters((prevEmpty) => [...prevEmpty, vLetter]);
        }
        else if(vLetter === ''){
          setUsedLetters((prevEmpty) => [...prevEmpty, letter]);
        }
      }
      setMoney(money - reward);
      setLives(lives - 1);
      makeTextRed();
    }
    setReward(0);
    setLetter('');
    setVLetter('');
  }

  // Word guessing
  function wordGuess() {
    if (word.toLowerCase() === phrase) {
      setEmpty([...phrase]);
      setMoney(money + reward*(phrase.length-guessedLetter));
      setGuessedLetters(phrase.length);
    }
    setWord('');
  }

  //Spin wheel
  function spinWheel() {
    spin.disabled = true;

    if (getRandomInt(50) == 1) {
      setMoney(0);
    }
    else {
      setReward((getRandomInt(4) * 100) + 100);
    }
  }

  function vowal(){
    setMoney(money - vowalCost);
    guess();
  }

  function makeTextRed() {
    setTextColor('red');
    setTimeout(() => {
      setTextColor('black');
    }, 500);
  }

  function makeTextGreen() {
    setTextColor('green');
    setTimeout(() => {
      setTextColor('black');
    }, 500);
  }
  
  //Random number for wordlist
  function getRandomInt(max) {
    var rnd = Math.floor(Math.random() * max);
    return rnd;
  }

  //Logout
  function logout() {
    router.push({
      pathname: '/',
    });
  }

  return (
    <main>
      {/* User data -------------------------------------------------------------------------------------------------*/}

      <div style={{ display: 'flex' }}>
        <div style={{ backgroundColor: 'grey', width: '15%', padding: '2% 1%', borderRadius: '10px', paddingBottom: '3%', marginRight: '25%' }}>
          <div style={{ marginLeft: '35%', marginBottom: '5%' }}>
            <button onClick={logout}>Logout</button>
          </div>
          <h1>Welcome, {name}!</h1>
          <li><a>Money: {money}</a></li>
          <li><a>Lives: {lives}</a></li>
          <li><a>Rounds: {rounds}</a></li>
          <hr />
          <h1>Leaderboard</h1>
        </div>

        {/*Game -----------------------------------------------------------------------------------------------------*/}

        <div name='game' style={{ backgroundColor: 'grey', width: '15%', padding: '2% 1%', borderRadius: '10px', marginTop: '10%' }}>
          <div style={{ marginBottom: '10%' }}>

            <div>
              <button id='startButton' onClick={createWord} style={{ padding: '1% 2%', marginLeft: '38%', marginBottom: '15%' }}>START</button>
            </div>

            <button id='spin' onClick={spinWheel}>Spin</button>
            <a>{reward}</a>
          </div>

          <div>
            <a>Guess word:</a>
            <input value={word} onChange={newText => setWord(newText.target.value)} type={'text'} style={{ marginLeft: '5%', width: '40%', marginBottom: '5%' }} />
            <button id="wordButton" onClick={wordGuess}>OK</button>

            <hr style={{ marginBottom: '5%' }} />
            <a>Hint: {hint}</a>

            <div style={{ marginBottom: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
              <span style={{ color: textColor }}>
                {empty.map((item) => (
                  <div style={{ display: 'inline-block', marginRight: '10px', fontSize: '20px', border: '1px solid', padding: '5px' }}>
                    <a>{item.toUpperCase()}</a>
                  </div>
                ))}
              </span>
            </div>
          </div>

          {/*User Input ------------------------------------------------------------------------------------------------*/}

          <a>C:</a>
          <input value={letter} onChange={newText => setLetter(newText.target.value)} onKeyPress={event => {
            const keyPressed = event.key.toLowerCase();
              if (!/[bcdfghjklmnpqrstvwxyz]/.test(keyPressed)) {
                event.preventDefault();
              }
            }} type={'text'} maxLength={1} style={{ width: '10%', marginLeft: '5%' }} />

          <button id="letterButton" onClick={guess}>OK</button>

          <a style={{marginLeft:'5%'}}>V:</a>

          <input value={vLetter} onChange={newText => setVLetter(newText.target.value)} onKeyPress={event => {
            const keyPressed = event.key.toLowerCase();
              if (!/[aeiou]/.test(keyPressed)) {
                event.preventDefault();
              }
            }} type={'text'} maxLength={1} style={{ width: '10%', marginLeft: '5%' }} />

          <button id="vocalButton" onClick={vowal}>Purchase</button>

          <br />
          <div style={{ marginTop: '5%' }}>
            {usedLetters.map((item) => (
              <a style={{ display: 'inline-block', marginRight: '5px', fontSize: '15px', border: '1px solid', padding: '3px' }}>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}