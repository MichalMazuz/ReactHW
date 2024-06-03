import { useEffect, useState } from "react";
import AddToArr from "./AddToArr";

const Arries = () => {
    const [arr1, setArr1] = useState([{ id: 1, kind: "dool", price: 20 }, { id: 2, kind: "toy", price: 50 }, { id: 3, kind: "boll", price: 10 }])
    const [arr2, setArr2] = useState(arr1)
    const [kind, setKind] = useState(" ")
    const [price, setPrice] = useState(1000000000000)
    const addO = (obj) => {
        setArr1([...arr1, obj])
    }
    useEffect(() => {
        if (kind == "")
            setArr2(arr1.filter(item => item.price <= price))
        else
            setArr2(arr1.filter(item => item.kind == kind && item.price <= price))
    }, [kind, price])


    return (<div className='body'>
        <h1>Toys</h1>
        <div>
            <input type="text" onChange={(e) => setKind(e.target.value)}></input>
            <label>סוג</label>
        </div>
        <div>
            <input type="number" onChange={(e) => setPrice(e.target.value)}></input>
            <label>מחיר</label>
        </div>
        {arr2.map((item) => { return <div><p>קוד:{item.id}</p><p>סוג:{item.kind}</p><p>מחיר:{item.price}</p></div> })}
        <AddToArr add={addO}></AddToArr>

    </div>)

}
export default Arries;