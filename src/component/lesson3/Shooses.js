import React from "react";
export default function Shooses(props){
    let s=props.myShoose
    return(<><h2>model:{s.model}</h2>
    <p>name:{s.name}</p>
    <p>company:{s.compamy}</p>
    <p>size:{s.size}</p>
    <p>color:{s.color}</p>
    <p>qty:{s.qty}</p>
    <p>price:{s.price}</p>
    <input type="button" defaultValue={props.value} onClick={()=>{props.func(s)}}></input>
    </>)
}