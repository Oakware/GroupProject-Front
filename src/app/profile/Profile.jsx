import React from 'react';

import './Profile.scss';
import '../components/NavigationBar';
import {NavigationBar} from "../components/all";
import ServiceTile from "../components/ServiceTile";

export default class Profile extends React.Component {

    renderServiceTiles(services) {
        let result = []
        services.map((s) =>
            result.push(<div className="column is-5-desktop">
                <ServiceTile service={s} key={s.id}/>
            </div>)
        )
        return result
    }

    renderMyServices() {
        //TODO: get data from back
        let myServices = [{id: 1, name: "Title 1"}, {id: 2, name: "Title 2"},
            {id: 3, name: "Title 3"}, {id: 4, name: "Title 4"}]
        return this.renderServiceTiles(myServices)
    }

    renderOrderedByMeServices() {
        //TODO: get data from back
        let orderedByMeServices = [{id: 5, name: "Title 5"}, {id: 7, name: "Title 7"},
            {id: 8, name: "Title 8"}, {id: 9, name: "Title 9"}]
        return this.renderServiceTiles(orderedByMeServices)
    }

    render() {
        return (
            <main className="Profile">
                <NavigationBar/>

                <section className="section">
                    <div className="container box has-background-white">

                        {/*<figure className="image is-128x128">*/}
                            {/*<img className="is-rounded"*/}
                                 {/*src="https://bulma.io/images/placeholders/128x128.png"></img>*/}
                        {/*</figure>*/}

                        <div className="column is-9 is-offset-3">
                            <p className="title is-4">Services</p>
                            <div className="columns is-multiline">
                                {
                                    this.renderMyServices()
                                }
                            </div>
                            <p className="title is-4">Orders</p>
                            <div className="columns is-multiline">
                                {
                                    this.renderOrderedByMeServices()
                                }
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        );
    }
}
