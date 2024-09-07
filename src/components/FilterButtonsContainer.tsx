import FilterButton from "./FilterButton";




export default function FilterButtonsContainer({filters,setFilter}){


  const filtersList =Object.keys(filters).map(name=> <FilterButton name={name} key={name} setFilter={setFilter}/>)

  
      return(
        <>
        <span>filter:</span>
        {filtersList}
        
        </>
    )
    
}