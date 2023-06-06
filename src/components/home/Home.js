import React from 'react'
import Navbar from '../navbar/Navbar'
import './Home.scss'
import {data} from '../../data';

function Home() {
  return (
    <div className='homeContainer'>
      <Navbar showNavbar="true" showHeading="false"/>
      {data.map((item) => (
        <div className='clientList' key={item["Bill No."]}>
          <div className='heading'>
            <div className='mainHeading'>{item["Bill No."]}</div>
            <div className='subHeading'>{item["Retailer Name"]}</div>
          </div>
          <div className='price'>&#8377; {item["Pending Amount"]}</div>
        </div>
      ))}
    </div>
  )
}

export default Home