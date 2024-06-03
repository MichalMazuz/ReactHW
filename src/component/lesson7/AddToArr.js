import { useState } from "react";

const AddToArr = (props) => {
    const[obj,setObj]=useState({
        id:4,
        kind:" ",
        price:" ",
})
const[itemid,setId]=useState(5)
let name="id"
const newToy=(e)=>{
    let input_name=e.target.name;
    let copy={...obj}
    copy[input_name]=e.target.value;
    setObj(copy);
   }
   const save=(e)=>{
    let copy={...obj}
    copy[name]=itemid
    setObj(copy)
    setId(itemid=>itemid+1)
    e.preventDefault()
    props.add(obj)
 }
    return (  
        <form onSubmit={save}>
            <div>
                <input type="text" onChange={newToy} name="kind"></input>
                <label>סוג</label>
            </div>
            <div>
                <input type="text"onChange={newToy} name="price"></input>
                <label>מחיר</label>
            </div>
            <input type="submit"></input>
        </form>
    );
}
 
export default AddToArr;