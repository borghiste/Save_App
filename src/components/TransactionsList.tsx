export default function({transactionsList}){

    return(
        <>
          <h3>History</h3>
      <ul id="list" className="list">
         {transactionsList}
      </ul>
        </>
    )
}