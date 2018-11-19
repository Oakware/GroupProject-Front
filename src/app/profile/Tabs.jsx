import React from 'react';

import ServiceTile from "../service/ServiceTile";
import './Tabs.scss';

export default class Tabs extends React.Component {

    openTab(evt, tabName, nowActive) {
        let i, x, tablinks, nowActiveTab;
        x = document.getElementsByClassName("content-tab");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tab");
        for (i = 0; i < x.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" is-active", "");
        }
        nowActiveTab = document.getElementById(nowActive);
        nowActiveTab.className = ("tab is-active");
        document.getElementById(tabName).style.display = "block";
    }

    renderServiceTiles(services) {
        return services.map((s) =>
            <div className="column is-6-desktop is-10-tablet" key={s.id}>
                <ServiceTile className="service-tile" service={s} small={false}/>
            </div>
        );
    }

    renderTabsNames(){
        //TODO: ID of actually logged in user
        let currentUserId = 1;
        if (this.props.userId == currentUserId) {
            let result = [];
            result.push(<li id="MyServ" className="tab is-active"
                            onClick={() => this.openTab(event, 'MyServContent', 'MyServ')}><a>My Services</a></li>);
            result.push(<li id="MyOrd" className="tab" onClick={() => this.openTab(event, 'MyOrdContent', 'MyOrd')}>
                <a>My Orders</a></li>);
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
                            {this.renderServiceTiles(this.props.services.my_services)}
                        </div>
                    </div>
                    <div id="MyOrdContent" className="content-tab" style={{display: "none"}}>
                        <div className="columns is-multiline is-centered">
                            {this.renderServiceTiles(this.props.services.ordered_services)}
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

