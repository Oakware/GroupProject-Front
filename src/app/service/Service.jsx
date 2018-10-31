import React from 'react';
import { Link } from 'react-router-dom';

import NavigationBar from "../components/NavigationBar";

export default class Service extends React.Component {
    render() {
        return (
            <main className="Service">
                <NavigationBar/>

                <section className="section">
                    <div className="container">
                    </div>
                </section>
            </main>
        );
    }
}
