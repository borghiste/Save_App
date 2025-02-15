import {  useRef, useContext } from "react"; 
import { TransactionDispatchContext } from "../TransactionContext";
import {nanoid} from 'nanoid';


export default function AddTransaction(){

  const dispatch=useContext(TransactionDispatchContext)
  const inputtextref=useRef();
  const inputamountref= useRef();
  const inputdateref =useRef();
  const inputcheckref=useRef()

  function addTransaction(text,amount,date,expense){
    dispatch({type:'added',
    id:nanoid(),
    text,
    amount,
    date,
    expense
    })
  }

  function handleaddTransaction(e){

    addTransaction(inputtextref.current.value,inputamountref.current.value,inputdateref.current.value),inputcheckref.value


  }

  function handleSubmit(e){
    e.preventDefault();
    // (e)=>Submit(e,dispatch)
  }





    
  


    
    
  



    return(
        <>
        <h3>Add new transaction</h3>
        <form id="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text"  placeholder="Enter text..." ref={inputtextref} />
          </div>
          <div className="form-control">
            <label htmlFor="amount"
              >Amount <br />
             </label>
            <input type="number" id="amount" placeholder="Enter amount..." ref={inputamountref} />
          </div>
          <div className="form-control">
            <label htmlFor="date"
              >date <br />
              </label>
            <input type="date" id="date"  ref={inputdateref}/>
            <label htmlFor="income/expense">income/expense</label>
            <input type="radio" ref={inputcheckref}/>
          </div>
          <button className="btn" onClick={()=>handleaddTransaction()}>Add transaction</button>
        </form>
        
        </>
    )
}