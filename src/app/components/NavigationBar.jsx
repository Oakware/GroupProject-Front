import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationBar.scss';

export default class NavigationBar extends React.Component {
    render() {
        return (
            <header className="NavigationBar navbar">
                <div className="navbar-brand">
                    <span className="navbar-item has-text-weight-bold"> Shilo Na Milo </span>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <NavLink className="navbar-item" activeClassName="active-link" to="/"> Home </NavLink>
                        <NavLink className="navbar-item" activeClassName="active-link"  to="/search"> Search </NavLink>
                    </div>
                    <div className="navbar-end">
                        <NavLink className="navbar-item" activeClassName="active-link" to="/account/login"> Login </NavLink>
                        <NavLink className="navbar-item" activeClassName="active-link" to="/account/register"> Register </NavLink>
                    </div>
                </div>
            </header>
        );
    }
}
