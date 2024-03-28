import React from "react";
import "../style.css";

function Input(props) {
  return (
    <div className="input-container">
      <label htmlFor="balance">Balance</label>
      <div className="inputwrapper">
        <input type="number" id="balance" placeholder="1000" />
        <span>$</span>
      </div>
      {props.expenses.map((item) => (
        <>
          <label key={item.day} htmlFor={item.day}>
            {item.day}
          </label>
          <div className="inputwrapper">
            <input type="number" id={item.day} placeholder="50" />
            <span>$</span>
          </div>
        </>
      ))}
      <button onClick={props.calcInput}>Submit</button>
    </div>
  );
}

export default Input;
