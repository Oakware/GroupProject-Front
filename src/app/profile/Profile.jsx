import React from 'react';

import './Profile.scss';
import '../components/NavigationBar';
import {NavigationBar} from "../components/all";
import ServiceTile from "../components/ServiceTile";

export default class Profile extends React.Component {

    renderServiceTiles(services) {
        let result = []
        services.map((s) =>
            result.push(<ServiceTile service={s} key={s.id}/>)
        )
        return result
    }

    renderMyServices() {
        let myServices = [{id : 1, name : "Wow"}, {id: 2, name : "How"}]
        return this.renderServiceTiles(myServices)
    }

    renderOrderedByMeServices() {
        let orderedByMeServices = [{id : 3, name : "Omg"}, {id: 4, name : "Lol"}]
        return this.renderServiceTiles(orderedByMeServices)
    }

    render() {
        return (
            <main className="Profile">
                <NavigationBar/>

                <section className="section">
                    <div className="container">
                        <p>My Services:</p>
                        <div className="columns is-centered">
                            {
                                this.renderMyServices()
                            }
                        </div>
                        <p>Ordered by me:</p>
                        <div className="columns is-centered">
                            {
                                this.renderOrderedByMeServices()
                            }
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
