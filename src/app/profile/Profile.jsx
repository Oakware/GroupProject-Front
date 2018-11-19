import React from 'react';

import './Profile.scss';
import Tabs from "./Tabs";
import ProfileTile from "./ProfileTile";

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: 0,
            services: {
                my_services: [],
                ordered_services: []
            }
        };
    }

    componentDidMount() {
        this.setState({
            userId: this.props.match.params.userId,
            services: {
                my_services: [
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
                ],
                ordered_services: [{key: 5, id: 5, name: "Title 5"}, {key: 7, id: 7, name: "Title 7"},
                    {key: 8, id: 8, name: "Title 8"}, {key: 9, id: 9, name: "Title 9"}]
            }
        })
    }

    getUser(id) {
        //TODO: get data from back

        let user1 = {
            id: 1,
            username: "iduchan0",
            firstName: "Ivor",
            secondName: "Duchan",
            emailAddress: "iduchan0@dmoz.org",
            description: "Hi! I am a cool guy, who is an expert Software Engineer." +
            "\n I can help you with any of your projects for a low price.",
            location: "Lviv",
            rating: 3.6,
            photo: "https://media.giphy.com/media/3M9zf3NSuNgBWM3RWC/giphy.gif",
            walletAddress: "address1"
        };

        let user2 = {
            id: 2,
            username: "ellegal",
            firstName: "Elena",
            secondName: "Galitska",
            emailAddress: "elgal0@dmoz.org",
            description: "Hi! I am cool.",
            location: "Kyiv",
            rating: 5,
            photo: "https://media.giphy.com/media/7ieOyZw7sogO4/source.gif",
            walletAddress: "address2"
        };

        if (id == 1) return user1;
        else return user2
    }

    render() {
        return (
            <main className="Profile">
                <section className="section">
                    <div className="container box has-background-white">

                        <ProfileTile profile={this.getUser(this.props.match.params.userId)}/>

                        <Tabs userId={this.state.userId} services={this.state.services}/>
                    </div>
                </section>
            </main>
        );
    }
}
