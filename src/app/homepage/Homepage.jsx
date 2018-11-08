import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Homepage.scss';
import * as servicesActions from '../../store/services/actions';
import * as servicesSelectors from '../../store/services/reducer';
import NavigationBar from '../components/NavigationBar';
import ServiceTile from '../components/ServiceTile';

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };

        this.onQueryChange = this.onQueryChange.bind(this);
        this.onSearchService = this.onSearchService.bind(this);
    }

    onQueryChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSearchService() {
        let { query } = this.state;
        if (query.length > 0)
            this.props.dispatch(servicesActions.searchService(query));
    }

    render() {
        let { servicesFound } = this.props;

        return (
            <main className="Homepage">
                <NavigationBar/>

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
                                            className="input is-rounded" type="text"/>
                                    </div>
                                    <div className="control">
                                        <button className="button is-rounded is-info"
                                                onClick={this.onSearchService}>
                                            Search
                                        </button>
                                    </div>
                                </div>

                                <div className="search-results">
                                    { servicesFound.map(service =>
                                        <ServiceTile key={service.id} service={service}/>) }
                                </div>
                            </div>
                        </div>
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
