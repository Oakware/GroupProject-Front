import React from 'react';
import ProfileTile from "../profile/ProfileTile";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as searchSelectors from "../../store/search/reducer";
import * as searchActions from "../../store/search/actions";

class ProfileSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queryValue: '',
            showResults: false
        };

        this.showResults = this.showResults.bind(this);
        this.onQueryEnter = this.onQueryEnter.bind(this);
        this.onSearchProfile = this.onSearchProfile.bind(this);
    }

    renderSearchErrors() {
        let {searchErrors} = this.props;

        if (searchErrors && searchErrors.message) {
            return (
                <h1 className="title has-text-centered not-found-text">
                    {searchErrors.message}
                </h1>
            );
        }
    }

    onSearchProfile() {
        let {queryValue} = this.state;
        if (queryValue.length > 0) {
            this.props.dispatch(searchActions.searchProfile({
                query: queryValue
            }));
        } else {
            this.props.dispatch(searchActions.resetProfilesSearch());
        }
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
        this.onSearchProfile();
    }

    render() {
        let {profilesFound} = this.props;
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
                                {console.log(profilesFound)}

                                {profilesFound.map((p) =>
                                    <div className="column is-6-desktop is-10-tablet" key={p.id}>
                                        <Link to={"/profile/" + p.id}>
                                            <article className="box">
                                                <ProfileTile profile={p} cabinet={false} small={true}/>
                                            </article>
                                        </Link>
                                    </div>
                                )}
                                {this.renderSearchErrors()}
                            </div> : null}
                    </div>
                </section>
            </main>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchErrors: searchSelectors.getProfilesSearchErrors(state),
        profilesFound: searchSelectors.getFoundProfiles(state),
    };
}

export default connect(mapStateToProps)(ProfileSearch);
