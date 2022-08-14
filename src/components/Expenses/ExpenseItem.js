import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {

  return (
    <li onClick={() => props.onDelete(props.id)}>
    <Card className="expense__item">
      <ExpenseDate date={props.date} />
      <div className="expense__item__description">
        <h2>{props.title}</h2>
        <div className="expense__item__price">${props.price}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
