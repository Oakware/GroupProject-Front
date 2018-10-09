import React from 'react';
import './ServiceTile.scss';

export default class ServiceTile extends React.Component {
    render() {
        return (
                <div className="ServiceTile">
                    <p>{this.props.service.name}</p>
                </div>
        );
    }
}
