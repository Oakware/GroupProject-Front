import React from 'react';
import {Link} from 'react-router-dom';

import './Homepage.scss';
import NavigationBar from "../components/NavigationBar";

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceValue: '',
            profileValue: ''
        };
    }

    updateInputValue(evt, type) {
        if (type == 0) {
            this.setState({
                serviceValue: evt.target.value
            });
        }
        else {
            this.setState({
                profileValue: evt.target.value
            });
        }
    }

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
                                        <input
                                            value={this.state.serviceValue}
                                            onChange={evt => this.updateInputValue(evt, 0)}
                                            id="service-input" className="input is-rounded" type="text"/>
                                    </div>
                                    <div className="control">
                                        <Link className="button is-rounded is-info" to={{
                                            pathname: '/results',
                                            state: {for: "service", query: this.state.serviceValue}
                                        }} disabled={!this.state.serviceValue}>Search Service</Link>
                                    </div>
                                </div>
                                <div className="field has-addons">
                                    <div className="control is-expanded">
                                        <input
                                            value={this.state.profileValue}
                                            onChange={evt => this.updateInputValue(evt, 1)}
                                            id="profile-input" className="input is-rounded" type="text"/>
                                    </div>
                                    <div className="control">
                                        <Link className="button is-rounded is-info" to={{
                                            pathname: '/results',
                                            state: {for: "profile", query: this.state.profileValue}
                                        }} disabled={!this.state.profileValue}>Search Profile</Link>
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
