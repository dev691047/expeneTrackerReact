
import { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm=(props)=>{
const[title,setTitle]=useState("");
const[amount,setAmount]=useState("");
const[date,setDate]=useState("")

function onchangeTitle(e){
console.log(e.target.value);
setTitle(e.target.value);
}
function onchangeAmount(e){
  console.log(e.target.value);
  setAmount(e.target.value);
  }
function onchangeDate(e){
    console.log(e.target.value);
    setDate(e.target.value);
    }
function onsubmitForm(e){
  e.preventDefault();
  const expenseDate={
    title:title,
    amount:amount,
    date:new Date(date)
  }
  // console.log(expenseDate)
  props.dataFromExpenseFormtoNewExpense(expenseDate);
} 


return  <form onSubmit={onsubmitForm}>
          <div className='new-expense__controls'>
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={onchangeTitle} value={title}></input>
            </div>

            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01"  onChange={onchangeAmount} value={amount}></input>
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2023-12-31" onChange={onchangeDate} value={date}></input>
            </div>         
          </div>
          <div className="new-expense_actions">
            <button type="submit" >Add Expense</button>
          </div>
</form>
}
export default ExpenseForm;