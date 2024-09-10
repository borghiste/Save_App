import { useState,useReducer, useContext } from "react";
import Balance from "./Balance";
import IncExpContainer from "./IncExpContainer";
import TransactionsList from "./TransactionsList";
import AddTransaction from "./AddTransaction";
import TransactionItem from "./TransactionItem";
import FilterButtonsContainer from "./FilterButtonsContainer";
import TransactionReducer from "../TransactionReducer";
import { TransactionContext, TransactionDispatchContext } from "../TransactionContext";




export default function Container(){

  
// TRANSACTIONS

const date = new Date();
const[day,month,year]=[date.getDate(),date.getMonth(),date.getFullYear()];
const datestring =`${day}-${month}-${year}`;

  const data:{id:number,text:string,amount:number,date:string,expense:boolean}[] =[{id:1,
  text:'book',
amount:30,
date:datestring,
expense:true
},
{id:2,
text:'something',
amount:1000,
date:datestring,
expense:true
},
{id:3,
text:'something else',
amount:5,
date: datestring,
expense:false},
{id:4,
text:'something 4',
amount:877686,
expense:true,
date:datestring}
];
// usereducer/transactions
const [transactions,dispatch]=useReducer(TransactionReducer,data)







// FILTERS 


const [filter,setFilter]=useState('all')








 












const transactionsList = transactions.map(transaction => <TransactionItem transaction={transaction} key={transaction.id} id={transaction.id} date={transaction.date} />  );






// INC-EXP 
let income = 10000;
let expenses:number= transactions.map(transaction => transaction.amount).reduce((accumulator,value) => {return accumulator + value},0 );
let balance = expenses-income








return (
  
  <TransactionContext.Provider value={transactions} >
    <TransactionDispatchContext.Provider value={dispatch} >
<>



   <h2>Expense Tracker</h2>
  
   <div className="container">
<Balance balance={balance}/>
<IncExpContainer  expenses={expenses} income={income}/>



<TransactionsList transactionsList={transactionsList} />
<AddTransaction />
   </div>
   </>
   </TransactionDispatchContext.Provider>
   </TransactionContext.Provider>
 

    
 

  )
}

