import React, { Component } from 'react'
import './styles.scss'

class Subtitle extends Component {
    constructor(props) {
     super(props)
    }
    render() {
        const { title } = this.props;
        return(
            <div className="subTitle-box">

                <div className="back">{title}</div>
                <div className="left-top"></div>
                <div className="left-bottom"></div>
                <div className="right-top"></div>
                <div className="right-bottom"></div>
            </div>
        )
    }
}
export default Subtitle