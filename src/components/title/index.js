import React, { Component } from 'react'
import './styles.scss'

class Title extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {title} = this.props;
        return(
            <div className="title-box">
                <div className="border-left"></div>
                <div className="text">
                    <div className="back"></div>
                    <div className="text-box">{title}</div>
                </div>
            </div>
        )
    }
}
export default Title