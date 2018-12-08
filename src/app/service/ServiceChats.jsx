import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ChatItem} from 'react-chat-elements';

import ServiceTile from './ServiceTile';
import * as serviceSelectors from '../../store/service/reducer';
import * as chatSelectors from '../../store/chats/reducer';
import * as serviceActions from '../../store/service/actions';
import * as chatActions from '../../store/chats/actions';
import * as profileActions from '../../store/profile/actions';


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
        let {serviceId} = this.props.match.params;
        this.props.dispatch(chatActions.getLastMessages(serviceId));
    }

    renderChats() {
        let {messages} = this.props;
        let chatItems = [];

        if (!messages)
            return false;

        console.log(messages);


        messages.forEach((m) => {
            let unread = m.fromServiceProvider ? 1 : 0;
            let {customer = {}} = m;
            let chatItem = {
                "id": m.id,
                "avatar": customer.profilePicturePath,
                "alt": customer.fullName,
                "title": customer.fullName,
                "subtitle": m.messegeBody,
                "date": m.time,
                "unread": unread,
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
