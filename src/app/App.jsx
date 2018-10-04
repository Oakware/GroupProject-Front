import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div> Hello, world! </div>
            </Router>
        );
    }
}
