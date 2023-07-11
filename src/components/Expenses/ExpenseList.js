import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

const ExpenseList = props => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }

    return (<ul className="expenses-list">
        {
            props.items.map(element => {
                return (
                    <ExpenseItem
                        title={element.title}
                        amount={element.amount}
                        date={element.date}
                        key={element.title}
                    ></ExpenseItem>
            )})
        }
    </ul>);
};

export default ExpenseList;