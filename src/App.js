import React, {useState,useEffect} from 'react';
import NewExpense from './components/NewExpenses/NewExpense.js';
import Expenses from './components/Expenses/Expenses.js';

let DUMMY_EXPENSE =[
  {
    id : 'e1',
    title : 'School-fee',
    amount: 250,
    date : new Date(2021,5,12)
  },
  {
    id : 'e2',
    title : 'Books',
    amount: 220,
    date : new Date(2021,2,22)
  },
  {
    id : 'e3',
    title : 'House Rent',
    amount: 230,
    date : new Date(2021,2,18)
  },
  {
    id : 'e4',
    title : 'Medical cost',
    amount: 2500,
    date : new Date(2021,7,17)
  },

];


// we'll make our first component here 
// function App(){
  const App = () => {
  // this looks like html but this is JSX
  // yha se ek hi tag paas kr skte hai 
  // this is for single object
  // let expenseDate = new Date(2021,3,23); // it is a javascript date object which is inbuilt in javascript
  // let expenseTitle = "School fee";
  // let expenseAmount = 300;

  // for multiple objects

  const [expenses,setExpenses] = useState(DUMMY_EXPENSE);

//  useEffect (() => {
//   fetch('http://localhost/sample-api/api/read.php').then(
//     response => {
//       return response.json();
//     }
//   ).then(
//     data => {
//       setExpenses(data);
//     }
//   );
//  },[]);
 

  const addExpenseHandler = (expense) => { 
    const updatedExpense = [expense,...expenses];
    setExpenses(updatedExpense);
  };
  return (
       <div>
        {/* <h2>Let's get started</h2> */}
        <NewExpense onAddExpense = {addExpenseHandler} />
        <Expenses items = {expenses} />

       </div>
  );
}

export default App; // taaki naam change kr ske so default 
