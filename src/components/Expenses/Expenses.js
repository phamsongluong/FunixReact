import ExpenseItem from './ExpenseItem';
import './Expense.css';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';

const Expense = (props) => {
    const [year, setYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setYear(selectedYear);
    };

    const res = [];
    props.items.forEach(element => {
        res.push(
            <ExpenseItem
                title={element.title}
                amount={element.amount}
                date={element.date}
                key={element.title}
            ></ExpenseItem>
        )
    });
    return (
        <div>   
            <div className='expenses'>
                <ExpensesFilter 
                    onChangeFilter={filterChangeHandler}
                    selected={year}
                />
                {res}
            </div>
        </div>
    );
}

export default Expense;