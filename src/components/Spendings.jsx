import React from "react";
import "../style.css";
import data from "../assets/data.json";

function Spending() {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  return (
    <div className="spending-container">
      <h2>Spending - Last 7 days</h2>
      <div className="charts">
        {data.map((item, index) => (
          <div className="single-chart-container">
            <div className="popup">
              <p>${item.amount}</p>
            </div>
            <div
              className={`bar ${currentDay === index + 1 ? "today" : ""}`}
              style={{ height: `${item.amount * 3}px` }}
            ></div>
          </div>
        ))}
      </div>
      <div className="days">
        {data.map((item) => (
          <p>{item.day}</p>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Spending;
