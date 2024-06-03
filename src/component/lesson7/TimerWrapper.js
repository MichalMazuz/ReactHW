import React from 'react'
export default class TimerWrapper extends React.Component {
    constructor(props){
    super(props);
    this.state={
        s:0,
        m:0,
        
    }
}


interval=null
componentDidMount()
{
    console.log("from did amount")
   this.interval=setInterval(this.tick, 1000);
}
// הפונ תקרא לפני שהקומפוננטה מקבלת פקודה לעזוב את המסך
componentWillUnmount()
{
    console.log("unmount");
    clearInterval(this.interval)
}
tick=()=>{
    console.log("from tick")
    this.setState(prevState=>
        {
            if(prevState.s<59)
            return{s:prevState.s+1}
        return{
            m:prevState.m+1,
            s:0
        }
        })
}


    render() {
        
        return (<>
        {<p>{String(this.state.m).padStart(2,'0')}:{String(this.state.s).padStart(2,'0')}</p>}
        
        </>)
    }
}