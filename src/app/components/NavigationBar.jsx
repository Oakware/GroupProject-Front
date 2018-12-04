import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Link } from 'react-router-dom';

import './NavigationBar.scss';
import * as authActions from '../../store/auth/actions';
import * as authSelectors from '../../store/auth/reducer';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuActive: false
        };

        this.onMenuClick = this.onMenuClick.bind(this);
        this.onLinkClicked = this.onLinkClicked.bind(this);
    }

    onMenuClick() {
        this.setState((state, props) => ({
            menuActive: !state.menuActive
        }));
    }

    onLinkClicked() {
        this.setState({
            menuActive: false
        });
    }

    renderLink(path, text, icon) {
        return (
            <NavLink className="navbar-item"
                     activeClassName="active-link"
                     exact to={path}
                     onClick={this.onLinkClicked}
            >
                <i className="icon">
                    <ion-icon name={icon}/>
                </i>
                <span> {text} </span>
            </NavLink>
        );
    }

    renderAuthLink(text, isAuth, action) {
        let authenticated = this.props.userAuthenticated;

        if (isAuth !== authenticated)
            return false;

        return (
            <a className="navbar-item" onClick={() => this.props.dispatch(action())}>
                {text}
            </a>
        );
    }

    render() {
        let authenticated = this.props.userAuthenticated;
        let activeClass = this.state.menuActive ? 'is-active' : '';

        return (
            <header className="NavigationBar navbar">
                <div className="navbar-brand">
                    <Link className="navbar-item has-text-weight-bold" to="/">
                        <img src="resources/logo.png" alt="Logo"/>
                    </Link>

                    <a className={"navbar-burger burger " + activeClass} onClick={this.onMenuClick}>
                        <span/> <span/> <span/>
                    </a>
                </div>
                <div className={"navbar-menu " + activeClass}>
                    <div className="navbar-start">
                        {this.renderLink('/', 'Home', 'home')}
                        {this.renderLink('/search/global', 'Services', 'search')}
                        {this.renderLink('/search/people', 'People', 'search')}
                    </div>
                    <div className="navbar-end">
                        {this.renderAuthLink('Register', false, authActions.register)}
                        {this.renderAuthLink('Login', false, authActions.login)}
                        {this.renderAuthLink('Logout', true, authActions.logout)}

                        {authenticated? this.renderLink('/profile', 'Profile', 'person') : false}
                    </div>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        userAuthenticated: authSelectors.isAuthenticated(state),
    };
}

export default withRouter(connect(mapStateToProps)(NavigationBar));
