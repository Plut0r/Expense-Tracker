import { useEffect, useState } from "react";
import "./App.css";
import ExpenseData from "./components/Expenses/ExpenseData";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 295.65,
    date: new Date("May 23 2022"),
  },
  {
    id: 2,
    title: "New House",
    amount: 195.65,
    date: new Date("July 30 2022"),
  },
];

function App() {
  const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem('expense')) || initialExpenses);

  useEffect(() => {
      setExpenses(JSON.parse(localStorage.getItem('expense')));
  }, []);


  useEffect(() => {
      localStorage.setItem("expense", JSON.stringify(expenses));
  }, [expenses]);

  function handleAddExpense(expense) {
    //setExpenses(expense)
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const deleteExpenseHandler = (expenseId) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter(
        (expense) => expense.id !== expenseId
      );
      return updatedExpenses;
    });
  };
  return (
    <div className="app">
      <NewExpense onAddExpense={handleAddExpense} />
      <ExpenseData items={expenses} delete={deleteExpenseHandler} />
    </div>
  );
}

export default App;

export const formatDate = (date) => {
  return new Date(date)
}

// <ExpenseData items={expenses} />
