import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './homepage/Homepage';
import Error404 from './homepage/Error404';
import Register from './auth/Register';
import Login from './auth/Login';
import Profile from './profile/Profile';
import ProfileSettings from './profile-settings/ProfileSettings';
import ServiceCreator from './service-creator/ServiceCreator';
import Service from './service/Service';

export default function router() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/auth/login" component={Login}/>
                <Route exact path="/auth/register" component={Register}/>
                <Route exact path="/profile/:userId" component={Profile}/>
                <Route exact path="/profile/:userId/settings" component={ProfileSettings}/>
                <Route exact path="/profile/:userId/create" component={ServiceCreator}/>
                <Route exact path="/service/:serviceId" component={Service}/>
                <Route component={Error404}/>
            </Switch>
        </Router>
    );
}
