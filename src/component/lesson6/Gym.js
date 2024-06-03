import { useState } from 'react';
import './Gym.css';
const Gym = () => {
    const[user,setUser]=useState({name:" ",mail:" ",kindSubscription:" "})
    const [isRegisterd,setIsRegisterd]=useState(false)
    const [isSubscription,setIsSubscription]=useState(false)
    const [isFlag,setIsFlag]=useState(false)
    const saveNewUser=(e)=>
    {
        let input_name=e.target.name
        let copy={...user}
        copy[input_name]=e.target.value
        setUser(copy)
    }
    const changeIsReg = (e) => {
        setIsRegisterd(!isRegisterd)
        e.preventDefault()
    }
    
    return (<form className={isRegisterd ? "register" : "my_gym"}>
        
        <h1>חדר הכושר שלי</h1>
    <h2>אצלינו תוכלו למצוא חדרי כושר מתקדמים עם ציוד חדיש ומורים מהשורה הראשונה</h2>
    <h2>אני רוצה להרשם</h2>
    name:
    <input type="text" name="name" onChange={saveNewUser}></input>
    email:
    <input type="text" name="mail" onChange={saveNewUser}></input>
    <button onClick={changeIsReg}>נרשמתי</button>
    {isRegisterd && <h2>שלום ל{user.name}</h2>}
    {isRegisterd&&<>
    <h4>האם ברצונך לקבל דיווחים מאיתנו</h4>
    <input type='checkbox' onChange={(e) => { setIsFlag(!isFlag); alert("Subscribe to receive mailings and advertisements"); }} />
    </>}
    {isRegisterd && (
    <>
    <button onClick={(e) => { setUser({ ...user, kindSubscription: e.target.innerText }); setIsSubscription(!isSubscription); console.log(user) }}>מנוי שנתי</button>
    <button onClick={(e) => { setUser({ ...user, kindSubscription: e.target.innerText }); setIsSubscription(!isSubscription); console.log(user) }}>מנוי חצי שנתי</button>
    <button onClick={(e) => { setUser({ ...user, kindSubscription: e.target.innerText }); setIsSubscription(!isSubscription); console.log(user) }}>10 ביקורים</button>
    </>
    )}
{isSubscription&& <div className='sub'></div>}
    </form>
    );
}
 
export default Gym;