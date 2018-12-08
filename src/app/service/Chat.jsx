import React from 'react';
import StarRatings from "react-star-ratings";
import {Link} from 'react-router-dom';
import {Button, MessageBox} from 'react-chat-elements';
import {MessageList} from 'react-chat-elements';
import {Input} from 'react-chat-elements';
import ServiceTile from "./ServiceTile";
import * as serviceActions from "../../store/service/actions";
import {connect} from "react-redux";
import {ServiceChats} from "./ServiceChats";
import * as serviceSelectors from "../../store/service/reducer";
import * as chatSelectors from "../../store/chats/reducer";
import * as chatActions from "../../store/chats/actions";


export class Chat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: ""
        };

        this.postMessage = this.postMessage.bind(this);
    }

    componentDidMount() {
        this.loadService();
        this.loadMessages();
    }

    componentDidUpdate(prevProps) {
        let serviceId = this.props.match.params.serviceId;
        let prevServiceId = prevProps.match.params.serviceId;
        if (serviceId !== prevServiceId)
            this.loadService();
    }

    loadService() {
        let {serviceId} = this.props.match.params;
        this.props.dispatch(serviceActions.getService(serviceId));
    }

    loadMessages() {
        let {serviceId} = this.props.match.params;
        let {customerId} = this.props.match.params;
        this.props.dispatch(chatActions.getAllMessages(serviceId, customerId));
    }

    postMessage() {
        // request to post message
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
            id: "66477a69-4544-43d2-8318-3a3d657fb8f8",
            username: "blair_waldorf",
            firstName: "Blair",
            secondName: "Waldorf",
            fullName: "Blair Waldorf",
            emailAddress: "blair@gmail.com",
            rating: 0,
            description: "",
            walletAddress: "",
            location: "",
            profilePicturePath: "https://robohash.org/0.4317827818889788?set=set4"
        }
    }

    renderChat() {
        let {all_messages = []} = this.props;

        // all_messages.sort((a, b) => (a < b) ? 1 : ((b < a) ? -1 : 0));
        all_messages.reverse();

        let result = [];
        all_messages.map((c) =>
            result.push(<MessageBox
                key={c.id}
                avatar={c.fromServiceProvider ? this.getOwner().profilePicturePath : c.customer.profilePicturePath }
                position={c.fromServiceProvider ? 'right' : 'left'}
                type={'text'}
                text={c.messegeBody}
                title={c.fromServiceProvider ? (this.getOwner().firstName + " " + this.getOwner().secondName) :
                    (c.customer.firstName + " " + c.customer.secondName)}
                dateString={c.time[0] + "-" + c.time[1] + "-" + c.time[2] + " " + c.time[3] + ":" + c.time[4]}
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
        let {service} = this.props;
        if (!service)
            return false;
        return (
            <main className="Chat">
                <section className="section">
                    <div className="container box">
                        <ServiceTile service={service} small={true}/>
                        <br/>
                        {/*<div className="columns">*/}
                        {/*<ProfileTile className="column" profile={this.getCustomer(3)} small={true}/>*/}
                        {/*<ProfileTile className="column" profile={this.getOwner()} small={true}/>*/}
                        {/*</div>*/}
                        <hr/>
                        <div className="box" id="chat">
                            {this.renderChat()}
                            <br/>
                            <Input
                                placeholder="Type here..."
                                multiline={true}
                                rightButtons={
                                    //TODO: send message buttonRef
                                    <Button className="button"
                                        color='white'
                                        text='Send'
                                        value={this.state.message}
                                        onClick={this.postMessage()}/>
                                }/>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

function mapStateToProps(state) {
    return {
        serviceErrors: serviceSelectors.getFetchErrors(state),
        service: serviceSelectors.getService(state),
        all_messages: chatSelectors.getAllMessages(state),
        messagesErrors: chatSelectors.getFetchErrors(state)
    };
}

export default connect(mapStateToProps)(Chat);
