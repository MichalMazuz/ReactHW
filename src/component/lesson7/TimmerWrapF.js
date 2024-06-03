import TimerFunction from "./TimerFunction";
import { useState } from "react";
const  TimmerWrapF= () => {
    const [show, SetShow] = useState(true)
    let showme = show ? "עצור" : "הפעל"   
    return (<><button onClick={() => { SetShow(!show) }}>{showme}</button>{show&&<TimerFunction></TimerFunction>}</>);
}
 
export default TimmerWrapF;