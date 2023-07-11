import ExpenseItem from './ExpenseItem';
import './Expense.css';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';

const Expense = (props) => {
    const [year, setYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setYear(selectedYear);
    };

    const filterdExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    });

    const items = filterdExpenses.map(element => {
        return (
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
                {items}
            </div>
        </div>
    );
}

export default Expense;