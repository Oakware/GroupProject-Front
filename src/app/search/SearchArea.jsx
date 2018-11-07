import React from 'react';
import {Link} from 'react-router-dom';

import Results from "./Results";

export default class SearchArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queryValue: '',
            showResults: false
        };

        this.showResults = this.showResults.bind(this);
    }

    updateInputValue(evt) {
        this.setState({
            queryValue: evt.target.value,
        });
    }

    showResults() {
        this.setState({
            showResults: true
        });
    }

    render() {
        return (
            <main className="SearchArea">
                <div className="columns is-centered">
                    <div className="column is-9-tablet is-7-desktop">
                        <div className="field has-addons">
                            <div className="control is-expanded">
                                <input
                                    value={this.state.queryValue}
                                    onChange={evt => this.updateInputValue(evt, 0)}
                                    className="input is-rounded" type="text"/>
                            </div>
                            <div className="control">
                                <button className="button is-rounded is-info"
                                        disabled={!this.state.queryValue}
                                        onClick={this.showResults}>Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {this.state.showResults ? <Results query={this.state.queryValue} for={this.props.for}/> : null}
            </main>
        );
    }
}
