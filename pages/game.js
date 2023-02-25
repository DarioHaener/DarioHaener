import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
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
  const [leaderboard, setLeaderboard] = useState([]);
  const usedPhrases = [];
  const [wordList, setWordList] = useState([]);

  const [textColor, setTextColor] = useState('black');
  const [reward, setReward] = useState(0);
  const router = useRouter();

  const vowalCost = 150;

  // User data
  const { name, password } = router.query;
  const [money, setMoney] = useState(1000);
  const [lives, setLives] = useState(3);
  const [rounds, setRounds] = useState(0);

  // Game over
  useEffect(() => {
    if (lives <= 0) {
      addData();
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

  //Phrase update
  useEffect(() => {
    setEmpty([]);
    for (let i = 0; i < phrase.length; i++) {
      setEmpty((prevEmpty) => [...prevEmpty, ' ']);
    }
  }, [phrase]);

  //Money update
  useEffect(() => {

    if (money < 0) {
      setMoney(0);
      addData();
    }
  }, [money]);

  //After spin
  useEffect(() => {
    if (reward === 0) {
      const wordButton = document.getElementById('wordButton');
      wordButton.disabled = true;
      const letterButton = document.getElementById('letterButton');
      letterButton.disabled = true;
      const vButton = document.getElementById('vocalButton');
      vButton.disabled = true;
      const spin = document.getElementById('spin');
      spin.disabled = false;
    }
    else {
      const wordButton = document.getElementById('wordButton');
      wordButton.disabled = false;
      const letterButton = document.getElementById('letterButton');
      letterButton.disabled = false;
      const vButton = document.getElementById('vocalButton');
      vButton.disabled = false;
    }
  }, [reward])

  useEffect(() => {
    updateLeaderboard();

    const fetchData = async () => {
      const querySnapshot = await db.collection('Phrasen').get();
      const words = [];
      querySnapshot.forEach((doc) => {
        words.push(doc.data());
      });
      setWordList(words);
    };
    fetchData();
  }, []);

  // Add to leaderboard
  async function addData() {
    await dbAddData(name, money, rounds);
    window.location.reload();
  }

  // Start by creating new word
  function createWord() {
    if (wordList.length > 0) {
    spin.disabled = false;
    startButton.disabled = true;

    let randomWord = '';

    do{
      randomWord = wordList[getRandomInt(wordList.length)];
    } while (usedPhrases.includes(randomWord.word));

    setPhrase(randomWord.word);
    setHint(randomWord.hint);
    usedPhrases.push(randomWord.word);
    setRounds((prevRounds) => prevRounds += 1);
  }
  }

  // Letter guessing
  function guess() {
    let correctGuess = false;

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
        if (letter === '') {
          setUsedLetters((prevEmpty) => [...prevEmpty, vLetter]);
        }
        else if (vLetter === '') {
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
      setMoney(money + reward * (phrase.length - guessedLetter));
      setGuessedLetters(phrase.length);
      makeTextGreen();
    }
    else{
      setLives(lives - 1);
      makeTextRed();
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

  //Leaderboard
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

  //Vowal purchase
  function vowal() {
    setMoney(money - vowalCost);
    guess();
  }

  //Wrong guess color
  function makeTextRed() {
    setTextColor('red');
    setTimeout(() => {
      setTextColor('black');
    }, 500);
  }

  //Correct guess color
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
        <div style={{ backgroundColor: 'grey', width: '16%', padding: '2% 1%', borderRadius: '10px', paddingBottom: '3%', marginRight: '25%' }}>
          <div style={{ marginLeft: '35%', marginBottom: '5%' }}>
            <button onClick={logout}>Logout</button>
          </div>

          <h1>Welcome, {name}!</h1>
          <li><a>Money: {money}</a></li>
          <li><a>Lives: {lives}</a></li>
          <li><a>Rounds: {rounds}</a></li>
          <br />
          <button onClick={addData}>End Game</button>
          <hr />
          {/* Leaderboard */}
          <h1>Leaderboard</h1>
          <div style={{ height: '520px', overflowY: 'scroll' }}>
            {leaderboard.map((item, index) => (
              <div key={index + 1} style={{ display: 'inline-block', marginRight: '10px', fontSize: '16px', border: '1px solid', padding: '5px', marginTop: '5%', borderRadius: '10px' }}>
                <a>{"#" + (index + 1) + " | Name: " + item.Name + " | Money: " + item.Geldbetrag + " | Rounds: " + item.Spielrunden + " | Date: " + item.Zeitpunkt}</a>
                <br />
              </div>
            ))}
          </div>
        </div>

        {/*Game -----------------------------------------------------------------------------------------------------*/}

        <div name='game' style={{ backgroundColor: 'grey', width: '15%', padding: '2% 1%', borderRadius: '10px', marginTop: '10%', height: '500px' }}>
          <div style={{ marginBottom: '10%' }}>

            <div>
              <button id='startButton' onClick={createWord} style={{ padding: '1% 2%', marginLeft: '38%', marginBottom: '15%' }}>START</button>
            </div>

            <button id='spin' onClick={spinWheel}>Spin</button>
            <a> Reward: {reward}</a>
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

          <a style={{ marginLeft: '5%' }}>V:</a>

          <input value={vLetter} onChange={newText => setVLetter(newText.target.value)} onKeyPress={event => {
            const keyPressed = event.key.toLowerCase();
            if (!/[aeiou]/.test(keyPressed)) {
              event.preventDefault();
            }
          }} type={'text'} maxLength={1} style={{ width: '10%', marginLeft: '5%' }} />

          <button id="vocalButton" onClick={vowal}>Purchase</button>

          <br />
          <a>Wrong letters: </a>
          <div style={{ marginTop: '2%' }}>
            {usedLetters.map((item) => (
              <a style={{ display: 'inline-block', marginRight: '5px', fontSize: '15px', border: '1px solid', padding: '3px' }}>{item}</a>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a style={{ fontSize: 'small' }}>C = Consonant, V = Vowel</a>
            <br />
            <a style={{ fontSize: 'small' }}>(V can be purchased for 150.-)</a>
          </div>
        </div>
      </div>
    </main>
  )
}