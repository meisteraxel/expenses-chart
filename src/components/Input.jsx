import React from "react";
import "../style.css";

function Input() {
  return (
    <div className="input-container">
      <label htmlFor="balance">Balance</label>
      <input type="number" id="balance" />
      <label htmlFor="mon">Monday</label>
      <input type="number" id="mon" />
      <label htmlFor="tue">Tuesday</label>
      <input type="number" id="tue" />
      <label htmlFor="wed">Wednesday</label>
      <input type="number" id="wed" />
      <label htmlFor="thu">Thursday</label>
      <input type="number" id="thu" />
      <label htmlFor="fri">Friday</label>
      <input type="number" id="fri" />
      <label htmlFor="sat">Saturday</label>
      <input type="number" id="sat" />
      <label htmlFor="sun">Sunday</label>
      <input type="number" id="sun" />
      <button>Submit</button>
    </div>
  );
}

export default Input;
