import React from 'react'
export default class Father extends React.Component {
    txt = "Im the father. My name is Dan"
    arrChildren = ["Roni", "David", "Ben"]
    render() {
        return (<>
            {this.txt}
            < div>My children are:</div>
            <ul>{this.arrChildren.map(item => { return (<li>{item}</li>) })}</ul>
        </>)
    }
}