import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');

    const inputChangeHandler = (identifier, value) => {
        if (identifier === 'title') {
            setEnterTitle(value);
        } else if (identifier === 'date') {
            setEnterDate(value);
        } else {
            setEnterAmount(value);
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterTitle,
            amount: +enterAmount,
            date: new Date(enterDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnterTitle('');
        setEnterDate('');
        setEnterAmount('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enterTitle} onChange={(event) => {
                        inputChangeHandler('title', event.target.value);
                    }}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enterAmount} onChange={(event) => {
                        inputChangeHandler('amount', event.target.value);
                    }}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-12-31' value={enterDate} onChange={(event) => {
                        inputChangeHandler('date', event.target.value);
                    }}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;