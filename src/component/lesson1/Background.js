import React from 'react'
import './Background.css'
export default class Background extends React.Component {
    hour = new Date().getHours();
    classn = "morning"
    changeClass = () => {
        if (this.hour >= 13 && this.hour <= 18)
            this.classn = "none"
        else
            if (19 <= this.hour || 5 > this.hour)
                this.classn = "night"
    }

    render() {
        return (<>
        {this.changeClass()}
            <div className={this.classn}>{this.hour}</div>
        </>)
    }
}
