import React from 'react';
import './ServiceTile.scss';
import StarRatings from "react-star-ratings";
import {Link} from 'react-router-dom';


export default class ServiceTile extends React.Component {
    //TODO: add categories

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }

    render() {
        return (
            //TODO: onclick open service page
            <article className={"ServiceTile " + this.props.className + (this.props.small ? null : " box")}>

                <p className="title is-5 has-text-centered is-marginless">
                    <Link to={"/service/" + this.props.service.id}>
                        {this.props.service.name}
                    </Link>
                </p>
                <p className="title is-7 has-text-grey-light has-text-centered is-marginless">
                        {this.props.service.category} : {this.props.service.subcategory}
                </p>

                <div className="has-text-centered"><StarRatings
                    rating={this.props.service.mark}
                    starDimension="20px"
                    starSpacing="2px"
                    starEmptyColor='rgb(236, 236, 236)'
                    starRatedColor='hsl(141, 71%, 48%)'
                /></div>
                {this.props.small ? null :
                    <div>
                        <p className="title is-7 has-text-centered has-text-grey is-marginless">{this.props.service.owner}</p>
                        <p className="text">
                            <span className="title is-6">Price:</span> {this.props.service.price} Milo
                        </p>
                        <div className="is-text is-6 has-text-justified">
                            <span className="title is-6">Description:</span>
                            <p>{this.props.service.description}</p>
                        </div>
                    </div>
                }
            </article>
        );
    }
}
