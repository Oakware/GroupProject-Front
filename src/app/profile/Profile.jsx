import React from 'react';

import './Profile.scss';
import Tabs from "./Tabs";
import {Link} from 'react-router-dom';
import StarRatings from "react-star-ratings";
import ProfileTile from "../components/ProfileTile";

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

        let user1 = {
            id: 1,
            login: "iduchan0",
            firstName: "Ivor",
            lastName: "Duchan",
            email: "iduchan0@dmoz.org",
            description: "Hi! I am a cool guy, who is an expert Software Engineer." +
            "\n I can help you with any of your projects for a low price.",
            city: "Lviv",
            mark: 3.6,
            photo: "https://media.giphy.com/media/3M9zf3NSuNgBWM3RWC/giphy.gif"
        };

        let user2 = {
            id: 2,
            login: "ellegal",
            firstName: "Elena",
            lastName: "Galitska",
            email: "elgal0@dmoz.org",
            description: "Hi! I am cool.",
            city: "Kyiv",
            mark: 5,
            photo: "https://media.giphy.com/media/7ieOyZw7sogO4/source.gif"
        };

        if (id === 1) return user1;
        return user2
    }

    render() {
        return (
            <main className="Profile">
                <section className="section">
                    <div className="container box has-background-white">

                        <ProfileTile profile={this.getUser(this.props.match.params.userId)}/>

                        <Tabs userId={this.state.userId} cabinet={true}/>
                    </div>
                </section>
            </main>
        );
    }
}
