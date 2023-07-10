import ExpenseItem from './ExpenseItem';
import './Expense.css';

const Expense = (props) => {
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
    return <div className='expenses'>{res}</div>;
  }
  
  export default Expense;