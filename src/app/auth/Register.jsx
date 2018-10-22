import React from 'react';

import NavigationBar from '../components/NavigationBar'

export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password1: '',
            password2: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit() {
        //
    }

    render() {
        let history = this.props.history;

        return (
            <main className="Register">
                <NavigationBar/>

                <div className="section">
                    <div className="container box">
                        <h1 className="title is-4 has-text-centered"> Registration </h1>

                        <form onSubmit={this.onSubmit}>
                            <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                    <label className="label"> Name </label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <p className="control">
                                            <input className="input" type="text" name="firstName" placeholder="First name"
                                                   value={this.state.firstName}
                                                   onChange={this.onChange}/>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <p className="control">
                                            <input className="input" type="text" name="lastName" placeholder="Last name"
                                                   value={this.state.lastName}
                                                   onChange={this.onChange}/>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                    <label className="label"> Email </label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <p className="control">
                                            <input className="input" type="email" name="email" placeholder="Email"
                                                   value={this.state.email}
                                                   onChange={this.onChange}/>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                    <label className="label"> Password </label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <p className="control">
                                            <input className="input" type="text" name="password1" placeholder="Password"
                                                   value={this.state.password1}
                                                   onChange={this.onChange}/>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-label"/>
                                <div className="field-body">
                                    <div className="field">
                                        <p className="control">
                                            <input className="input" type="text" name="password2" placeholder="Confirm password"
                                                   value={this.state.password2}
                                                   onChange={this.onChange}/>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-label"/>
                                <div className="field-body">
                                    <div className="field is-grouped">
                                        <p className="control">
                                            <a className="button is-success"> Register </a>
                                        </p>
                                        <p className="control">
                                            <a className="button" onClick={history.goBack}> Cancel </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        );
    }
}
