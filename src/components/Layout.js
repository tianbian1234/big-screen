import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Icon } from 'antd'
export default class Layout extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div className="layout">
          {this.props.children}
        </div>
    )
  }
}
