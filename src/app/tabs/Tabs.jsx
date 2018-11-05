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
            result.push(<div className="column is-6-desktop is-10-tablet" key={s.id}>
                <ServiceTile service={s}/>
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
        ]
        return this.renderServiceTiles(myServices)
    }

    renderOrderedByMeServices() {
        //TODO: get data from back
        let orderedByMeServices = [{key: 5, id: 5, name: "Title 5"}, {key: 7, id: 7, name: "Title 7"},
            {key: 8, id: 8, name: "Title 8"}, {key: 9, id: 9, name: "Title 9"}]
        return this.renderServiceTiles(orderedByMeServices)
    }

    renderTabsNames(){
        //TODO: ID of actually logged in user
        var currentUserId = 2
        if (this.props.userId == currentUserId) {
            var result = []
            result.push(<li id="MyServ" className="tab is-active"
                            onClick={() => this.openTab(event, 'MyServContent', 'MyServ')}><a>My Services</a></li>)
            result.push(<li id="MyOrd" className="tab" onClick={() => this.openTab(event, 'MyOrdContent', 'MyOrd')}>
                <a>My Orders</a></li>)
            return result
        }
        return <li id="MyServ" className="tab is-active"
                   onClick={() => this.openTab(event, 'MyServContent', 'MyServ')}><a>Services</a></li>
    }

    render() {
        return (
            <main className="Tabs">
                <nav className="tabs is-centered">
                    <div className="container">
                        <ul>
                            {
                                this.renderTabsNames()
                            }
                        </ul>
                    </div>
                </nav>

                <div>
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

