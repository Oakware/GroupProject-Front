import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Homepage.scss';
import * as servicesActions from '../../store/services/actions';
import * as servicesSelectors from '../../store/services/reducer';
import ServiceTile from '../service/ServiceTile';

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };

        this.onQueryChange = this.onQueryChange.bind(this);
        this.onQueryEnter = this.onQueryEnter.bind(this);
        this.onSearchService = this.onSearchService.bind(this);
    }

    onQueryChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onQueryEnter(e) {
        if (e.key === 'Enter')
            this.onSearchService();
    }

    onSearchService() {
        let { query } = this.state;
        if (query.length > 0) {
            this.props.dispatch(servicesActions.searchService({
                text: query
            }));
        }
    }

    renderSearchResults() {
        let { servicesFound } = this.props;
        if (!servicesFound)
            return false;

        if (servicesFound.length) {
            return (
                <div className="columns is-multiline">
                    {servicesFound.map(service =>
                        <div className="column is-12-mobile is-6-tablet" key={service.id}>
                            <ServiceTile className="search-result" service={service}/>
                        </div>)
                    }
                </div>
            );
        } else {
            return (
                <h1 className="title has-text-centered not-found-text">
                    nothing found
                </h1>
            );
        }
    }

    render() {
        let { servicesFound } = this.props;

        return (
            <main className="Homepage">
                <section className="section">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-9-tablet is-7-desktop">
                                <div className="field has-addons">
                                    <div className="control is-expanded">
                                        <input
                                            name="query"
                                            value={this.state.queryValue}
                                            onChange={this.onQueryChange}
                                            onKeyUp={this.onQueryEnter}
                                            className="input is-rounded" type="text"/>
                                    </div>
                                    <div className="control">
                                        <button className="button is-rounded is-info"
                                                onClick={this.onSearchService}>
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {this.renderSearchResults()}
                    </div>
                </section>
            </main>
        );
    }
}

function mapStateToProps(state) {
    return {
        servicesFound: servicesSelectors.getFoundServices(state)
    };
}

export default connect(mapStateToProps)(Homepage);
