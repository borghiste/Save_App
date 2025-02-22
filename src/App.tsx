import { useState,useReducer, useContext } from "react";
import Balance from "../src/components/Balance";
import IncExpContainer from "../src/components/IncExpContainer";
import TransactionsList from "../src/components/TransactionsList";
import AddTransaction from "../src/components/AddTransaction";
import TransactionItem from "../src/components/TransactionItem";
import FilterButtonsContainer from "../src/components/FilterButtonsContainer";
import TransactionReducer from "../src/TransactionReducer";
import { TransactionContext, TransactionDispatchContext } from "../src/TransactionContext";
import '../src/App.css';




export default function App(){

  
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
const FILTERS={all: ()=>true,
  expenses: transaction => transaction.expense,
income: transaction => !transaction.expense}


const [filter,setFilter]=useState('all')








 












const transactionsList = transactions.filter(FILTERS[filter]).map(transaction => <TransactionItem transaction={transaction} key={transaction.id} id={transaction.id} date={transaction.date} />  );






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
<FilterButtonsContainer filters={FILTERS} setFilter={setFilter} />



<TransactionsList transactionsList={transactionsList} />
<AddTransaction />
   </div>
   </>
   </TransactionDispatchContext.Provider>
   </TransactionContext.Provider>
 

    
 

  )
}

