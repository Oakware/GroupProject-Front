import React from 'react';
import './ServiceTile.scss';
import StarRatings from "react-star-ratings";


export default class ServiceTile extends React.Component {

    render() {
        return (
            <main className="ServiceTile">
                <article className="box">
                    <p className="title is-5">{this.props.service.name}</p>
                    <div className="columns">

                        <p className="title is-6 column">
                            <StarRatings
                                rating={this.props.service.mark}
                                starDimension="20px"
                                starSpacing="10px"
                                starEmptyColor='rgb(236, 236, 236)'
                                starRatedColor='rgb(119, 171, 89)'
                            />
                        </p>
                        <p className="title is-6 column">Price: {this.props.service.price}</p>
                    </div>
                    <p className="title is-6 has-text-info">Description: {this.props.service.description}</p>
                    <p className="title is-6">Owner: {this.props.service.owner}</p>
                </article>
            </main>
        );
    }
}
