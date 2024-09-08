export default function FilterButton({name,setFilter}){

    return(
      <button onClick={()=>setFilter(name)}>{name}</button>
    )
}