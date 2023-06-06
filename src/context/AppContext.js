import React, { createContext, useState } from "react";

export const Context = createContext();
const AppContext = ({ children }) => {
  const [user, setUser] = useState({
    productClicked: false,
  });

  const [productData, setProductData] = useState({
    Brand: "",
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


  const updatePrice = (price) => {
    
  }

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        productData,
        setProductData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
