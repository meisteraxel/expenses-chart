import React from "react";
import "../style.css";

function Input(props) {
  return (
    <div className="input-container">
      <p className="explanation">
        Set a weekly budget and track expenses, starting with placeholder data.
        You can reset everything, input your budget, and submit it. Enter
        expenses for each day or select days and submit them to the tracker.
      </p>
      <hr />
      <div className="inputwrapper">
        <label htmlFor="budget">budget</label>
        <input
          type="number"
          id="budget"
          placeholder={props.budget}
          onKeyDown={props.keyPress}
        />
        <span>$</span>
      </div>
      {props.expenses.map((item, index) => (
        <div key={index}>
          <label key={item.day} htmlFor={item.day}>
            {item.day}
          </label>
          <div className="inputwrapper">
            <input
              type="number"
              id={item.day}
              placeholder={item.amount}
              onKeyDown={props.keyPress}
            />
            <span>$</span>
          </div>
        </div>
      ))}
      <button onClick={props.resetExpenses} id="reset-btn">
        Reset
      </button>
      <button onClick={props.calcInput}>Submit</button>
    </div>
  );
}

export default Input;
