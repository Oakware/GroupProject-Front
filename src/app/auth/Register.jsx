import React from 'react';

import NavigationBar from '../components/NavigationBar'

export default class Register extends React.Component {
    render() {
        return (
            <main className="Register">
                <NavigationBar/>

                <div className="section">
                    <div className="container box">
                        <h1 className="title"> Registration </h1>
                    </div>
                </div>
            </main>
        );
    }
}
