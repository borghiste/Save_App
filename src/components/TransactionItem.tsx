import { useContext,useState,useEffect, useRef } from "react";
import { TransactionDispatchContext } from "../TransactionContext";

export default function TransactionItem({transaction,id,date,editTransaction}){
  const dispatch=useContext(TransactionDispatchContext);
  const [editing,setEditing]=useState<boolean>(false);
  const [newtext,setnewText]=useState<string>('');
  const newtextref=useRef();
  useEffect(()=>{if(editing){newtextref.current.focus()}})

// delete transaction
  function deleteTransaction(id){
    dispatch({
      type:'deleted',
      id
    })
  }
  function editTransaction(id,newText){
                              dispatch({
                                type:'edited',
                                text:newText,
                                 id
                               })
                              }
                            

   function handlenewText(){

   setnewText(newtextref.current.value)}


function handleSubmit(e){
  e.preventDefault();
  editTransaction(id,newtext);
  setEditing(false)
}
   


  

    

  
  const TransactionView= (
  <li className="minus">
    <button onClick={()=>setEditing(true)}>edit</button>
  {transaction.text} <span>{transaction.amount}</span><button className="delete-btn" onClick={()=>deleteTransaction(id)}>delete</button>
  <small>{date}</small>
  <i className={transaction.expense ? "fa-solid fa-minus" :"fa-solid fa-plus"}></i>
</li>)

const TransactionEdit= (<li >
  <form  id='form' onSubmit={handleSubmit}>
<input type="text"  onChange={handlenewText}  ref={newtextref}/>
{transaction.text} 
<button type='submit' >save</button>
<button onClick={()=>setEditing(false)}>back</button>
</form>
</li>)


    return(
        <>
        {editing ? TransactionEdit : TransactionView}
        
         </>
    )
}