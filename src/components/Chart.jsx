import React from "react";
import "../style.css";

function Chart(props) {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  let totalAmount = 0;

  for (let i = 0; i < props.expenses.length; i++) {
    totalAmount += props.expenses[i].amount;
  }

  return (
    <div className="chart-container">
      <div className="spending-container">
        <h2>Spendings of the Week</h2>
        <div className="charts">
          {props.expenses.map((item, index) => (
            <div className="single-chart-container" key={index}>
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
          {props.expenses.map((item, index) => (
            <p key={index}>{item.day}</p>
          ))}
        </div>
        <hr />
      </div>

      <div className="total-container">
        <div>
          <p>Total this week</p>
          <h2>${totalAmount.toFixed(2)}</h2>
        </div>
        <div>
          <h3>{((totalAmount / props.budget) * 100).toFixed(2)}%</h3>
          <p className="right-aligned">from budget</p>
          <hr />
          <p className="right-aligned">remaining</p>
          <h3>{(props.budget - totalAmount).toFixed(2)}$</h3>
        </div>
      </div>
    </div>
  );
}

export default Chart;
