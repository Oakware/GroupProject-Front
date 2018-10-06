import React from 'react';
import { Link } from 'react-router-dom';

import './Error404.scss';

export default class Homepage extends React.Component {
    render() {
        return (
            <main className="Error404 has-background-danger">
                <div className="fullscreen-message columns is-centered is-vcentered">
                    <div className="column is-narrow has-text-centered">
                        <h1 className="title has-text-white"> Error 404 </h1>
                        <h1 className="subtitle has-text-white"> Page not found </h1>
                        <Link className="has-text-white" to="/"> Go back </Link>
                    </div>
                </div>
            </main>
        );
    }
}
