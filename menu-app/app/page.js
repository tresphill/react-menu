"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './page.module.css';
import Appetizers from './components/appetizers';
import Drinks from './components/drinks';
import Breakfast from './components/breakfast';
import Lunch from './components/lunch';
import Dinner from './components/dinner';
import Logo from './components/logo';
import BgImage from './components/bg-image';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://www.jsonkeeper.com/b/MDXW');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData(); 
  }, []); 

  if (!data) {
    return null;
  }

  return (
    <main className={styles.main}>
      <>
        <Logo />
        <Appetizers data={data.appetizers} />
        <Drinks data={data.drinks} />
        <Breakfast data={data.breakfast} />
        <Lunch data={data.lunch} />
        <Dinner data={data.dinner} />
        <BgImage />
      </>
    </main>
  );
}

