import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import './Home.scss'
// import {data} from '../../data';
import { Context } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

function Home() {
  const navigate = useNavigate();
  const { setProductData, getAllClients, data} = useContext(Context);
  const [calldata, setCallData] = useState(false);
  useEffect(() => {
    getAllClients();
    setCallData(true);
  }, [calldata])
  
  const handleClick = (item) => {
    setProductData({
      id: item.id,
      Brand: item.brand_id,
      SalesRepId: item.sales_rep_id,
      InvoiceAmount: item.amount,
      RetailerId: item.retailer_id,
      RetailerName: item.name,
      RetailerPhno: item.phone_no,
      InvoiceDate: moment(item.invoice_date).format("DD-MM-YYYY"),
      BillNo: item.bill_no,
      PendingAmount: item.pending_amount,
      CollectionDate: moment(item.collection_date).format("DD-MM-YYYY"),
    });
    navigate('/payment_mode');
  }

  
  return (
    <div className='homeContainer'>
      <Navbar pageHeading="Invoices" showNavbar="true" navigationStack={0}/>
      {data?.map((item) => {
        return(
        <div className='clientList' key={item.id} onClick={() => {handleClick(item)}}>
          <div className='heading'>
            <div className='mainHeading'>{item.bill_no}</div>
            <div className='subHeading'>{item.name}</div>
          </div>
          <div className='price'>&#8377; {item.pending_amount}</div>
        </div>
      )}  
      )}
    </div>
  )
}

export default Home