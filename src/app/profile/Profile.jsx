import React from 'react';
import { connect } from 'react-redux';

import './Profile.scss';
import Tabs from './Tabs';
import * as authSelectors from '../../store/auth/reducer';
import * as profileActions from '../../store/profile/actions';
import * as profileSelectors from '../../store/profile/reducer';
import {Link} from 'react-router-dom';
import StarRatings from 'react-star-ratings';

function getUserId(props) {
    let { userId } = props.match.params;
    return userId || props.curUserId;
}

class Profile extends React.Component {
    componentDidMount() {
        this.loadProfile();
    }

    componentDidUpdate(prevProps) {
        let userId = getUserId(this.props);
        let prevUserId = getUserId(prevProps);
        if (userId !== prevUserId)
            this.loadProfile();
    }

    loadProfile() {
        let userId = getUserId(this.props);
        if (userId)
            this.props.dispatch(profileActions.getProfile(userId));
    }

    renderProfileErrors() {
        let { profileErrors } = this.props;

        if (profileErrors && profileErrors.message) {
            return (
                <h1 className="title has-text-centered has-text-danger not-found-text">
                    {profileErrors.message}
                </h1>
            );
        }
    }

    renderNewServiceButton() {
        if (getUserId(this.props) === this.props.curUserId) {
            return <Link className="button is-primary"
                         to={"/service/create"}>
                New Service
            </Link>
        }
    }

    renderSettingsButton() {
        if (getUserId(this.props) === this.props.curUserId) {
            return <Link to={"/profile/settings"}>
                <span className="icon"> <ion-icon name="settings"/> </span>
            </Link>
        }
    }

    renderProfile() {
        let { profile } = this.props;

        if (!profile)
            return false;

        let services = {
            my_services: this.props.userServices,
            ordered_services: [
                {key: 5, id: 5, name: "Title 5"}, {key: 7, id: 7, name: "Title 7"},
                {key: 8, id: 8, name: "Title 8"}, {key: 9, id: 9, name: "Title 9"}]
        };

        return (
            <div className="box has-background-white">
                <section>
                    <div className="columns">
                        <div className="column is-3">
                            <figure className="image is-480x480">
                                <img src={this.props.profile.profilePicturePath}/>
                            </figure>
                        </div>
                        <div className="column">
                            <p className="is-uppercase has-text-weight-bold">
                                {this.props.profile.fullName}
                            </p>
                            <p>@{this.props.profile.username}</p>

                            <StarRatings
                                rating={this.props.profile.rating}
                                starDimension="20px"
                                starSpacing="2px"
                                starEmptyColor='rgb(236, 236, 236)'
                                starRatedColor='hsl(141, 71%, 48%)'
                            />
                            <br/>
                            <div>
                                <p className="text has-text-justified">
                                    <span className="icon">
                                        <ion-icon name="information-circle"/>
                                    </span>
                                    <span> {this.props.profile.description} </span>
                                </p>
                                <p className="text has-text-justified">
                                    <span className="icon">
                                        <ion-icon name="mail"/>
                                    </span>
                                    <span> {this.props.profile.emailAddress} </span>
                                </p>
                                <p className="text has-text-justified">
                                    <span className="icon">
                                        <ion-icon name="navigate"/>
                                    </span>
                                    <span> {this.props.profile.location} </span>
                                </p>

                                {this.renderNewServiceButton()}
                            </div>
                        </div>

                        <div className="column is-1">
                            {this.renderSettingsButton()}
                        </div>
                    </div>
                </section>
                <Tabs userId={this.props.curUserId} services={services}/>
            </div>
        );
    }

    render() {
        return (
            <main className="Profile">
                <section className="section">
                    <div className="container">
                        {this.renderProfileErrors()}
                        {this.renderProfile()}
                    </div>
                </section>
            </main>
        );
    }
}

function mapStateToProps(state) {
    return {
        curUserId: authSelectors.getUserId(state),
        profileErrors: profileSelectors.getFetchErrors(state),
        profile: profileSelectors.getProfile(state),
        userServices: profileSelectors.getUserServices(state)
    };
}

export default connect(mapStateToProps)(Profile);
