import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import StarRatings from 'react-star-ratings';

import './Service.scss';
import CommentTile from "./CommentTile";
import ProfileTile from "../profile/ProfileTile";
import * as servicesActions from '../../store/services/actions';
import * as servicesSelectors from '../../store/services/reducer';

class Service extends React.Component {
    componentDidMount() {
        let {serviceId} = this.props.match.params;
        this.props.dispatch(servicesActions.getService(serviceId));
    }

    componentWillUnmount() {
        this.props.dispatch(servicesActions.resetService());
    }

    renderServiceErrors() {
        let {serviceErrors} = this.props;

        if (serviceErrors && serviceErrors.message) {
            return (
                <h1 className="title has-text-centered has-text-danger not-found-text">
                    {serviceErrors.message}
                </h1>
            );
        }
    }

    renderService() {
        let {service} = this.props;

        if (!service)
            return false;

        return (
            <div className="">
                <h1 className="title is-4 has-text-centered"> {service.name} </h1>
                <div className="has-text-centered">
                    <StarRatings
                        rating={service.mark}
                        starDimension="20px"
                        starSpacing="2px"
                        starEmptyColor='rgb(236, 236, 236)'
                        starRatedColor='hsl(141, 71%, 48%)'/>
                </div>
                <div className="has-text-centered">
                    {service.owner}
                    {' \xB7 '}
                    Price: {service.price} Milo
                </div>

                <section className="section">
                    <h2 className="title is-5"> Description </h2>
                    <div> {service.description} </div>
                </section>
            </div>
        );
    }

    renderComments() {
        let comments = [
            {
                "id": 1,
                "serviceId": 1,
                "customerId": 1,
                "time": "2018-11-17T21:34:53",
                "rating": 5,
                "commentBody": "This individual does her job perfectly)0))00"
            },
            {
                "id": 2,
                "serviceId": 1,
                "customerId": 2,
                "time": "2018-11-16T11:00:53",
                "rating": 1,
                "commentBody": "Awful."
            }
        ];

        let result = [];
        comments.map((c) =>
            result.push(<CommentTile comment={c}/>)
        );
        return result;
    }

    getOwner() {
        let {service} = this.props;
        if (!service)
            return false;
        return service.owner
    }

    renderCurrentCustomers() {
        let customers = [];
        customers.push({
            id: 2,
            username: "ellegal",
            firstName: "Elena",
            secondName: "Galitska",
            emailAddress: "elgal0@dmoz.org",
            description: "Hi! I am cool.",
            location: "Kyiv",
            rating: 5,
            photo: "https://media.giphy.com/media/7ieOyZw7sogO4/source.gif",
            walletAddress: "address2"
        });

        customers.push({
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
        });

        let result = [];
        customers.map((c) =>
            result.push(<hr/>, <ProfileTile profile={c} small={true}/>)
        );
        return result;
    }

    render() {
        return (
            <main className="Service">
                <section className="section">
                    <div className="container box">
                        {this.renderServiceErrors()}
                        {this.renderService()}
                        <Link to={this.props.location.pathname + "/chats"}>
                            <button className="button">View Chats</button>
                        </Link>
                        {this.getOwner() != "@iduchan0" ?
                            <button className="button is-pulled-right">Send Message</button> :
                            <div className="section">
                                <p className="title is-6">Current Customers</p>
                                {this.renderCurrentCustomers()}
                            </div>}
                        <section className="section">
                            <p className="title is-6">Reviews</p>
                            {this.renderComments()}
                        </section>
                    </div>
                </section>
            </main>
        );
    }
}

function mapStateToProps(state) {
    return {
        serviceErrors: servicesSelectors.getServiceFetchErrors(state),
        service: servicesSelectors.getService(state)

    };
}

export default connect(mapStateToProps)(Service);
