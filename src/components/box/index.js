import React, { Component } from 'react'
import './style.scss'

class Box extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { width, height, top, left } = this.props;
        return (
            <div  className="layout-box" style={{width: width, height: height, top: top, left: left}}>
                {this.props.children}
            </div>
        )
    }
}
export default Box;