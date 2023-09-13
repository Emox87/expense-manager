import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEneteredTitle] = useState("");
  const [enteredAmount, setEneteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Input Change Handlers
  const titleChangeHandler = (event) => {
    setEneteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEneteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    // Clear all fields after form submision
    setEneteredTitle("");
    setEneteredAmount("");
    setEnteredDate("");
  };

  // Shared function handler to change the values
  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === "title") {
  //     setEneteredTitle(value);
  //   } else if (identifier === "date") {
  //     setEnteredDate(value);
  //   } else {
  //     setEneteredAmount(value);
  //   }
  // };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
