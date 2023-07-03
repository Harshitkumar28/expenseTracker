import React from 'react';
import './Expenses.css';

import ExpenseItem from './ExpenseItem.js';

import Card from '../UI/card.js';


// function Expenses(props) {
    // making arrow function instead
    const Expenses = (props) => {
    return (
        <Card className = "expenses">
            {
                props.items.map(
                    expense => (
                        <ExpenseItem
        // passing variables 
        date = {expense.date}
        title = {expense.title}
        amount = {expense.amount} />
                    )
                )
            }

        {/* ye neeche waala ko baar baar likhne ki jarurat nhi hai */}
        {/* <ExpenseItem
        // passing variables 
        date = {props.items[0].date}
        title = {props.items[0].title}
        amount = {props.items[0].amount} />
        <ExpenseItem
        // passing variables 
        date = {props.items[1].date}
        title = {props.items[1].title}
        amount = {props.items[1].amount} /> 
        <ExpenseItem
        // passing variables 
        date = {props.items[2].date}
        title = {props.items[2].title}
        amount = {props.items[2].amount} />
        <ExpenseItem
        // passing variables 
        date = {props.items[3].date}
        title = {props.items[3].title}
        amount = {props.items[3].amount} /> */}
        </Card>
    );
}

export default Expenses;

