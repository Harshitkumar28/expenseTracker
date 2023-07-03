import React,{useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './expenseDate';

import Card from '../UI/card';

// function ExpenseItem (props) {
    const ExpenseItem = (props) => {

    //     Below is handling the input 
    //     // this useState passes us two things ... one is a variable
    //     // and other is a function (setTitle here)

    //     const [newTitle,setNewTitle] = useState("hi"); // means input
    //     // 'hi' se initialize hoga 
    //    const [title,setTitle] = useState(props.title);

        // // function will execute when clicked
        // const clickHandler = () => {
        //     setTitle(newTitle);
        //     // alert("clicked");
        // }

        // const changeHandler = (event) => {
        //     setNewTitle(event.target.value);
        // }
    
    return (
        <Card className = "expense-item">
            <ExpenseDate date={props.date} /> 
            {/* // remember jsx file ka  */}
            {/* // first letter capital hona chahiye .. here 'E' */}
            <div className = "expense-item__description">
                {/* <h2>{title}</h2> this is handling the input wala part  */}
                <h2>{props.title}</h2>
                <div className = "expense-item__price">${props.amount}</div>
            </div>

            {/* //  Below is handling the input 
            <input text = "text" value = {newTitle} onChange = {changeHandler}/>
            <button onClick = {clickHandler}>Change Title</button> */}
        </Card>
    )
}

export default ExpenseItem;