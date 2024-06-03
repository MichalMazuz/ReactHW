import { useRef } from "react";
const Search = ({onSearch}) => {
    const searchRef=useRef()
    return (<>
     <button onClick={()=>onSearch(searchRef.current.value)}>חפש</button>
     <input type="text" ref={searchRef}></input></>);
}
    
   
 
export default Search;