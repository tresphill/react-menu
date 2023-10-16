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
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row gx-5 mt-6'>
            <div className='col-6 text-end'>
            <MenuList data={data} category="Appetizer"/>
            </div>
            <div className='col-6'>
            <MenuList data={data} category="Breakfast"/>
            </div>
            <div className='col-6'>
            <MenuList data={data} category="Lunch"/>
            </div>
            <div className='col-6'>
            <MenuList data={data} category="Dinner"/>
            </div>
            <div className='col-6'>
            <MenuList data={data} category="Drinks"/>
            </div>
          </div>
        </div>
      </main>
    );
  }
  