import React from "react";
import "./style.css";
import Balance from "./components/Balance";
import Chart from "./components/Chart";
import Input from "./components/Input";

function App() {
  const [balance, setBalance] = React.useState(7048.65);
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

  return (
    <main>
      <Input />
      <div>
        <Balance balance={balance} />
        <Chart balance={balance} expenses={expenses} />
      </div>
    </main>
  );
}

export default App;
