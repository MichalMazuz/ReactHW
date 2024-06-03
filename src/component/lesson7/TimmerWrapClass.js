import React from 'react';
import TimerWrapper from './TimerWrapper';

export default class TimerWrapperClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
            show: false,
        };
    }
    toggleShow = () => {
        this.setState((prevState) => ({
            show: !prevState.show,
        }));
    };

    render() {
        const buttonText = this.state.show ? 'עצור' : 'הצג';
        return (<>{this.state.show && <TimerWrapper />}
         <button onClick={this.toggleShow} >{buttonText}</button>      </>);
    }
}
