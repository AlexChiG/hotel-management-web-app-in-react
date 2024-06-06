import React from "react";

import "../css/PageFooter.css";
import logoDark from "../img/LogoDark.png";
// Functional component
const PageFooter = () => {
  return (
    <div id="PageFooter">
      <div id="icon">
        <img src={logoDark} alt="" style={{ width: "64px" }}/>
      </div>
      <div id="copyright">Example Copyright © 2024 HoteloHelp™. All rights reserved. </div>
      <div id="author">This React Project was made by Chitiga Alexandru Gabriel</div>
    </div>
  );
};

export default PageFooter;
