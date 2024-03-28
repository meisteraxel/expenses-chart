import React from "react";
import "../style.css";
import Spending from "./Spendings.jsx";
import Total from "./Total.jsx";

function Chart() {
  return (
    <div className="chart-container">
      <Spending />
      <Total />
    </div>
  );
}

export default Chart;
