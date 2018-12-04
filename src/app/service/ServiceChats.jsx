import React from 'react';
import StarRatings from "react-star-ratings";
import {Link} from 'react-router-dom';
import {ChatItem} from 'react-chat-elements'
import ServiceTile from "./ServiceTile";
import * as serviceSelectors from "../../store/service/reducer";
import * as chatSelectors from "../../store/chat/reducer";
import {connect} from "react-redux";
import * as serviceActions from "../../store/service/actions";
import * as chatActions from "../../store/chat/actions";
import * as profileActions from "../../store/profile/actions";


export class ServiceChats extends React.Component {

    constructor(props) {
        super(props);
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
        this.props.dispatch(chatActions.getLastMessages(1998));
    }

    renderChats() {
        let {messages} = this.props;
        let chatItems = [];

        if (!messages)
            return false;


        messages.forEach((m) => {

            let {profile} = dispatch(profileActions.getProfile(m.customerId));
            let chatItem = {
                "id": m.id,
                "avatar": profile.profilePicturePath,
                "alt": profile.fullName,
                "title": profile.fullName + " " + profile.username,
                "subtitle": m.messegeBody,
                "date": m.time,
                "unread": m.fromServiceProvider ? 1 : 0,
                "customer": m.customerId
            };

            chatItems.push(chatItem);
        });

        let result = [];
        chatItems.map((c) =>
            result.push(<Link to={this.props.location.pathname + "/" + c.customer} key={c.avatar}>
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


    render() {
        let {service} = this.props;
        if (!service)
            return false;


        return (
            <main className="ServiceChats">
                <section className="section">
                    <div className="container box">
                        <ServiceTile service={service} small={true}/>
                        {this.renderChats()}
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
        messages: chatSelectors.getLastMessages(state),
        messagesErrors: chatSelectors.getFetchErrors(state)
    };
}

export default connect(mapStateToProps)(ServiceChats);
