import React from 'react';
import NavigationBar from "../components/NavigationBar";
import {Link} from 'react-router-dom';


export default class ProfileSettings extends React.Component {

    getCurrentUserData(){
        //TODO: get real data
        return {
            login: "iduchan0",
            firstName: "Ivor",
            lastName: "Duchan",
            email: "iduchan0@dmoz.org",
            description: "Hi! I am a cool guy, who is an expert Software Engineer." +
            "\n I can help you with any of your projects for a low price.",
            city: "Lviv",
            mark: 3.6
        }
    }

    render(){
        return (
            <main className="ProfileSettings">
                <NavigationBar/>

                <section className="section">
                    <div className="container box has-background-white">
                        <p className="title is-4 has-text-centered">Settings</p>

                        {/*TODO: upload new photo*/}

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">First Name</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-normal">
                                        <input className="input" type="text" placeholder={this.getCurrentUserData().firstName}/>
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
                                        <input className="input" type="text" placeholder={this.getCurrentUserData().lastName}/>
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
                                        <input className="input" type="text" placeholder={this.getCurrentUserData().login}/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr/>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Old Password</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-normal">
                                        <input className="input" type="password" placeholder="Old Password"/>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">New Password</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-normal">
                                        <input className="input" type="password" placeholder="New Password"/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr/>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Description</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-expanded">
                                        <input className="input textarea" type="text" placeholder={this.getCurrentUserData().description}/>
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
                                        <input className="input" type="text" placeholder={this.getCurrentUserData().city}/>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="field is-horizontal">
                            <div className="field-label">
                                <Link className="button is-danger has-text-white"
                                      to={"/profile/" + this.props.match.params.userId}>
                                    Cancel
                                </Link>
                            </div>

                            <div className="field-body">
                                <div className="field">
                                    <div className="control">
                                        {/*TODO: on submit create a new service on server*/}
                                        <Link className="button is-success has-text-white"
                                              to={"/update"}>
                                            Update
                                        </Link>
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