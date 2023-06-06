import React from "react";
import Navbar from "../navbar/Navbar";
import "./PaymentOption.scss";

function paymentOption() {
  return (
    <div className="paymentContainer">
      <Navbar showNavbar={true} showHeading={true}/>
      <div className="amountContainer">
        <div className="inputContainer">
          <label htmlFor="amount" className="label">
            Amount
          </label>
          <input type="number" className="input" />
        </div>
      </div>
      <div className="paymentMethodsContainer">
        <div className="heading">Choose Payment Mode</div>
        <div className="paymentMethod">
          <div className="paymentMode">Online</div>
          <div className="paymentMode">Cash</div>
          <div className="paymentMode">Cheque</div>
        </div>
        <button className="ConfirmBtn">Confirm</button>
      </div>
    </div>
  );
}

export default paymentOption;
