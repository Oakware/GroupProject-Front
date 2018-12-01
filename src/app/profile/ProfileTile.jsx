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
            return this.props.small ? null : <Link className="button is-success has-text-white"
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
            <main className="ProfileTile">

                <div className="columns">

                    <div className={"column " + (this.props.small ? "is-2" : "is-3")}>
                        <figure className={"image " + (this.props.small ? "is-320x320" : "is-480x480")}>
                            <img src={this.props.profile.photo}/>
                        </figure>

                    </div>
                    <div className="column">
                        <Link to={"/profile/" + this.state.userId}>
                            <p className="is-uppercase has-text-weight-bold">
                                {this.props.profile.firstName + " " +
                                this.props.profile.secondName}
                            </p>
                        </Link>
                        <p>@{this.props.profile.username}</p>

                        <StarRatings
                            rating={this.props.profile.rating}
                            starDimension="20px"
                            starSpacing="2px"
                            starEmptyColor='rgb(236, 236, 236)'
                            starRatedColor='hsl(141, 71%, 48%)'
                        />
                        <br/>
                        {this.props.small ? null :
                            <div>
                                <p className="text has-text-justified">
                                    <span className="icon">
                                        <ion-icon name="information-circle"></ion-icon>
                                    </span>
                                    {this.props.profile.description}</p>
                                <p className="text has-text-justified">
                                    <span className="icon">
                                        <ion-icon name="mail"></ion-icon>
                                    </span>
                                    {this.props.profile.emailAddress}</p>
                                <p className="text has-text-justified">
                                    <span className="icon">
                                        <ion-icon name="navigate"></ion-icon>
                                    </span>
                                    {this.props.profile.location}</p>

                                {
                                    this.renderNewServiceButton()
                                }
                            </div>
                        }
                    </div>

                    {this.props.small ? null :
                        <div className="column is-1">
                            {
                                this.renderSettingsButton()
                            }
                        </div>
                    }
                </div>


            </main>
        );
    }
}
