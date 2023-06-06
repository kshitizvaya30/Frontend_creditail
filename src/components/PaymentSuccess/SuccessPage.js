import React from "react";
import Navbar from "../navbar/Navbar";
import "./SuccessPage.scss";
import { FaCheck } from "react-icons/fa";

function successPage() {
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
        <div className="BillNumber">MD22/1107651</div>
        <div className="price">&#8377; 500</div>
        <div className="RetailerName"> AGRAWAL BROTHERS AND SON</div>

        <div className="divider"></div>
        <div className="paymentMode"> PAID BY CASH</div>
        <div className="footer">Redirecting to home screen....</div>
      </div>
    </div>
  );
}

export default successPage;
