import React from 'react';
import {connect} from 'react-redux';
import {Button, MessageBox, Input} from 'react-chat-elements';

import ServiceTile from './ServiceTile';
import * as authSelectors from '../../store/auth/reducer';
import * as chatSelectors from '../../store/chats/reducer';
import * as chatActions from '../../store/chats/actions';

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ""
        };

        this.postMessage = this.postMessage.bind(this);
    }

    componentDidMount() {
        this.loadMessages();
    }

    componentDidUpdate(prevProps) {
        let serviceId = this.props.match.params.serviceId;
        let prevServiceId = prevProps.match.params.serviceId;
        if (serviceId !== prevServiceId)
            this.loadMessages();
    }

    loadMessages() {
        let {serviceId, customerId} = this.props.match.params;
        this.props.dispatch(chatActions.getUserMessages(serviceId, customerId));
    }

    onMessageInput(e) {
        this.setState({
            message: e.target.value
        });
    }

    postMessage() {
        let {serviceId, customerId} = this.props.match.params;
        let {serviceOwner, curUser} = this.props;

        let fromOwner = customerId === curUser.id;
        let sender = fromOwner ? serviceOwner : curUser;

        let message = {
            serviceId: serviceId,
            customerId: customerId,
            messegeBody: this.state.message,
            fromServiceProvider: fromOwner
        };

        this.props.dispatch(chatActions.sendMessage(message, sender));
    }

    getOwner() {
        let {serviceOwner} = this.props;
        return serviceOwner;
    }

    renderChat() {
        let {all_messages = []} = this.props;

        // all_messages.sort((a, b) => (a < b) ? 1 : ((b < a) ? -1 : 0));
        all_messages = [...all_messages].reverse();

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
                                value={this.state.message}
                                onChange={e => this.onMessageInput(e)}
                                rightButtons={
                                    //TODO: send message buttonRef
                                    <Button className="button"
                                        color='white'
                                        text='Send'
                                        onClick={this.postMessage}/>
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
        all_messages: chatSelectors.getUserMessages(state),
        curUser: authSelectors.getUserProfile(state),
        service: chatSelectors.getService(state),
        serviceOwner: chatSelectors.getServiceOwner(state)
    };
}

export default connect(mapStateToProps)(Chat);
