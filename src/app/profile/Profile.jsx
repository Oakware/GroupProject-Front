import React from 'react';

import './Profile.scss';
import '../components/NavigationBar';
import {NavigationBar} from "../components/all";
import Tabs from "../tabs/Tabs";

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {userId: 0};
    }

    componentDidMount() {
        this.setState({userId: this.props.match.params.userId})
    }

    getUser(id) {
        //TODO: get data from back

        let user = {
            login: "iduchan0",
            firstName: "Ivor",
            lastName: "Duchan",
            email: "iduchan0@dmoz.org",
            description: "Hi! I am a cool guy, who is an expert Software Engineer." +
            "\n I can help you with any of your projects for a low price.",
            city: "Lviv",
            mark: 3.6
        }

        return user
    }

    render() {
        return (
            <main className="Profile">
                <NavigationBar/>

                <section className="section">
                    <div className="container box has-background-white">

                        <div className="columns">
                            <div className="column is-3">
                                <figure className="image is-480x480">
                                    <img
                                        src="https://media.giphy.com/media/3M9zf3NSuNgBWM3RWC/giphy.gif"></img>
                                </figure>

                            </div>
                            <div className="column">
                                <p className="is-uppercase has-text-weight-bold">
                                    {(this.getUser(this.props.match.params.userId)).firstName + " " +
                                    (this.getUser(this.props.match.params.userId)).lastName}
                                </p>
                                <p>@{(this.getUser(this.props.match.params.userId)).login}</p>
                                <br/>
                                <p>
                                    <span className="icon">
                                        <ion-icon name="information-circle"></ion-icon>
                                    </span>
                                    {(this.getUser(this.props.match.params.userId)).description}</p>
                                <p>
                                    <span className="icon">
                                        <ion-icon name="mail"></ion-icon>
                                    </span>
                                    {(this.getUser(this.props.match.params.userId)).email}</p>
                                <p>
                                    <span className="icon">
                                        <ion-icon name="navigate"></ion-icon>
                                    </span>
                                    {(this.getUser(this.props.match.params.userId)).city}</p>
                                <p>
                                    <span className="icon">
                                        <ion-icon name="star"></ion-icon>
                                    </span>
                                    {(this.getUser(this.props.match.params.userId)).mark}</p>

                                <button className="button is-success"><a
                                    className="has-text-white"
                                    href={"profile/" + this.props.match.params.userId + "/create"}>
                                    New Service
                                </a></button>
                            </div>
                            <div className="column is-1">
                                <span className="icon">
                                        <ion-icon name="settings"></ion-icon>
                                    </span>
                            </div>
                        </div>

                        <Tabs/>
                    </div>
                </section>
            </main>
        );
    }
}
