"use client"
import React from 'react'
import axios from 'axios'
import styles from './page.module.css'
import Appetizers from './components/appetizers'
import Drinks from './components/drinks'
import Breakfast from './components/breakfast'
import Lunch from './components/lunch'
import Dinner from './components/dinner'
import Logo from './components/logo'
import BgImage from './components/bg-image'


export default function Home() {
  let results = axios.get('https://www.jsonkeeper.com/b/MDXW')
  console.log(results);
  return (
    <main className={styles.main}>
      <>
      <Logo />
      <Appetizers />
      <Drinks />
      <Breakfast />
      <Lunch />
      <Dinner />
      <BgImage />
      </>
    </main>
  )
}
