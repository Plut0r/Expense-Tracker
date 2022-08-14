import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [add, setAdd] = useState(false);
  
  function handleClick() {
    setAdd((prevState) => !prevState);
  }

  function handleCancel() {
    setAdd(!handleClick)
  }

  function saveExpenseData(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(expenseData)
    props.onAddExpense(expenseData);
    setAdd(false)
  }
  return (
    <div className="new-expense">
      {!add ? (
        <button onClick={handleClick}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}

export default NewExpense;
