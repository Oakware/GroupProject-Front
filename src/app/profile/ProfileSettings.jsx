import React from 'react';
import {Link} from 'react-router-dom';
import * as profileSelectors from "../../store/profile/reducer";
import * as authSelectors from "../../store/auth/reducer";
import {connect} from "react-redux";
import * as profileActions from "../../store/profile/actions";

export class ProfileSettings extends React.Component {

    constructor(props) {
        super(props);

        this.generatePicture = this.generatePicture.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount() {
        this.loadProfile();
    }

    loadProfile() {
        let userId = this.props.curUserId;
        if (userId)
            this.props.dispatch(profileActions.getProfile(userId));
    }

    changeValue(key, e) {
        let {profile} = this.props;
        profile[key] = e.target.value
    }

    generatePicture() {
        let {profile} = this.props;
        profile.profilePicturePath = "https://robohash.org/" + Math.random() + "?set=set4";
        var img = document.getElementById("photo");
        img.setAttribute("src", this.props.profile.profilePicturePath);
    }

    updateUser() {
        let {profile} = this.props;

        if (!profile)
            return false;

        profile.fullName = profile.firstName + " " + profile.secondName;

        this.props.dispatch(profileActions.updateProfile(profile)).then(() => {
            this.props.history.push('/profile/' + this.props.curUserId)
        }).catch((error) => {
            this.props.history.push('/profile/' + this.props.curUserId)
        })

    }

    render() {
        let {profile} = this.props;

        if (!profile)
            return false;

        return (
            <main className="ProfileSettings">
                <section className="section">
                    <div className="container box has-background-white">
                        <p className="title is-4 has-text-centered">Settings</p>


                        <div className="columns">
                            <div className="column is-3">
                                <figure className="image is-480x480">
                                    <img id="photo" src={this.props.profile.profilePicturePath}/>
                                </figure>
                            </div>
                            <div className="column is-3">
                                <a className="button" onClick={() => {
                                    this.generatePicture();
                                    console.log(profile.profilePicturePath)
                                }}>Generate New Picture</a>
                                <p className="text has-text-grey-light is-italic">...it's fun!</p>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">First Name</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-normal">
                                        <input name="firstName" className="input" type="text"
                                               placeholder={this.props.profile.firstName}
                                               onChange={(e) => this.changeValue("firstName", e)}/>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Last Name</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-normal">
                                        <input name="secondName" className="input" type="text"
                                               placeholder={this.props.profile.secondName}
                                               onChange={(e) => this.changeValue("secondName", e)}/>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Username</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-normal">
                                        <input name="username" className="input" type="text"
                                               placeholder={this.props.profile.username}
                                               onChange={(e) => this.changeValue("username", e)}/>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Payment Address</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-normal">
                                        <input name="walletAddress" className="input" type="text"
                                               placeholder={this.props.profile.walletAddress}
                                               onChange={(e) => this.changeValue("walletAddress", e)}/>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <hr/>

                        {/*<div className="field is-horizontal">*/}
                            {/*<div className="field-label is-normal">*/}
                                {/*<label className="label">New Password</label>*/}
                            {/*</div>*/}
                            {/*<div className="field-body">*/}
                                {/*<div className="field">*/}
                                    {/*<p className="control is-normal">*/}
                                        {/*<input name="password" className="input" type="password"*/}
                                               {/*onChange={(e) => this.changeValue("password", e)}/>*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<hr/>*/}

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Description</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-expanded">
                                        <input name="description" className="input textarea" type="text"
                                               placeholder={this.props.profile.description}
                                               onChange={(e) => this.changeValue("description", e)}/>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Location</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-normal">
                                        <input name="location" className="input" type="text"
                                               placeholder={this.props.profile.location}
                                               onChange={(e) => this.changeValue("location", e)}/>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="field is-horizontal">
                            <div className="field-label">
                                <Link className="button is-danger has-text-white"
                                      to={"/profile/" + this.props.curUserId}>
                                    Cancel
                                </Link>
                            </div>

                            <div className="field-body">
                                <div className="field">
                                    <div className="control">
                                        {/*TODO: on submit create a new service on server*/}
                                        <a className="button is-success has-text-white"
                                           onClick={this.updateUser}>
                                            Update
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        curUserId: authSelectors.getUserId(state),
        profile: profileSelectors.getProfile(state),
    };
}

export default connect(mapStateToProps)(ProfileSettings);