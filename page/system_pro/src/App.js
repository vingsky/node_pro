import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import View from './commonjs/router';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="nav-box">
            <div>
              <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/top">top</Link></li>
              </ul>
            </div>
          </div>
          <div className="main-page">
            <div className="content-box">
              <View/>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
