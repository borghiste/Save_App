import { useContext } from "react";
import { TransactionDispatchContext } from "../TransactionContext";

export default function TransactionItem({transaction,id,date}){

  const dispatch=useContext(TransactionDispatchContext)

  function deleteTransaction(id){
    dispatch({
      type:'deleted',
      id
    })
  }


    return(
        <>
        <li className="minus">
          {transaction.text} <span>{transaction.amount}</span><button className="delete-btn" onClick={()=>deleteTransaction(id)}>x</button>
          <small>{date}</small>
          <i class={transaction.expense ?"fa-solid fa-minus" :"fa-solid fa-plus"}></i>
        </li>
         </>
    )
}