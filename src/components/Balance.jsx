import React from "react";
import "../style.css";
import logo from "../assets/logo.svg";

function Balance() {
  return (
    <div className="balance-container">
      <div>
        <h1>My Balance</h1>
        <h2>$921.48</h2>
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Balance;
