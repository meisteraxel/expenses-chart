import React from "react";
import "../style.css";

function Input(props) {
  return (
    <div className="input-container">
      <label htmlFor="balance">Balance</label>
      <input type="number" id="balance" placeholder="1000" />
      {props.expenses.map((item) => (
        <>
          <label key={item.day} htmlFor={item.day}>
            {item.day}
          </label>
          <input type="number" id={item.day} placeholder="50" />
        </>
      ))}
      <button onClick={props.calcInput}>Submit</button>
    </div>
  );
}

export default Input;
