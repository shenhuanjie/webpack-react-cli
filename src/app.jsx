import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

class App extends Component {
    render() {
        return (
            <h1>Hello World</h1>
        )
    }
}


const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);