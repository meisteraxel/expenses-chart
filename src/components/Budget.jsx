import React from "react";
import "../style.css";
import logo from "../assets/logo.svg";

function Budget(props) {
  return (
    <div className="budget-container">
      <div>
        <h1>My Budget</h1>
        <h2>${props.budget}</h2>
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Budget;
