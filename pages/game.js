"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import dbWrite from 'JS/dbWrite.js'

export default function game() {
  const [text, setText] = useState("")
  const router = useRouter();
  const { name, password } = router.query;

  function WriteInDB() {
    const write = dbWrite();
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