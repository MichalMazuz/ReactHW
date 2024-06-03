import React,{useState} from "react";
import Shooses from "./Shooses";
import './Shooses.css';
import { type } from "@testing-library/user-event/dist/type";
import AddForm from "../lesson4/AddForm";
export default function Shop(){
    const[arrShooes,setArrShooes]=useState(
        [{id:1,model:"snikers",company:"puma",name:"ponpino",size:40,qty:5,color:"white",price:100},
    {id:2,model:"highHeels",company:"ninewest",name:"qqq",size:38,qty:5,color:"white",price:100},
    {id:3,model:"snikers",company:"aldo",name:"ponpino",size:40,qty:5,color:"white",price:50},
    {id:4,model:"snikers",company:"nike",name:"ponpino",size:40,qty:5,color:"white",price:200},
    {id:5,model:"snikers",company:"ninewest",name:"oooo",size:40,qty:5,color:"white",price:100},
    {id:6,model:"snikers",company:"spring",name:"ponpino",size:40,qty:5,color:"white",price:300}]
    )
    console.log(arrShooes);
    const[count,setCount]=useState(0)
    const[cart,setCart]=useState([])
    const [flag,setFlag]=useState(0)
    const[numi,setNum]=useState(100000);
    const [flag2,setFlag2]=useState(false)
  
    const addToCart=(myShoose)=>{
       setCount(count+1)
        if(count>=5){
           alert("אתה זכאי להנחה");
           return;
        }
        if(myShoose.qty==0)
        {
            alert("חסר במלאי");
            return;
        }
        let copyObj={...myShoose}
        copyObj.qty--
        let copy=[...arrShooes]
        let index=arrShooes.findIndex(i=>i.id==myShoose.id)
        copy.splice(index,1,copyObj)
        setArrShooes(copy)
        setCart([...cart,myShoose])
       
    }
  
    const deleteFromCart=(myShoose)=>{
       let index=cart.findIndex(item=>item.id==myShoose.id)
       let copy=[...cart]
       copy.splice(index,1)
       setCart(copy);
    }
    const addToStock=(newShoose) =>{
        setArrShooes([...arrShooes,newShoose])
    }
    const forPay=()=>{
      let totalPrice = cart.reduce(
         (a, item) => a + item.price,
         0
       )
       alert("  הסכום לתשלום"+totalPrice)
    }
     const orderby=(e)=>{
      e.target.myFlag=!e.target.myFlag;
      let name=e.target.name;
      let checked=e.target.myFlag;
        if(flag==0 && checked==true && name=='highHeels')
           setFlag(1)
        if(flag==0 && checked==true && name=='snikers')
           setFlag(2)
        if((flag==1 || flag==2) && checked==true )
           setFlag(3)
        if((flag==1 && checked==false && name=='highHeels') || (flag==2 && checked==false && name=='snikers'))
           setFlag(0)
        if(flag==3 && checked==false && name=='highHeels')
           setFlag(2)
        if(flag==3 && checked==false && name=='snikers')
          setFlag(1)
           
           //  0=לא בחור כלום
          // 1=נבחרו נעלי עקב
          // 2=נבחר מתחת 150
          // 3=נבחר גם עקב וגם מתחת 150
        }
      
     
    return(<div className="body"><h1 >STEP IN</h1>

     <label>נעלי סניקרס <input type="checkBox" myFlag={false} name="snikers" onChange={orderby}></input></label>
     <div></div>
     <label>נעלי עקב<input type="checkBox" myFlag={false} name="highHeels" onChange={orderby}></input></label>
     <div></div>
     <label><input type="number" onChange={(e)=>{setNum(e.target.value)}}></input>מחיר מקסימלי</label> 
    
    
     {flag==0&&arrShooes.filter(i=>i.price<=numi).map((item)=>{return<div className="my_shoose"><Shooses myShoose={item} func={addToCart} value="addToCart"></Shooses></div>})}
     {flag==1&&arrShooes.filter(i=>i.model=="highHeels"&&i.price<=numi).map((item)=>{return<div className="my_shoose"><Shooses myShoose={item} func={addToCart} value="addToCart"></Shooses></div>})}
     {flag==2&&arrShooes.filter(i=>i.model=="snikers"&&i.price<=numi).map((item)=>{return<div className="my_shoose"><Shooses myShoose={item} func={addToCart} value="addToCart"></Shooses></div>})}
     {flag==3&&arrShooes.filter(i=>(i.model=="snikers"||i.model=="highHeels")&&i.price<=numi).map((item)=>{return<div className="my_shoose"><Shooses myShoose={item} func={addToCart} value="addToCart"></Shooses></div>})}
   <div className="my_shoose">
    <h1>MY CART</h1>
    {cart&&cart.map(item=>{return <Shooses myShoose={item} func={deleteFromCart} value="deleteFromCart"></Shooses>})}
    <div></div>
    <input type="button" defaultValue="pay" onClick={forPay}></input>
    </div>
    <AddForm add={addToStock}></AddForm>
    </div>);
}
