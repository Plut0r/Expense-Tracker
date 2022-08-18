import React from "react";
import "./ExpenseDate.css"
import { formatDate} from "../../App"

function ExpenseDate(props) {
  const month = formatDate(props.date).toLocaleString("en-US", { month: "long" });
  const day = formatDate(props.date).toLocaleString("en-US", { day: "2-digit" });
  const year = formatDate(props.date).getFullYear();
  return (
    <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
