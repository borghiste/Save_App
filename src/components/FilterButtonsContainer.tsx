
import FilterButton from "./FilterButton";




 export default function FilterButtonsContainer({filters,setFilter}){
  

   const filtersList =Object.keys(filters).map(filter=> <FilterButton name={filter} key={filter} setFilter={setFilter}/>)

  
      return(
         <>
         <span>filter:</span>
         {filtersList}
        
         </>
     )
    
 }