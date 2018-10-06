import React from 'react';
import { Link } from 'react-router-dom';

import './Homepage.scss';

export default class Homepage extends React.Component {
    render() {
        return (
            <main className="Homepage">
                <header className="navbar">
                    <div className="navbar-brand">
                        <span className="navbar-item has-text-weight-bold"> Shilo Na Milo </span>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <Link className="navbar-item" to="/"> Home </Link>
                            <Link className="navbar-item" to="/search"> Search </Link>
                        </div>
                    </div>
                </header>

                <section className="section">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-7-desktop">
                                <div className="field has-addons">
                                    <div className="control is-expanded">
                                        <input className="input is-rounded" type="text"/>
                                    </div>
                                    <div className="control">
                                        <span className="button is-rounded is-info"> Search </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
