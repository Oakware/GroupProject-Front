import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './homepage/Homepage';
import Error404 from './homepage/Error404';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route component={Error404}/>
                </Switch>
            </Router>
        );
    }
}
