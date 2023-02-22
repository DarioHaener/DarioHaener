"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import dbAddData from '@/JS/dbAddData.js'

export default function game() {
  const [text, setText] = useState("")
  const router = useRouter();
  

  //User Data
  const { name, password } = router.query;
  const [money, setMoney] = useState(1000);
  const [rang, setRang] = useState('');
  const [rounds, setRounds] = useState(0);

  function addData() {
    dbAddData(name, );
  }

  return (
    <main style={{ color: 'black' }}>
      <div>
        <div>
          <h1>Welcome to the game, {name}!</h1>
        </div>
        <form>
          <input type="text" id="test" name="test" value={text} onChange={newText => setText(newText.target.value)} />
          <button type="submit" onClick={WriteInDB}>Submit</button>
        </form>
      </div>
    </main>
  )
}