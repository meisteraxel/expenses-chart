import React from "react";
import "../style.css";

function Spending() {
  const [expenses, setExpenses] = React.useState([
    {
      day: "mon",
      amount: 12.45,
    },
    {
      day: "tue",
      amount: 25.91,
    },
    {
      day: "wed",
      amount: 52.36,
    },
    {
      day: "thu",
      amount: 31.07,
    },
    {
      day: "fri",
      amount: 23.39,
    },
    {
      day: "sat",
      amount: 43.28,
    },
    {
      day: "sun",
      amount: 25.48,
    },
  ]);

  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  let totalAmount = 0;

  for (let i = 0; i < expenses.length; i++) {
    totalAmount += expenses[i].amount;
  }

  return (
    <>
      <div className="spending-container">
        <h2>Spending - Last 7 days</h2>
        <div className="charts">
          {expenses.map((item, index) => (
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
          {expenses.map((item) => (
            <p>{item.day}</p>
          ))}
        </div>
        <hr />
      </div>

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
    </>
  );
}

export default Spending;
