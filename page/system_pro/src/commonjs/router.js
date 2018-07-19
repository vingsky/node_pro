import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './../commonComponent/home';
import About from './../commonComponent/about';
import Top from './../commonComponent/top';
import React from 'react';
export default class View extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/top/:id" component={Top} />
            </div>
        )
    }
}


