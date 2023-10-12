"use client"
import React from 'react'
import axios from 'axios'
import styles from './page.module.css'

export default function Home() {
  let results = axios.get('https://www.jsonkeeper.com/b/MDXW')
  console.log(results);
  return (
    <main className={styles.main}>
      
    </main>
  )
}
