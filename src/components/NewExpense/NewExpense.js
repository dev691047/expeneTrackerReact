import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense=(props)=>{

    const[isEditing,setIsEditing]=useState(false)

    const onsubmitFormdata=expense=>{
        // console.log(expense);
        const expenseDate={
            ...expense,
            id:Math.random().toString()
        }
        props.dataFromNewExpensetoApp(expenseDate);
        setIsEditing(false)
    }

    const startEditingHandler=()=>{
      setIsEditing(true);
    }
    const stopEditingHandler=()=>{
       setIsEditing(false);
    }


    return <div className="new-expense">
       {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
       {isEditing && 
       <ExpenseForm 
        onSaveExpenseData={onsubmitFormdata}
        onCancel={stopEditingHandler}
       />}
    </div>
}
export default NewExpense;