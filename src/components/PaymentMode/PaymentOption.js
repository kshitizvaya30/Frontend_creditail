import React, { useContext, useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import "./PaymentOption.scss";
import { Context } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { BsCurrencyRupee } from "react-icons/bs";

function PaymentOption() {
  const navigate = useNavigate();
  const { productData } = useContext(Context);
  const [price, setPrice] = useState(0);
  const [selectedMode, setSelectedMode] = useState(null);

  useEffect(() => {
    setPrice(productData.PendingAmount);
  }, [productData]);

  const handleChange = (updatePrice) => {
    setPrice(updatePrice);
  }
  const handlePaymentModeClick = (mode) => {
    setSelectedMode(mode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(selectedMode === null){
      alert('Please select a mode of Payment');
      return;
    }
    if(productData.PendingAmount < price){
      alert('Pending Amount is Less');
      setPrice(productData.PendingAmount);
      return;
    }
    
    //Update the Price in db

    const details = {
      mode: selectedMode,
      payment: price,
    }
    navigate("/success", {state: {details: details, productData: productData}})
  }

  return (
    <div className="paymentContainer">
      <Navbar showNavbar={true} showHeading={true} navigationStack={-1}/>
      <div className="amountContainer">
        <div className="inputContainer">
          <label htmlFor="amount" className="label">
            Amount
          </label>
          <div className="inputBox">
            <div className="currencySymbol">
              <BsCurrencyRupee />
            </div>
            <input type="number" className="input" value={price} onChange={(e) => handleChange(e.target.value)}/>
          </div>
        </div>
      </div>
      <div className="paymentMethodsContainer">
        <div className="heading">Choose Payment Mode</div>
        <div className="paymentMethod">
      <div
        className={`paymentMode ${selectedMode === 'Online' ? 'selected' : ''}`}
        onClick={() => handlePaymentModeClick('Online')}
      >
        Online
      </div>
      <div
        className={`paymentMode ${selectedMode === 'Cash' ? 'selected' : ''}`}
        onClick={() => handlePaymentModeClick('Cash')}
      >
        Cash
      </div>
      <div
        className={`paymentMode ${selectedMode === 'Cheque' ? 'selected' : ''}`}
        onClick={() => handlePaymentModeClick('Cheque')}
      >
        Cheque
      </div>
    </div>
        <button className="ConfirmBtn" onClick={(e) => handleSubmit(e)}>Confirm</button>
      </div>
    </div>
  );
}

export default PaymentOption;
