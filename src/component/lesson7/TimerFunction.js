import { useEffect, useState } from "react";

const TimerFunction = () => {
    const [second, SetSecond] = useState(0)
    const [minute, SetMinute] = useState(0)
    const [show, SetShow] = useState(true)
    let inter;
    useEffect(() => { inter = setInterval(tick, 1000); return () => clearInterval(inter) }, [second, minute])
    const tick = () => {
        if (second < 59)
            SetSecond(prevSecond => prevSecond + 1)
        else {
            SetMinute(prevMinute => prevMinute + 1)
            SetSecond(0)
        }
    }
  
    return (<>{show && <p>{String(minute).padStart(2, '0')}:{String(second).padStart(2, '0')}</p>}
        </>);
}

export default TimerFunction;
