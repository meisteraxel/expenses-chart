import React from "react";
import "../style.css";

function Input(props) {
  return (
    <div className="input-container">
      <div className="inputwrapper">
        <label htmlFor="budget">budget</label>
        <input
          type="number"
          id="budget"
          placeholder="1000"
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
              placeholder="50"
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
