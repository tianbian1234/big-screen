import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log("111111111111111111");
    }
    render() {
        return (
            <div className="link-box">
                App
            </div>
        )
    }
}

export default App;
