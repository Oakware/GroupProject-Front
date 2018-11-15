import React from 'react';
import {Link} from 'react-router-dom';
import SearchArea from "./SearchArea";
import StarRatings from "react-star-ratings";
import Results from "./Results";

export default class GlobalSearch extends React.Component {
    constructor(props){
        super(props)
        this.state={
            'queryValue': "hello"
        }
    }

    render() {
        return (
            <main className="GlobalSearch">
                <section className="section">
                    <div className="container">
                        <SearchArea for="service"/>
                        <br/>
                        <br/>
                        <div className="columns">
                            <div className="column is-3">
                                <p className="title is-4">Category</p>
                                <div className="field is-grouped is-grouped-multiline">
                                    <p className="control">
                                        <a className="button">
                                            Home
                                        </a>
                                    </p>
                                    <p className="control">
                                        <a className="button">
                                            IT & Technology
                                        </a>
                                    </p>
                                    <p className="control">
                                        <a className="button">
                                            Graphics & Design
                                        </a>
                                    </p>
                                    <p className="control">
                                        <a className="button">
                                            Writing & Translation
                                        </a>
                                    </p>
                                    <p className="control">
                                        <a className="button">
                                            Video & Animation
                                        </a>
                                    </p>
                                    <p className="control">
                                        <a className="button">
                                            Music & Audio
                                        </a>
                                    </p>
                                    <p className="control">
                                        <a className="button">
                                            Business
                                        </a>
                                    </p>
                                    <p className="control">
                                        <a className="button">
                                            Fun & Lifestyle
                                        </a>
                                    </p>
                                </div>
                                <hr/>
                                <p className="title is-4">Price Range</p>
                                <div className="field has-addons">
                                    <p className="control">
                                        <input className="input" type="text" placeholder="Min"/>
                                    </p>
                                    <p className="control">
                                        <a className="button is-static">
                                            Milo
                                        </a>
                                    </p>
                                </div>
                                <div className="field has-addons">
                                    <p className="control">
                                        <input className="input" type="text" placeholder="Max"/>
                                    </p>
                                    <p className="control">
                                        <a className="button is-static">
                                            Milo
                                        </a>
                                    </p>
                                </div>
                                <hr/>
                                <p className="title is-4">Rating</p>
                                <div className="control">
                                    <label className="radio">
                                        <input type="radio" name="rating" value="1"/>
                                        <StarRatings
                                            rating={1}
                                            starDimension="20px"
                                            starSpacing="2px"
                                            starEmptyColor='rgb(236, 236, 236)'
                                            starRatedColor='hsl(141, 71%, 48%)'
                                        />
                                    </label>
                                    <br/>
                                    <label className="radio">
                                        <input type="radio" name="rating" value="2"/>
                                        <StarRatings
                                            rating={2}
                                            starDimension="20px"
                                            starSpacing="2px"
                                            starEmptyColor='rgb(236, 236, 236)'
                                            starRatedColor='hsl(141, 71%, 48%)'
                                        />
                                    </label>
                                    <br/>
                                    <label className="radio">
                                        <input type="radio" name="rating" value="3"/>
                                        <StarRatings
                                            rating={3}
                                            starDimension="20px"
                                            starSpacing="2px"
                                            starEmptyColor='rgb(236, 236, 236)'
                                            starRatedColor='hsl(141, 71%, 48%)'
                                        />
                                    </label>
                                    <br/>
                                    <label className="radio">
                                        <input type="radio" name="rating" value="4"/>
                                        <StarRatings
                                            rating={4}
                                            starDimension="20px"
                                            starSpacing="2px"
                                            starEmptyColor='rgb(236, 236, 236)'
                                            starRatedColor='hsl(141, 71%, 48%)'
                                        />
                                    </label>
                                    <br/>
                                    <label className="radio">
                                        <input type="radio" name="rating" value="5"/>
                                        <StarRatings
                                            rating={5}
                                            starDimension="20px"
                                            starSpacing="2px"
                                            starEmptyColor='rgb(236, 236, 236)'
                                            starRatedColor='hsl(141, 71%, 48%)'
                                        />
                                    </label>
                                </div>
                                <div className="control">
                                    <button className="button is-rounded is-info">Show Results</button>
                                </div>

                            </div>
                            <div className="column is-1">
                            </div>
                            <div className="column is-8">
                                <p className="title is-4">Results</p>
                                <Results query={this.state.queryValue} for='service'/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
