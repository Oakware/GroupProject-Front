import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './NavigationBar.scss';

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
        let userLoggedIn = true;

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
                        {renderLink('/', 'Home')}
                        {renderLink('/search/people', 'Search')}
                    </div>
                    <div className="navbar-end">
                        {userLoggedIn ? renderLink('/auth/login', 'Login') : false}
                        {userLoggedIn ? renderLink('/auth/register', 'Register') : false}
                        {userLoggedIn ? renderLink('/profile/' + 1, 'Profile') : false}
                    </div>
                </div>
            </header>
        );
    }
}
