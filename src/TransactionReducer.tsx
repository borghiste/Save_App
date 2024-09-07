/* Il reducer è una funzione che accetta due parametri: 
  lo stato corrente e l'azione che contiene i dettagli per modificarlo.
  Ritorna il nuovo stato aggiornato.
  Spesso si usa uno switch case, andando a selezionare il tipo di azione
  per eseguire il corretto aggiornamento dello stato.
*/

export default function TransactionReducer(transactions,action){
  switch(action.type){
// ADD TRANDSACTION
case 'added': return[...transactions,{id:action.id,text:action.text,amount:action.amount,date:action.date}]

// DELETE TRANSACTION

case 'deleted':  return transactions.filter(transaction => transaction.id !== action.id);



}
}