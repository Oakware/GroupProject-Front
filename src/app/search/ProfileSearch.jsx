import React from 'react';
import {Link} from 'react-router-dom';

import SearchArea from "./SearchArea";

export default class ProfileSearch extends React.Component {
    render() {
        return (
            <main className="ProfileSearch">
                <section className="section">
                    <div className="container">
                        <SearchArea for="profile"/>
                    </div>
                </section>
            </main>
        );
    }
}
