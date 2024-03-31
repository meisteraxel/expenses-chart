import React from "react";
import "./style.css";
import Budget from "./components/Budget";
import Chart from "./components/Chart";
import Input from "./components/Input";

function App() {
  const [budget, setBudget] = React.useState(1000);
  const [expenses, setExpenses] = React.useState([
    {
      day: "mon",
      amount: 20.45,
    },
    {
      day: "tue",
      amount: 32.23,
    },
    {
      day: "wed",
      amount: 42.65,
    },
    {
      day: "thu",
      amount: 65.78,
    },
    {
      day: "fri",
      amount: 23,
    },
    {
      day: "sat",
      amount: 11,
    },
    {
      day: "sun",
      amount: 5,
    },
  ]);

  function keyPress(event) {
    if (event.key === "Enter") {
      calcInput();
    }
  }

  function calcInput() {
    const newBudget = document.getElementById("budget").value;
    setBudget(newBudget !== "" ? newBudget : budget);

    const updatedExpenses = expenses.map((item) => {
      const inputValue = document.getElementById(item.day).value.trim();
      const newAmount =
        inputValue !== "" ? parseFloat(inputValue) : item.amount;

      return {
        ...item,
        amount: newAmount,
      };
    });

    setExpenses(updatedExpenses);

    const inputElements = document.querySelectorAll(
      ".input-container input[type=number]"
    );
    inputElements.forEach((inputElement) => {
      inputElement.value = "";
    });
  }

  function reset() {
    setBudget(0);
    const resetExpenses = expenses.map((item) => {
      return {
        day: item.day,
        amount: 0,
      };
    });

    setExpenses(resetExpenses);
  }

  return (
    <>
      <main>
        <Input
          budget={budget}
          expenses={expenses}
          calcInput={calcInput}
          resetExpenses={reset}
          keyPress={keyPress}
        />
        <div>
          <Budget budget={budget} />
          <Chart budget={budget} expenses={expenses} />
        </div>
      </main>
    </>
  );
}

export default App;
