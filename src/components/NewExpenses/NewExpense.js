import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpensedData) => {
        const expenseDate = {
            ...enteredExpensedData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseDate);
    };
    return (
        <div className = "new-expense">
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;