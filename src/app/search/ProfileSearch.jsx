import React from 'react';
import ProfileTile from "../profile/ProfileTile";
import {Link} from "react-router-dom";

export default class ProfileSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queryValue: '',
            showResults: false
        };

        this.showResults = this.showResults.bind(this);
        this.onQueryEnter = this.onQueryEnter.bind(this);
    }

    updateInputValue(evt) {
        this.setState({
            queryValue: evt.target.value,
        });
    }

    onQueryEnter(e) {
        if (e.key === 'Enter')
            this.showResults();
    }

    showResults() {
        this.setState({
            showResults: true
        });
    }

    renderResults() {
        console.log('here');
        const profiles = [
            {
                id: 1,
                username: "iduchan0",
                firstName: "Ivor",
                secondName: "Duchan",
                emailAddress: "iduchan0@dmoz.org",
                description: "Hi! I am a cool guy, who is an expert Software Engineer." +
                "\n I can help you with any of your projects for a low price.",
                location: "Lviv",
                rating: 3.6,
                photo: "https://media.giphy.com/media/3M9zf3NSuNgBWM3RWC/giphy.gif"
            },
            {
                id: 2,
                username: "ellegal",
                firstName: "Elena",
                secondName: "Galitska",
                emailAddress: "elgal0@dmoz.org",
                description: "Hi! I am cool.",
                location: "Kyiv",
                rating: 5,
                photo: "https://media.giphy.com/media/7ieOyZw7sogO4/source.gif"
            }
        ];

        let result = [];
        profiles.map((p) =>
            result.push(<div className="column is-6-desktop is-10-tablet" key={p.id}>
                <Link to={"/profile/" + p.id}>
                    <article className="box">
                        <ProfileTile profile={p} cabinet={false} small={true}/>
                    </article>
                </Link>
            </div>)
        );
        return result
    }

    render() {
        return (
            <main className="ProfileSearch">
                <section className="section">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-9-tablet is-7-desktop">
                                <div className="field has-addons">
                                    <div className="control is-expanded">
                                        <input className="input is-rounded"
                                               type="search" name="query"
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


                        {this.state.showResults ?
                            <div id="results" className="columns is-multiline is-centered">
                                {this.renderResults()}
                            </div> : null}
                    </div>
                </section>
            </main>
        );
    }
}
