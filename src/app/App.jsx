import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './homepage/Homepage';
import Error404 from './homepage/Error404';
import Profile from './profile/Profile';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route component={Error404}/>
                </Switch>
            </Router>
        );
    }
}
