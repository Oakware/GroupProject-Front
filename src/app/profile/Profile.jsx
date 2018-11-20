import React from 'react';
import { connect } from 'react-redux';

import './Profile.scss';
import Tabs from "./Tabs";
import ProfileTile from "./ProfileTile";
import * as profilesActions from '../../store/profiles/actions';
import * as profilesSelectors from '../../store/profiles/reducer';
import * as servicesActions from '../../store/services/actions';
import * as servicesSelectors from '../../store/services/reducer';

class Profile extends React.Component {
    componentDidMount() {
        let { userId } = this.props.match.params;
        this.props.dispatch(profilesActions.getProfile(userId));
        this.props.dispatch(servicesActions.getUserServices(userId));
    }

    componentWillUnmount() {
        this.props.dispatch(profilesActions.resetProfile());
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
                <ProfileTile profile={profile}/>
                <Tabs userId={this.props.match.params.userId} services={services}/>
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
        profileErrors: profilesSelectors.getProfileFetchErrors(state),
        profile: profilesSelectors.getProfile(state),
        userServices: servicesSelectors.getUserServices(state)
    };
}

export default connect(mapStateToProps)(Profile);
