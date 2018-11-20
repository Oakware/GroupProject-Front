import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './NavigationBar.scss';
import * as Auth from '../../microservices/auth';

function renderLink(path, text) {
    return (
        <NavLink className="navbar-item" activeClassName="active-link" exact to={path}>
            {text}
        </NavLink>
    );
}

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.menuRef = React.createRef();
        this.onMenuClick = this.onMenuClick.bind(this);
    }

    onMenuClick(e) {
        this.menuRef.current.classList.toggle('is-active');
        e.target.classList.toggle('is-active');
    }

    render() {
        let isAuthenticated = Auth.isAuthenticated();

        return (
            <header className="NavigationBar navbar">
                <div className="navbar-brand">
                    <Link className="navbar-item has-text-weight-bold" to="/">
                        <img src="resources/logo.png" alt="Logo"/>
                    </Link>

                    <a className="navbar-burger burger" onClick={this.onMenuClick}>
                        <span/> <span/> <span/>
                    </a>
                </div>
                <div className="navbar-menu" ref={this.menuRef}>
                    <div className="navbar-start">
                        <NavLink className="navbar-item" activeClassName="active-link" exact to="/">
                            <i className="icon">
                                <ion-icon name="home"/>
                            </i>
                            <span> Home </span>
                        </NavLink>
                        <NavLink className="navbar-item" activeClassName="active-link" exact to="/search/global">
                            <i className="icon">
                                <ion-icon name="search"/>
                            </i>
                            <span> Services </span>
                        </NavLink>
                        <NavLink className="navbar-item" activeClassName="active-link" exact to="/search/people">
                            <i className="icon">
                                <ion-icon name="search"/>
                            </i>
                            <span> People </span>
                        </NavLink>
                    </div>
                    <div className="navbar-end">
                        {!isAuthenticated ? <a className="navbar-item" onClick={Auth.register}> Register </a> : false}
                        {!isAuthenticated ? <a className="navbar-item" onClick={Auth.login}> Login </a> : false}
                        { isAuthenticated ? <a className="navbar-item" onClick={Auth.logout}> Logout </a> : false}
                        {/*{!isAuthenticated ? renderLink('/auth/login', 'Login') : false}*/}
                        {/*{!isAuthenticated ? renderLink('/auth/register', 'Register') : false}*/}

                        <NavLink className="navbar-item" activeClassName="active-link" exact to="/profile/1">
                            <i className="icon">
                                <ion-icon name="person"/>
                            </i>
                            <span> Profile </span>
                        </NavLink>
                    </div>
                </div>
            </header>
        );
    }
}
