import React from 'react';
import {Link} from 'react-router-dom';
import SearchArea from "./SearchArea";
import StarRatings from "react-star-ratings";
import Results from "./Results";

export default class GlobalSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'queryValue': "",
            'categories': [],
            'priceRange': {
                'min': 0,
                'max': 100
            },
            'rating': 1
        }

        this.showResults = this.showResults.bind(this);
    }

    selectCategory(e) {
        let newCategory = e.target.textContent
        let classes = e.target.classList
        if (this.state.categories.includes(newCategory)) {
            this.state.categories.splice(this.state.categories.indexOf(newCategory), 1)
            console.log(this.state.categories)
            classes.remove('is-success')
        }
        else {
            this.setState({
                'categories': this.state.categories.concat(newCategory)
            }, () => {
                classes.add('is-success')
                console.log(this.state.categories)
            })
        }

    }

    pickPrice(e) {
        console.log(e.target)
        if (e.target.placeholder == 'Min : 0')
            this.state.priceRange.min = e.target.value
        else
            this.state.priceRange.max = e.target.value
        console.log(this.state.priceRange)
    }

    selectRating(e) {
        this.state.rating = e.target.value
    }

    showResults() {
        console.log(this.state)
        this.setState({
            showResults: true
        });
    }

    updateInputValue(evt) {
        this.setState({
            queryValue: evt.target.value,
        });
    }

    render() {
        return (
            <main className="GlobalSearch">
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-3">

                                <div className="control is-expanded">
                                    <input
                                        value={this.state.queryValue}
                                        onChange={evt => this.updateInputValue(evt, 0)}
                                        className="input is-rounded" type="text"
                                        placeholder="Search..."/>

                                </div>
                                <br/>
                                <p className="title is-4">Category</p>
                                <div className="field is-grouped is-grouped-multiline">
                                    <p className="control" onClick={(e) => this.selectCategory(e)}>
                                        <a className="button">
                                            Home
                                        </a>
                                    </p>
                                    <p className="control" onClick={(e) => this.selectCategory(e)}>
                                        <a className="button">
                                            IT & Technology
                                        </a>
                                    </p>
                                    <p className="control" onClick={(e) => this.selectCategory(e)}>
                                        <a className="button">
                                            Graphics & Design
                                        </a>
                                    </p>
                                    <p className="control" onClick={(e) => this.selectCategory(e)}>
                                        <a className="button">
                                            Writing & Translation
                                        </a>
                                    </p>
                                    <p className="control" onClick={(e) => this.selectCategory(e)}>
                                        <a className="button">
                                            Video & Animation
                                        </a>
                                    </p>
                                    <p className="control" onClick={(e) => this.selectCategory(e)}>
                                        <a className="button">
                                            Music & Audio
                                        </a>
                                    </p>
                                    <p className="control" onClick={(e) => this.selectCategory(e)}>
                                        <a className="button">
                                            Business
                                        </a>
                                    </p>
                                    <p className="control" onClick={(e) => this.selectCategory(e)}>
                                        <a className="button">
                                            Fun & Lifestyle
                                        </a>
                                    </p>
                                </div>
                                <hr/>
                                <p className="title is-4">Price Range</p>
                                <div className="field has-addons">
                                    <p className="control">
                                        <input className="input" type="number" placeholder="Min : 0"
                                               onChange={(e) => this.pickPrice(e)}/>
                                    </p>
                                    <p className="control">
                                        <a className="button is-static">
                                            Milo
                                        </a>
                                    </p>
                                </div>
                                <div className="field has-addons">
                                    <p className="control">
                                        <input className="input" type="number" placeholder="Max : 100"
                                               onChange={(e) => this.pickPrice(e)}/>
                                    </p>
                                    <p className="control">
                                        <a className="button is-static">
                                            Milo
                                        </a>
                                    </p>
                                </div>
                                <hr/>
                                <p className="title is-4">Rating</p>
                                <div className="control" onChange={(e) => this.selectRating(e)}>
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
                                    <button className="button is-rounded is-info"
                                            onClick={(e) => this.showResults(e)}>Show Results
                                    </button>
                                </div>

                            </div>
                            <div className="column is-1">
                            </div>
                            <div className="column is-8">
                                <p className="title is-4">Results</p>
                                {this.state.showResults ? <Results query={this.state.queryValue} for='service'/> : null}
                            </div>
                        </div>
                    </div>
                </section>
                <
                /main>
                );
                }
                }
