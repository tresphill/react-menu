"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Style from './styles.css'
// import Appetizers from './components/appetizers';
// import Drinks from './components/drinks';
// import Breakfast from './components/breakfast';
// import Lunch from './components/lunch';
// import Dinner from './components/dinner';
import Logo from './components/logo';
import MenuList from './components/MenuList';
// import BgImage from './components/bg-image';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

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
        <div className='container text-end'>
          <div className='row gx-5 mt-6'>
            <div className='col-6'>
            <MenuList data={data} category="Appetizer"/>
            </div>
          </div>
        </div>
        <div className='container text-start'>
          <div className='row gx-5 mt-6'>
            <div className='col-6'>
            <MenuList data={data} category="Dinner"/>
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  
  {/* <MenuList data={data} category="Appetizer"/>
  <MenuList data={data} category="Breakfast"/>
  <MenuList data={data} category="Lunch"/> */}
  {/* <BgImage /> */}