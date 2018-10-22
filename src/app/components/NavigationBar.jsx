import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './NavigationBar.scss';

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
        return (
            <header className="NavigationBar navbar">
                <div className="navbar-brand">
                    <Link className="navbar-item has-text-weight-bold" to="/">
                        <img src="/resources/logo.png" alt="Logo"/>
                    </Link>

                    <a className="navbar-burger burger" onClick={this.onMenuClick}>
                        <span/> <span/> <span/>
                    </a>
                </div>
                <div className="navbar-menu" ref={this.menuRef}>
                    <div className="navbar-start">
                        <NavLink className="navbar-item" activeClassName="active-link" exact to="/"> Home </NavLink>
                        <NavLink className="navbar-item" activeClassName="active-link"  to="/search"> Search </NavLink>
                    </div>
                    <div className="navbar-end">
                        <NavLink className="navbar-item" activeClassName="active-link" to="/auth/login"> Login </NavLink>
                        <NavLink className="navbar-item" activeClassName="active-link" to="/auth/register"> Register </NavLink>

                        <NavLink className="navbar-item" activeClassName="active-link" exact to={"/profile/" + 7}> Profile </NavLink>
                    </div>
                </div>
            </header>
        );
    }
}
