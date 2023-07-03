import React from 'react';
import './expenseDate.css';

// function expenseDate (props) {
    const expenseDate = (props) => {
    let month = props.date.toLocaleString('en-US',{month: 'long'});
    let year = props.date.getFullYear();
    let day = props.date.toLocaleString('en-US',{day:'2-digit'});

    return (
        <div className = "expense-date">
                <div className = "expense-date__month"> {month}</div>
                <div className = "expense-date__date">{day}</div>
                <div className = "expense-date__year">{year}</div>
            </div>
    );

}

export default expenseDate;