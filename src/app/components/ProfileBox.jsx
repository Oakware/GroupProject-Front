import React from 'react';
import {Link} from 'react-router-dom';
import StarRatings from 'react-star-ratings';

export default function ProfileBox(props) {
    let { profile } = props;

    return (
        <div className="media box">
            <figure className="media-left">
                <p className="image is-64x64">
                    <img className="is-rounded" src={profile.photo}/>
                </p>
            </figure>
            <div className="media-content">
                <div className="content">
                    <Link to={"/profile/" + profile.id}>
                        <strong> {profile.firstName} {profile.secondName} </strong>
                    </Link>
                    <small> @{profile.username} </small>
                    <br/>
                    <StarRatings
                        rating={profile.rating}
                        starDimension="20px"
                        starSpacing="2px"
                        starEmptyColor="rgb(236, 236, 236)"
                        starRatedColor="hsl(141, 71%, 48%)"/>
                    <p> {profile.description} </p>
                </div>
            </div>
        </div>
    );
}
