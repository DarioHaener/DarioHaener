"use client";
import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import dbWrite from 'JS/dbWrite.js'
import db from "JS/dbInitialize.js"

export default function Home() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    function addUser(){
        const add = addUser(name, password);
    }

    return(
        <main style={{color: 'black'}}>
            <h1><Link href="/gamePage.js">Game Page</Link></h1>

            <form>
                <label>Name</label> <br/>
                <input type="text" id="name" name="name" value={name} onChange={newText => setName(newText.target.value)} /> <br/>
                <label>Password</label> <br/>
                <input type="text" id="password" name="password" value={password} onChange={newText => setPassword(newText.target.value)} /> <br/>
                <button type="submit" onClick={addUser()}>Login</button>
            </form>
    </main>
    )
}