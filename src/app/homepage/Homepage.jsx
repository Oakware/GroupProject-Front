import React from 'react';
import { Link } from 'react-router-dom';

import './Homepage.scss';
import '../components/NavigationBar';
import NavigationBar from "../components/NavigationBar";

export default class Homepage extends React.Component {
    render() {
        return (
            <main className="Homepage">
                <NavigationBar/>

                <section className="section">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-9-tablet is-7-desktop">
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
