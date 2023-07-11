import './Expense.css';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import { useState } from 'react';

const Expense = (props) => {
    const [year, setYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    });


    return (
        <div>   
            <div className='expenses'>
                <ExpensesFilter 
                    onChangeFilter={filterChangeHandler}
                    selected={year}
                />
                <ExpenseChart expenses={filteredExpenses}/>
                <ExpenseList items={filteredExpenses}/>
            </div>
        </div>
    );
}

export default Expense;