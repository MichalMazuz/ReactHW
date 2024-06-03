import { Link, useParams ,Outlet} from "react-router-dom";
import arr from './Data';
import React ,{ useState } from "react";
const CoursesList = () => {
    let {name}=useParams()
    const[numi,setNum]=useState(0);
    return (<div><h2>{name}</h2>
    <input type="number" onChange={(e)=>{setNum(e.target.value)}}></input>
    {arr&&arr.filter((n)=>n.num>=numi).map((item)=>{return<><Link to={'/list/datails/'+item.id}>{item.name}</Link></>})}
    <Outlet></Outlet>
    
 </div>
    );
}
 
export default CoursesList;
