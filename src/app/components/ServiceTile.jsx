import React from 'react';
import './ServiceTile.scss';
import StarRatings from "react-star-ratings";


export default class ServiceTile extends React.Component {

    render() {
        return (
            //TODO: onclick open service page
            <main className="ServiceTile">
                <article className="box">
                    <p className="title is-5 has-text-centered">{this.props.service.name}</p>

                    <p className="title">
                        <StarRatings
                            rating={this.props.service.mark}
                            starDimension="20px"
                            starSpacing="10px"
                            starEmptyColor='rgb(236, 236, 236)'
                            starRatedColor='rgb(119, 171, 89)'
                        />
                    </p>
                    <p className="title is-6">Price: {this.props.service.price}</p>
                    <p className="title is-6">Description:
                        <p>{this.props.service.description}</p></p>
                    <p className="title is-6">Owner: {this.props.service.owner}</p>
                </article>
            </main>
        );
    }
}
