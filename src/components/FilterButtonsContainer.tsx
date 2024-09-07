import FilterButton from "./FilterButton";

type Filters={
  all: ()=> boolean,
  expenses:(transaction:{completed: boolean})=> boolean,
income:(transaction:{completed: boolean})=> boolean
}

type Transaction={id:string,
text:string,
amount:number,
completed:boolean}

export default function FilterButtonsContainer({filters,setFilter}):Filters{


  const filtersList =Object.keys(filters).map(name=> <FilterButton name={name} key={name} setFilter={setFilter}/>)

  
      return(
        <>
        <span>filter:</span>
        {filtersList}
        
        </>
    )
    
}