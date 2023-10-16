"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Style from './styles.css'
import MenuList from './components/MenuList'
import Nav from './components/nav.js'
import Logo from './components/logo'


export default function MenuDisplay(){
  const [data, setData] = useState([]);
  const [view, setView] = useState('HomeView')

  useEffect(() => {
    const fetchData = async() => {
    try {
      const response = await axios('https://www.jsonkeeper.com/b/MDXW');
      setData(response.data);
      console.log(data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
    
    fetchData(); 
  }, []); 

  return (
      <main className={Style.main}>
        <div className='container text-center'>
          <div className='row mt-3'>
            <div className='col-md-4'>
            <Logo />
            <Nav setView={setView} />
            <MenuList data={data} view={view} />
            </div>
          </div>
        </div>
      </main>
    );
  }
  