import React, { useContext } from 'react'
import Navbar from '../navbar/Navbar'
import './Home.scss'
import {data} from '../../data';
import { Context } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const { setProductData } = useContext(Context);

  const handleClick = (item) => {
    console.log(item);
    setProductData({
      Brand: item.Brand,
      SalesRepId: item["Sales Rep Id"],
      SalesmanName: item["Salesman name"],
      InvoiceAmount: item["Invoice Amount"],
      RetailerId: item["Retailer Id"],
      RetailerName: item["Retailer Name"],
      RetailerPhno: item["Retailer Ph no"],
      InvoiceDate: item["Invoice Date"],
      BillNo: item["Bill No."],
      PendingAmount: item["Pending Amount"],
      CollectionDate: item["Collection Date"],
    });
    navigate('/payment_mode');
  }

  
  return (
    <div className='homeContainer'>
      <Navbar showNavbar="true" showHeading="false" navigationStack={0}/>
      {data.map((item) => (
        <div className='clientList' key={item["Bill No."]} onClick={() => {handleClick(item)}}>
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