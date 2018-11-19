import React from 'react';
import StarRatings from "react-star-ratings";
import {Link} from 'react-router-dom';


export default class ProfileTile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.profile.id,
        };
    }

    renderNewServiceButton() {
        //TODO: ID of actually logged in user
        let currentUserId = 1;
        if (this.state.userId === currentUserId) {
        return <Link className="button is-success has-text-white"
                     to={"/profile/" + this.props.profile.id + "/create"}>
            New Service
        </Link>
        }
    }

    renderSettingsButton() {
        //TODO: ID of actually logged in user
        let currentUserId = 1;
        if (this.state.userId === currentUserId) {
        return <Link to={"/profile/" + this.props.profile.id + "/settings"}>
            <span className="icon"><ion-icon name="settings"></ion-icon></span>
        </Link>
        }
    }

    render() {
        return (
            //TODO: onclick open profile page
            <main className="ProfileTile">

                <div className="columns">
                    <div className="column is-3">
                        <figure className="image is-480x480">
                            <img
                                src={this.props.profile.photo}></img>
                        </figure>

                    </div>
                    <div className="column">
                        <p className="is-uppercase has-text-weight-bold">
                            {this.props.profile.firstName + " " +
                            this.props.profile.lastName}
                        </p>
                        <p>@{this.props.profile.login}</p>

                        <StarRatings
                            rating={this.props.profile.mark}
                            starDimension="20px"
                            starSpacing="2px"
                            starEmptyColor='rgb(236, 236, 236)'
                            starRatedColor='hsl(141, 71%, 48%)'
                        />

                        <br/>
                        <p className="text has-text-justified">
                                    <span className="icon">
                                        <ion-icon name="information-circle"></ion-icon>
                                    </span>
                            {this.props.profile.description}</p>
                        <p className="text has-text-justified">
                                    <span className="icon">
                                        <ion-icon name="mail"></ion-icon>
                                    </span>
                            {this.props.profile.email}</p>
                        <p className="text has-text-justified">
                                    <span className="icon">
                                        <ion-icon name="navigate"></ion-icon>
                                    </span>
                            {this.props.profile.city}</p>

                        {
                            this.renderNewServiceButton()
                        }
                    </div>

                    <div className="column is-1">
                        {
                            this.renderSettingsButton()
                        }
                    </div>
                </div>


            </main>
        );
    }
}
