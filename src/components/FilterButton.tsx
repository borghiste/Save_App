export default function FilterButton({setFilter,name}){

    return(
      <button onClick={()=> setFilter(name)}>{name}</button>
    )
}