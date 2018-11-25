import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import StarRatings from 'react-star-ratings';

import './Service.scss';
import CommentTile from "./CommentTile";
import ProfileTile from "../profile/ProfileTile";
import * as serviceActions from '../../store/service/actions';
import * as serviceSelectors from '../../store/service/reducer';

class Service extends React.Component {
    componentDidMount() {
        let {serviceId} = this.props.match.params;
        this.props.dispatch(serviceActions.getService(serviceId));
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
        let {comments} = this.props;

        if (!comments)
            return false;

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
                    <div className="container">
                        {this.renderServiceErrors()}
                        <div className="box">
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
        comments: serviceSelectors.getComments(state)
    };
}

export default connect(mapStateToProps)(Service);
