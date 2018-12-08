import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ChatItem} from 'react-chat-elements';

import ServiceTile from './ServiceTile';
import * as chatSelectors from '../../store/chats/reducer';
import * as chatActions from '../../store/chats/actions';

class ServiceChats extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.loadChats();
    }

    componentDidUpdate(prevProps) {
        let serviceId = this.props.match.params.serviceId;
        let prevServiceId = prevProps.match.params.serviceId;
        if (serviceId !== prevServiceId)
            this.loadChats();
    }

    loadChats() {
        let {serviceId} = this.props.match.params;
        this.props.dispatch(chatActions.getChats(serviceId));
    }

    renderChats() {
        let {chats} = this.props;
        let chatItems = [];

        if (!chats)
            return false;

        chats.forEach((m) => {
            let unread = m.fromServiceProvider ? 0 : 1;
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
        chats: chatSelectors.getChats(state),
        service: chatSelectors.getService(state)
    };
}

export default connect(mapStateToProps)(ServiceChats);
