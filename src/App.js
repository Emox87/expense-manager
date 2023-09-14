import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expensesData = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 295.99,
      date: new Date(2023, 8, 8),
    },
    {
      id: 2,
      title: "Gaming Computer",
      amount: 1500.99,
      date: new Date(2023, 6, 23),
    },
    {
      id: 3,
      title: "Office Laptop",
      amount: 899.99,
      date: new Date(2023, 8, 7),
    },
    {
      id: 4,
      title: "TV",
      amount: 699.99,
      date: new Date(2023, 4, 21),
    },
  ];

  const [expenses, setExpenses] = useState(expensesData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
