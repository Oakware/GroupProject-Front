import React from 'react';
import './ServiceTile.scss';

export default class ServiceTile extends React.Component {
    render() {
        return (
                <div className="ServiceTile column is-2-tablet is-3-desktop">
                    <p>{this.props.service.name}</p>
                </div>
        );
    }
}
