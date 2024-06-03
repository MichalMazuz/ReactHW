import React, { useState } from "react";
export default function AddForm(props){
    const [newShoose,setNewShoose]= useState({
        model:" ",
        company:" ",
        name:" ",
        size:" ",
        qty:10,
        color:" ",
        price:" "

    })
   const save=(e)=>{
      e.preventDefault()
      props.add(newShoose)

   }
   const saveNewShoose=(e)=>{
    let input_name=e.target.name;
    let copy={...newShoose}
    copy[input_name]=e.target.value;
    setNewShoose(copy);
   }
   return(<form onSubmit={save}>
    <div>
        <label >model:</label>
        <input type="text" onChange={saveNewShoose} name="mode"></input>
    </div>
    <div>
        <label >company:</label>
        <input type="text" onChange={saveNewShoose} name="company"></input>
    </div>
    <div>
        <label >name:</label>
        <input type="text" onChange={saveNewShoose} name="name"></input>
    </div>
    <div>
        <label >size:</label>
        <input type="text" onChange={saveNewShoose} name="size"></input>
        { newShoose.size>44  && <p>המידה אינה קימת!</p>}
    </div>
    <div>
        <label >color:</label>
        <input type="text" onChange={saveNewShoose} name="color"></input>
        { newShoose.color=="pink"  && <p>לא ניתן ללבוש נעל זו בסמינר מאיר</p>}
    </div>
    <div>
        <label >price:</label>
        <input type="text" onChange={saveNewShoose} name="price"></input>
    </div>
    <div><input type="submit"></input></div>
    <div><input type="button" value={"dc"}></input></div>
   </form>)
   
}