import React from "react";
import "../style.css";
import data from "../assets/data.json";

function Total() {
  let totalAmount = 0;

  // Iterate over each item in the data array
  for (let i = 0; i < data.length; i++) {
    // Add the amount of the current item to the totalAmount variable
    totalAmount += data[i].amount;
  }

  return (
    <div className="total-container">
      <div>
        <p>Total this month</p>
        <h2>${totalAmount}</h2>
      </div>
      <div>
        <h3>+2.4%</h3>
        <p>from last month</p>
      </div>
    </div>
  );
}

export default Total;
