import React, { useState } from "react";
import "./ExpenseData.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart"

function ExpenseData(props) {
  const [filter, setFilter] = useState("2022");
  function handleFilter(selectedYear) {
    setFilter(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filter
  })

 

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filter} onFilter={handleFilter} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList onDeleteExpense={props.delete} items={filteredExpenses} />
    </Card>
  );
}

export default ExpenseData;
