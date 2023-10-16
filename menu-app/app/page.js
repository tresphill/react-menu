"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'
import MenuList from './components/MenuList'
import 'bootstrap/dist/css/bootstrap.js'
import Nav from './components/nav.js'



export default function MenuDisplay(){
const [data, setData] = useState([]);

useEffect(() => {
  
  async function fetchData() {
    try {
      const response = await axios.get('https://www.jsonkeeper.com/b/MDXW');
      setData(response.data);
      console.log(data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  if (!data) {
      return null;
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
  