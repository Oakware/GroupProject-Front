import React from 'react';

import ServiceTile from "../components/ServiceTile";


export default class Tabs extends React.Component {
    openTab(evt, tabName, nowActive) {
        var i, x, tablinks, nowActiveTab;
        x = document.getElementsByClassName("content-tab");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tab");
        for (i = 0; i < x.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" is-active", "");
        }
        nowActiveTab = document.getElementById(nowActive);
        nowActiveTab.className = ("tab is-active")
        document.getElementById(tabName).style.display = "block";
    }

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
        let myServices = [
            {
                key: 1,
                id: 1,
                name: "Walk Your Dog",
                description: "Some description.",
                owner: "@iduchan0",
                mark: 4.3,
                price: 3
            },
            {
                key: 2,
                id: 2,
                name: "Feed Your Cat",
                description: "Some other description.",
                owner: "@iduchan0",
                mark: 4.2,
                price: 3
            },
            {key: 3, id: 3, name: "Debug Your Code", description: "Some description.", owner: "@iduchan0", mark: 3.4, price: 4},
            {
                key: 4,
                id: 4,
                name: "Merge Your Branches",
                description: "Some other description.",
                owner: "@iduchan0",
                mark: 5,
                price: 5
            }
        ]
        return this.renderServiceTiles(myServices)
    }

    renderOrderedByMeServices() {
        //TODO: get data from back
        let orderedByMeServices = [{key: 5, id: 5, name: "Title 5"}, {key: 7, id: 7, name: "Title 7"},
            {key: 8, id: 8, name: "Title 8"}, {key: 9, id: 9, name: "Title 9"}]
        return this.renderServiceTiles(orderedByMeServices)
    }

    render() {
        return (
            <main className="Tabs">
                <nav className="tabs is-centered">
                    <div className="container">
                        <ul>
                            <li id="MyServ" className="tab is-active"
                                onClick={() => this.openTab(event, 'MyServContent', 'MyServ')}><a>My Services</a></li>
                            <li id="MyOrd" className="tab" onClick={() => this.openTab(event, 'MyOrdContent', 'MyOrd')}>
                                <a>My Orders</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="container section">
                    <div id="MyServContent" className="content-tab">
                        <div className="columns is-multiline is-centered">
                            {this.renderMyServices()}
                        </div>
                    </div>
                    <div id="MyOrdContent" className="content-tab" style={{display: "none"}}>
                        <div className="columns is-multiline is-centered">
                            {this.renderOrderedByMeServices()}
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

