import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate'
import Expenses from './Expenses'
import Card from "./Card";
import {useState} from 'react'


function ExpenseItem(props) {
    const title = props.title;
  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      
    </Card>
  );
}

export default ExpenseItem;
