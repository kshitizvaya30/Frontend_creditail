import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { IoArrowBackSharp } from "react-icons/io5";

function Navbar(props) {

  const [showNavbar, setShowNavbar] = useState(true);
  const [showSubHeading, setShowSubHeading] = useState(true);
  
  useEffect(() => {
    setShowNavbar(props.showNavbar);
    setShowSubHeading(props.subHeading);
  },[props]);
  
  return (
    <div className="navbarContainer">
      <div className="navbarSpace"></div>
      {showNavbar && <div className="subContainer">
        <div className="ArrowBtn">
          <IoArrowBackSharp color="white" size={20} />
        </div>
        <div className="heading">
          <div className="pageHeading">Invoices</div>
          {showSubHeading && <div className="subHeading">Agarwal Brothers and soooooooooooooooooooooooo</div>}
        </div>
      </div>
}
    </div>
  );
}

export default Navbar;
