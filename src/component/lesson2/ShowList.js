import React, { useState }  from 'react';
export default function ShowList(){
    let txt=""
    const addOne=()=>{
        setCount(count+1)
    }
    const saveText=(e)=>{
       txt=e.target.value
    }
    const addToList=()=>{
       let x=[...arr,txt]
       setArr(x)
    }
    const deleteOne=(i)=>{
        let copy=[...arr]
        copy.splice(i,1)
        setArr(copy)
    }
    const [count,setCount]=useState(0)
    const [arr,setArr]=useState(["michal","elisheva"])
    return(
    <>
    {count}
    <input type="button" value="הוסף 1" onClick={addOne}></input>
    <input type="text"  onKeyUp={saveText}></input>
    <input type="button" value="הוסף לרשימה" onClick={addToList}></input>
    <ul>
        {arr.map((item,index)=>{<li>{item} <input type="button" value="מחק" onClick={()=>{deleteOne(index)}}></input></li>})}
    </ul>
    </>)
}
