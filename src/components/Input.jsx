import React from "react";
import "../style.css";

function Input(props) {
  return (
    <div className="input-container">
      <label htmlFor="budget">budget</label>
      <div className="inputwrapper">
        <input
          type="number"
          id="budget"
          placeholder="1000"
          onKeyDown={props.keyPress}
        />
        <span>$</span>
      </div>
      {props.expenses.map((item) => (
        <>
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
        </>
      ))}
      <button onClick={props.resetExpenses} id="reset-btn">
        Reset
      </button>
      <button onClick={props.calcInput}>Submit</button>
    </div>
  );
}

export default Input;
