import axios from "axios";
import React, { createContext, useState } from "react";

export const Context = createContext();
const AppContext = ({ children }) => {
  const [user, setUser] = useState({
    productClicked: false,
  });

  const [data, setData] = useState([]);
  const url = "http://13.232.235.207:8080/";

  const [productData, setProductData] = useState({
    "id": 1,
    "Brand": "",
    "SalesRepId": "",
    "SalesmanName": "",
    "InvoiceAmount": 0,
    "RetailerId": "",
    "RetailerName": "",
    "RetailerPhno": "",
    "InvoiceDate": "",
    "BillNo": "",
    "PendingAmount": 0,
    "CollectionDate": "",
  });

  const getAllClients = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: url+"api/getCustomers",
      headers: { }
    };
    
    axios.request(config)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }


  const updatePendingAmount = (price, id) => {
    let data = JSON.stringify({
      "id": id,
      "pendingAmount": productData.PendingAmount - price
    });

    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: url+"api/updatePendingAmount",
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      return JSON.stringify(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        productData,
        setProductData,
        updatePendingAmount,
        getAllClients,
        data,
        setData
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
