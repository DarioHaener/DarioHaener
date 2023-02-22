"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import dbWrite from 'JS/dbWrite.js'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [text, setText] = useState("")

  function WriteInDB(){
    const write = dbWrite();
  }
  
  return (
    <main style={{color: 'black'}}>
      <div>
        <form>
          <input type="text" id="test" name="test" value={text} onChange={newText => setText(newText.target.value)} />
          <button type="submit" onClick={WriteInDB}>Submit</button>
        </form>
      </div>
    </main>
  )
}