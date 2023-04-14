import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{

    const onsubmitFormdata=expense=>{
        // console.log(expense);
        const expenseDate={
            ...expense,
            id:Math.random().toString()
        }
        props.dataFromNewExpensetoApp(expenseDate);
    }
    return <div className="new-expense">
       <ExpenseForm  onSaveExpenseData={onsubmitFormdata}/>
    </div>
}
export default NewExpense;