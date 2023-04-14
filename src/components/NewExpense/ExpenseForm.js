
// import { useState } from "react";
// import "./ExpenseForm.css"

// const ExpenseForm=(props)=>{
// const[title,setTitle]=useState("");
// const[amount,setAmount]=useState("");
// const[date,setDate]=useState("")

// function onchangeTitle(e){
// console.log(e.target.value);
// setTitle(e.target.value);
// }
// function onchangeAmount(e){
//   console.log(e.target.value);
//   setAmount(e.target.value);
//   }
// function onchangeDate(e){
//     console.log(e.target.value);
//     setDate(e.target.value);
//     }
// function onsubmitForm(e){
//   e.preventDefault();
//   const expenseDate={
//     title:title,
//     amount:amount,
//     date:new Date(date)
//   }
//   // console.log(expenseDate)
//   props.dataFromExpenseFormtoNewExpense(expenseDate);
// } 


// return  <form onSubmit={onsubmitForm}>
//           <div className='new-expense__controls'>
//             <div className="new-expense__control">
//                 <label>Title</label>
//                 <input type="text" onChange={onchangeTitle} value={title}></input>
//             </div>

//             <div className='new-expense__control'>
//                 <label>Amount</label>
//                 <input type="number" min="0.01" step="0.01"  onChange={onchangeAmount} value={amount}></input>
//             </div>

//             <div className='new-expense__control'>
//                 <label>Date</label>
//                 <input type="date" min="2019-01-01" max="2023-12-31" onChange={onchangeDate} value={date}></input>
//             </div>         
//           </div>
//           <div className="new-expense_actions">
//             <button type="submit" >Add Expense</button>
//           </div>
// </form>
// }
// export default ExpenseForm;


import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const [isActive, setActive] = useState("false");
  function cancelHandler(event){
      event.preventDefault();
      setActive(!isActive); 
  }

  return (
    <form onSubmit={isActive ? submitHandler : undefined}>
      <div id="expForm" className={isActive ? "new-expense__controls" : "hide__controls"}>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button id="cancelButton" onClick={cancelHandler}   className={isActive ? "cancelButton" : "hide__controls"}>Cancel</button>

        <button type='submit'>Add Expense</button>


        
      </div>
    </form>
  );
};

export default ExpenseForm;