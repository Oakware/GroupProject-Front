import React from 'react';
import './ServiceTile.scss';
import StarRatings from "react-star-ratings";


export default class ServiceTile extends React.Component {

    render() {
        return (
            //TODO: onclick open service page
            <main className="ServiceTile">
                <article className="box">
                    <p className="title is-5 has-text-centered is-marginless">{this.props.service.name}</p>
                    <p className="is-marginless has-text-centered"> <StarRatings
                        rating={this.props.service.mark}
                        starDimension="20px"
                        starSpacing="10px"
                        starEmptyColor='rgb(236, 236, 236)'
                        starRatedColor='hsl(141, 71%, 48%)'
                    /></p>
                    <p className="title is-7 has-text-centered has-text-grey is-marginless">{this.props.service.owner}</p>
                    <p className="text">
                        <span className="title is-6">Price:</span> {this.props.service.price} Milo</p>
                    <p className="is-text is-6 has-text-justified">
                        <span className="title is-6">Description:</span>
                        <p>{this.props.service.description}</p></p>
                </article>
            </main>
        );
    }
}
