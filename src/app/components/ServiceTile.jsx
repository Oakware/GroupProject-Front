import React from 'react';
import './ServiceTile.scss';

export default class ServiceTile extends React.Component {
    render() {
        return (
            <main className="ServiceTile">
                <article className="box">
                    <p className="title is-5">{this.props.service.name}</p>
                    <p className="title is-6">Description: {this.props.service.description}</p>
                    <p className="title is-6">Owner: {this.props.service.owner}</p>
                    <div className="columns">
                        <p className="title is-6 column">Mark: {this.props.service.mark}</p>
                        <p className="title is-6 column">Price: {this.props.service.price}</p>
                    </div>
                </article>
            </main>
        );
    }
}
