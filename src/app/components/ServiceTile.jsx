import React from 'react';
import './ServiceTile.scss';

export default class ServiceTile extends React.Component {
    render() {
        return (
            <main className="ServiceTile">
                <article className="tile is-child notification is-info">
                    <p className="title">{this.props.service.name}</p>
                </article>
            </main>
        );
    }
}
