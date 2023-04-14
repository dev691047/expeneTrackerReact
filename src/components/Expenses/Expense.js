import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import './Expense.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(v=> {
    return v.date.getFullYear().toString() ===filteredYear;
  })


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        {/* so this below line is clecking the first comndition and if it is true then after && the second condition get excuted and its a paragaph  */}
        {filteredExpenses.length === 0 && <p>No result found.</p>}
        {filteredExpenses.length===1  && filteredExpenses.map((v,i)=>(
          
            <ExpenseItem 
              key={v.id}
              title={v.title}
              amount={v.amount}
              date={v.date} 
           />
          ))}
        {/* somewhat same thing is happening here */}
        {filteredExpenses.length >1 && 
          filteredExpenses.map((v,i)=>(
            <ExpenseItem 
              key={v.id}
              title={v.title}
              amount={v.amount}
              date={v.date} 
           />
          ))
        }

        {/* we can also do it like this */}
        {/* but there is a problen when assigingn a key value beacause if any data in list get deleted or modified or added the value of i get change and react get confused */}
        {/* {
          props.items.map((v,i)=>(
            <ExpenseItem 
              title={props.items[i].title}
              amount={props.items[i].amount}
              date={props.items[i].date} 
           />
          ))
        } */}
       
      </Card>
    </div>
  );
};

export default Expenses;