import React from "react";

import "../css/pageHeader.css";
import logo from "../img/Logo.png";
// Functional component
const PageHeader = ({ handleHomeClick }) => {
  return (
    <div id="pageHeader">
      <button id="icon" onClick={handleHomeClick}>
        <img src={logo} alt="" style={{ width: "64px" }} />
      </button>
      <div id="siteName">HoteloHelp</div>
      <div id="accountName">Guest</div>
      <button id="login">Login</button>
      <button id="light/dark">light/dark</button>
    </div>
  );
};

export default PageHeader;
