import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import "./SuccessPage.scss";
import { FaCheck } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000)
  }, [])
  
  return (
    <div className="successPageContainer">
      <Navbar showNavbar={false} showHeading={true} />
      <div className="successPage">

        {/* Success Icon  */}
        <div className="outerCircle">
          <div className="tickIcon">
            <FaCheck size={45} color="#188748" />
          </div>
        </div>
        <div className="BillNumber">{location.state.productData.BillNo}</div>
        <div className="price">&#8377; {location.state.details.payment}</div>
        <div className="RetailerName"> {location.state.productData.RetailerName}</div>

        <div className="divider"></div>
        <div className="paymentMode"> PAID BY {location.state.details.mode}</div>
        <div className="footer">Redirecting to home screen....</div>
      </div>
    </div>
  );
}

export default SuccessPage;
