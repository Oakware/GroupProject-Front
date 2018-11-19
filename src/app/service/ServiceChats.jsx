import React from 'react';
import StarRatings from "react-star-ratings";
import {Link} from 'react-router-dom';
import 'react-chat-elements/dist/main.css';
import {ChatItem} from 'react-chat-elements'
import ServiceTile from "./ServiceTile";


export default class ServiceChats extends React.Component {

    constructor(props) {
        super(props);
    }

    renderChats() {
        let chats = [{}];
        let chatItems = [
            {
                "avatar": 'https://data.whicdn.com/images/38906065/original.gif',
                "alt": 'GossipGirl',
                "title": 'Gossip Girl',
                "subtitle": 'What are you doing?',
                "date": new Date(),
                "unread": 0,
                "customer": 3
            },
            {
                "avatar": 'https://media.giphy.com/media/7ieOyZw7sogO4/source.gif',
                "alt": 'Reactjs',
                "title": 'Elena Galitska',
                "subtitle": 'I want it!',
                "date": new Date("2018-11-17T21:35:56"),
                "unread": 1,
                "customer": 2
            }];

        let result = [];
        console.log(this.props.location.pathname);
        chatItems.map((c) =>
            result.push(<Link to={this.props.location.pathname + "/" + c.customer}>
                <ChatItem
                    avatar={c.avatar}
                    alt={c.alt}
                    title={c.title}
                    subtitle={c.subtitle}
                    date={c.date}
                    unread={c.unread}/></Link>)
        );
        return result;
    }

    getService() {
        return {
            key: 1,
            id: 1,
            name: "Walk Your Dog",
            description: "Hamburger excepteur ex non. Picanha labore t-bone excepteur, shoulder jerky frankfurter jowl venison veniam andouille tail shank chicken prosciutto. Lorem et capicola pariatur frankfurter, fugiat turkey. Ex consequat dolore, eiusmod shank bacon tri-tip shoulder elit. Jowl rump tenderloin officia labore reprehenderit.",
            owner: "@iduchan0",
            mark: 3,
            price: 3
        }
    }


    render() {
        return (
            <main className="ServiceChats">
                <section className="section">
                    <div className="container box">
                        <ServiceTile service={this.getService()} small={true}/>
                        {this.renderChats()}
                    </div>
                </section>
            </main>
        );
    }
}
