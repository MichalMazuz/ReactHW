import React, { createRef } from 'react'
import { useRef } from 'react'
export default class MyText extends React.Component {
    inputRef=createRef()
    componentDidMount(){
        this.inputRef.current.focus()
    }

    render() {
        return (<>
        <form>
            <label>name:</label>
            <input type='text'></input>
            <label>email:</label>
            <input type='text' ref={this.inputRef}></input>
        </form>
        </>)
    }
}