import React from 'react';
import StarRatings from "react-star-ratings";
import ServiceTile from "../service/ServiceTile";

export default class GlobalSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'queryValue': "",
            'categories': [],
            'priceRange': {
                'min': 0,
                'max': 100
            },
            'rating': 1,
            'fieldToSort': 'name',
            'asc': true
        };

        this.showResults = this.showResults.bind(this);
        this.onQueryEnter = this.onQueryEnter.bind(this);
    }

    selectCategory(e) {
        let newCategory = e.target.textContent.replace(" & ", " ");
        let classes = e.target.classList;
        if (this.state.categories.includes(newCategory)) {
            this.state.categories.splice(this.state.categories.indexOf(newCategory), 1);
            classes.remove('is-success');
        }
        else {
            this.setState({
                'categories': this.state.categories.concat(newCategory.replace(' &', ''))
            }, () => {
                classes.add('is-success');
            })
        }

    }

    pickPrice(e) {
        if (e.target.placeholder == 'Min : 0')
            this.state.priceRange.min = e.target.value;
        else
            this.state.priceRange.max = e.target.value;
    }

    selectRating(e) {
        this.state.rating = e.target.value
    }

    showResults() {
        this.setState({
            showResults: true
        });
    }

    renderCategories() {
        let categories = [
            {
                "Graphics Design":
                    ["Logo Design", "Illustration", "Portraits & Caricatures", "Flyers & Brochures", "Web & Mobile Design", "Other"]
            },
            {
                "Writing Translation":
                    ["Resumes & Cover Letters", "Website Content", "Translation", "Press Releases", "Creative Writing", "Other"]
            },
            {
                "Music Audio":
                    ["Songwriters", "Producers & Composers", "Singers", "Sound Effects", "Mixing & Mastering", "Other"]
            },
            {
                "Programming Tech":
                    ["WordPress", "Web Programming", "Support & IT", "Data Analysis & Reports", "Databases", "QA", "User Testing", "Desktop Applications", "Mobile Apps & Web", "Other"]
            }];

        let result = [];
        categories.map((category) => {
            result.push(
                <p className="control" onClick={(e) => this.selectCategory(e)}>
                    <a className="button">
                        {(Object.keys(category)[0]).replace(' ', ' & ')}
                    </a>
                </p>)
        });
        return result
    }

    updateInputValue(evt) {
        this.setState({
            queryValue: evt.target.value,
        });
    }

    selectSorting(evt) {
        let sortSelectValue = evt.target.value;
        this.setState({
            asc: sortSelectValue % 2 ? true : false,
            fieldToSort: sortSelectValue < 3 ? 'name' :
                (sortSelectValue < 5 ? 'price' : 'rating')
        })

    }

    onQueryEnter(e) {
        if (e.key === 'Enter')
            this.showResults();
    }

    renderResults() {
        let params = {
            text: this.state.queryValue,
            mark: this.state.rating,
            priceFrom: this.state.priceRange.min,
            priceTo: this.state.priceRange.max,
            category: this.state.categories,
            asc: this.state.asc,
            fieldToSort: this.state.fieldToSort
        };

        let services = [
            {
                key: 1,
                id: 1,
                name: "Walk Your Dog",
                description: "Hamburger excepteur ex non. Picanha labore t-bone excepteur, shoulder jerky frankfurter jowl venison veniam andouille tail shank chicken prosciutto. Lorem et capicola pariatur frankfurter, fugiat turkey. Ex consequat dolore, eiusmod shank bacon tri-tip shoulder elit. Jowl rump tenderloin officia labore reprehenderit.",
                owner: "@iduchan0",
                mark: 3,
                price: 3
            },
            {
                key: 2,
                id: 2,
                name: "Feed Your Cat",
                description: "In t-bone salami occaecat tongue nostrud cupim dolore pancetta doner short ribs. Reprehenderit burgdoggen alcatra cupidatat non id laborum lorem andouille mollit. Chuck ham hock dolor ground round, esse porchetta kevin salami alcatra proident beef ribs incididunt anim nostrud ut. Pig cupim picanha frankfurter sint officia kielbasa qui.",
                owner: "@iduchan0",
                mark: 4,
                price: 3
            },
            {
                key: 3,
                id: 3,
                name: "Debug Your Code",
                description: "Bacon ipsum dolor amet deserunt officia in consectetur strip steak. Strip steak labore sint ham chuck buffalo, sunt velit reprehenderit andouille kevin. Pastrami velit jowl do voluptate turducken, landjaeger anim tongue dolor sirloin chicken et strip steak fatback. Frankfurter doner filet mignon minim, pancetta exercitation shank non chuck.",
                owner: "@iduchan0",
                mark: 3.5,
                price: 4
            },
            {
                key: 4,
                id: 4,
                name: "Merge Your Branches",
                description: "Ullamco dolor id laborum ham ham hock meatball consequat. In strip steak pork loin, nostrud short ribs aliquip nulla aliqua. Landjaeger biltong dolor ullamco. Nisi mollit pork chop in ut. Beef ribs frankfurter rump jowl voluptate drumstick.",
                owner: "@iduchan0",
                mark: 5,
                price: 5
            }
        ];

        let result = [];
        services.map((s) =>
            result.push(<div className="column is-12" key={s.id}>
                <ServiceTile service={s}/>
            </div>)
        );
        return result
    }

    render() {
        return (
            <main className="GlobalSearch">
                <section className="section">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-9-tablet is-7-desktop">
                                <div className="field has-addons">
                                    <div className="control is-expanded">
                                        <input className="input is-rounded"
                                               type="search" name="query"
                                               value={this.state.queryValue}
                                               autoComplete="off"
                                               onChange={evt => this.updateInputValue(evt, 0)}
                                               onKeyUp={this.onQueryEnter}/>
                                    </div>
                                    <div className="control">
                                        <button className="button is-rounded is-info"
                                                onClick={this.showResults}>
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="columns">

                            <div className="column is-3">
                                <br/>
                                <p className="title is-4">Category</p>
                                <div className="field is-grouped is-grouped-multiline">
                                    {this.renderCategories()}
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
                                <hr/>
                                <p className="title is-4">Sort By</p>
                                <div className="control select is-rounded">
                                    <select id="sort" defaultValue={1} onChange={(e) => this.selectSorting(e)}>
                                        <option value={1}>Name Asceding</option>
                                        <option value={2}>Name Desceding</option>
                                        <option value={3}>Price Asceding</option>
                                        <option value={4}>Price Desceding</option>
                                        <option value={5}>Rating Asceding</option>
                                        <option value={6}>Rating Desceding</option>
                                    </select>
                                </div>
                                <br/>
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
                                {this.state.showResults ?
                                    <div id="results" className="columns is-multiline is-centered">
                                        {this.renderResults()}
                                    </div> : null}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
