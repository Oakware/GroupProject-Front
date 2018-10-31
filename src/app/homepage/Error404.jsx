import React from 'react';
import { Link } from 'react-router-dom';

import './Error404.scss';

export default class Homepage extends React.Component {
    render() {
        let { history } = this.props;

        return (
            <main className="Error404 has-background-danger">
                <div className="fullscreen-message columns is-mobile is-centered is-vcentered">
                    <div className="column is-narrow has-text-centered has-text-white">
                        <div className="message-icon">
                            <ion-icon name="flash"/>
                        </div>
                        <h1 className="title has-text-white"> Error 404 </h1>
                        <h2 className="subtitle has-text-white"> Page not found </h2>
                        <div>
                            <a className="has-text-white" onClick={history.goBack}> Go back </a>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
