import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // event naam ka ye object hai9
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();  // so that all the default 
        // behaviours of page stop . Ex:- reloading the page

        const expenseDate = {
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate) // we've used new Date(...)
            // since enteredDate is in string format now it get 
            // converted to object
        }

        props.onSaveExpenseData(expenseDate);
        // console.log(expenseDate.title);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };
    return (
        <form onSubmit = {submitHandler}>
            <div className = "new-expense__controls">
                
                <div className = "new-expense__control">
                    <label>Title</label>
                    <input type = "text" value={enteredTitle} onChange = {titleChangeHandler} />

                </div>
                <div className = "new-expense__control">
                    <label>Amount</label>
                    <input type = "number" min="0.01" step="0.01" value={enteredAmount} onChange = {amountChangeHandler} />

                </div>
                <div className = "new-expense__control">
                    <label>Date</label>
                    <input type = "date" value={enteredDate} onChange = {dateChangeHandler} />

                </div>
            </div>
            <div className = "new-expense__actions">
                <button type = "submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;