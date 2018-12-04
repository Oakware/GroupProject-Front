import React from 'react';
import StarRatings from "react-star-ratings";
import {Link} from 'react-router-dom';
import {Button, MessageBox} from 'react-chat-elements';
import {MessageList} from 'react-chat-elements';
import {Input} from 'react-chat-elements';
import ServiceTile from "./ServiceTile";


export default class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'customerId': this.props.match.params
        }
    }

    getCustomer() {
        return {
            id: 2,
            username: "whoami",
            firstName: "Gossip",
            secondName: "Girl",
            emailAddress: "gg@gfail.org",
            description: "And who am I? That secret I will never tell. XOXO",
            location: "NYC",
            rating: 5,
            photo: "https://data.whicdn.com/images/38906065/original.gif",
            walletAddress: "address3"
        }
    }

    getOwner() {
        return {
            id: 1,
            username: "iduchan0",
            firstName: "Ivor",
            secondName: "Duchan",
            emailAddress: "iduchan0@dmoz.org",
            description: "Hi! I am a cool guy, who is an expert Software Engineer." +
            "\n I can help you with any of your projects for a low price.",
            location: "Lviv",
            rating: 3.6,
            photo: "https://media.giphy.com/media/3M9zf3NSuNgBWM3RWC/giphy.gif"
        }
    }

    getChat(id) {
        console.log(this.props.customerId);
        var chat = [];

        chat = [{
            "id": 1,
            "serviceId": 1,
            "customerId": 3,
            "time": new Date("2018-11-17T21:27:25"),
            "fromServiceProvider": false,
            "messageBody": "Hello, I would like to clean my shoes, mister. Do you still provide this service?",
        }, {
            "id": 3,
            "serviceId": 1,
            "customerId": 3,
            "time": new Date("2018-11-17T21:35:56"),
            "fromServiceProvider": true,
            "messageBody": "Lol, it works",
        }];


        chat.sort((a, b) => (a < b) ? 1 : ((b < a) ? -1 : 0));

        let result = [];
        chat.map((c) =>
            result.push(<MessageBox
                position={c.fromServiceProvider ? 'right' : 'left'}
                type={'text'}
                text={c.messageBody}
                title={c.fromServiceProvider ? (this.getOwner().firstName + " " + this.getOwner().secondName) :
                    (this.getCustomer().firstName + " " + this.getCustomer().secondName)}
            />)
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
            <main className="Chat">
                <section className="section">
                    <div className="container box">
                        <ServiceTile service={this.getService()} small={true}/>
                        <br/>
                        {/*<div className="columns">*/}
                        {/*<ProfileTile className="column" profile={this.getCustomer(3)} small={true}/>*/}
                        {/*<ProfileTile className="column" profile={this.getOwner()} small={true}/>*/}
                        {/*</div>*/}
                        <hr/>
                        {this.getChat()}
                        <br/>
                        <Input
                            placeholder="Type here..."
                            multiline={true}
                            rightButtons={
                                //TODO: send message buttonRef
                                <Button
                                    color='white'
                                    backgroundColor='green'
                                    text='Send'/>
                            }/>
                    </div>
                </section>
            </main>
        );
    }
}
