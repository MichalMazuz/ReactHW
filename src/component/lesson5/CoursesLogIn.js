import { useNavigate } from "react-router-dom";

const  CoursesLogIn =()=> {
    let user={
        name:" ",
        password:" "
    }
    
     let nav=useNavigate()
    const save=()=>
    {
        if(user.name.length<2||/\d/.test(user.name))
        {
        nav('/home')
        return
        }
    else
        {
            nav('/list/'+user.name)
        }
    }
    return ( <form onSubmit={save}> 
        <div>
            <label>name</label>
            <input type="text" onChange={(e)=>user.name=e.target.value}></input>
        </div>
        <div>
           <label>password</label>
            <input type="password" onChange={(e)=>user.password=e.target.value}></input>
        </div>
        <div><input type="submit" value={"שמירה"} onClick={save}></input></div>
    </form>);
}
 
export default  CoursesLogIn;