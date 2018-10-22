import React from 'react';

import NavigationBar from '../components/NavigationBar'

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
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

    renderForm() {
        let history = this.props.history;

        return (
            <form onSubmit={this.onSubmit}>
                <div className="field">
                    <label className="label"> Email </label>
                    <p className="control">
                        <input className="input" type="email" name="email" placeholder="Email"
                               value={this.state.email}
                               onChange={this.onChange}/>
                    </p>
                </div>

                <div className="field">
                    <label className="label"> Password </label>
                    <p className="control">
                        <input className="input" type="text" name="password" placeholder="Password"
                               value={this.state.password}
                               onChange={this.onChange}/>
                    </p>
                </div>

                <div className="field is-grouped">
                    <p className="control">
                        <a className="button is-success">
                            Login
                        </a>
                    </p>
                    <p className="control">
                        <a className="button" onClick={history.goBack}>
                            Cancel
                        </a>
                    </p>
                </div>
            </form>
        );
    }

    render() {
        return (
            <main className="Register">
                <NavigationBar/>

                <section className="section">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-6-desktop">
                                <div className="box">
                                    <h1 className="title is-4 has-text-centered"> Login </h1>
                                    { this.renderForm() }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
