import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from "../UI/Card"
import { useState } from 'react';

function ExpenseItem(props) {
   const[title,setTitle]=useState(props.title);
    function changeTitle(){
        setTitle('changed');
    }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={changeTitle}>change title</button>
      <button onClick={changeTitle}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;
