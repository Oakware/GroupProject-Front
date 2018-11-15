import React from 'react';
import {Link} from 'react-router-dom';
import ServiceTile from "../service/ServiceTile";
import ProfileTile from "../profile/ProfileTile";


export default class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            for: '',
            query: '',
            sortValue: ''
        };

        this.handleSortChange = this.handleSortChange.bind(this);
    }

    componentDidMount() {
        this.setState({for: this.props.for})
        this.setState({query: this.props.query})
    }

    renderResults(orderBy) {
        if (this.state.for == 'service') {
            //TODO: get services by query from microsrvice
            let services = [
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
            return this.renderServices(services, orderBy);
        }
        else {
            //TODO: get profiles by query from microsrvice
            let profiles = [
                {
                    id: 1,
                    login: "iduchan0",
                    firstName: "Ivor",
                    lastName: "Duchan",
                    email: "iduchan0@dmoz.org",
                    description: "Hi! I am a cool guy, who is an expert Software Engineer." +
                    "\n I can help you with any of your projects for a low price.",
                    city: "Lviv",
                    mark: 3.6,
                    photo: "https://media.giphy.com/media/3M9zf3NSuNgBWM3RWC/giphy.gif"
                },
                {
                    id: 2,
                    login: "ellegal",
                    firstName: "Elena",
                    lastName: "Galitska",
                    email: "elgal0@dmoz.org",
                    description: "Hi! I am cool.",
                    city: "Kyiv",
                    mark: 5,
                    photo: "https://media.giphy.com/media/7ieOyZw7sogO4/source.gif"
                }];
            return this.renderProfiles(profiles, orderBy);
        }
    }

    renderSortOptions() {
        if (this.state.for === 'service') {
            let result = []
            result.push(<option selected value="n-a">Name (asceding)</option>)
            result.push(<option value="n-d">Name (desceding)</option>)
            result.push(<option value="p-a">Price (asceding)</option>)
            result.push(<option value="p-d">Price (desceding)</option>)
            result.push(<option value="r-a">Rating (asceding)</option>)
            result.push(<option value="r-d">Rating (desceding)</option>)
            return result
        }
        else {
            let result = []
            result.push(<option selected value="un-a">Username (asceding)</option>)
            result.push(<option value="un-d">Username (desceding)</option>)
            result.push(<option value="fn-a">First Name (asceding)</option>)
            result.push(<option value="fn-d">First Name (desceding)</option>)
            result.push(<option value="ln-a">Last Name (asceding)</option>)
            result.push(<option value="ln-d">Last Name (desceding)</option>)
            result.push(<option value="r-a">Rating (asceding)</option>)
            result.push(<option value="r-d">Rating (desceding)</option>)
            return result
        }
    }

    renderServices(services, orderBy) {
        services.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        switch (orderBy){
            case 'n-d':
                services.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0));
                break;
            case 'p-a':
                services.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
                break;
            case 'p-d':
                services.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
                break;
            case 'r-a':
                services.sort((a,b) => (a.mark > b.mark) ? 1 : ((b.mark > a.mark) ? -1 : 0));
                break;
            case 'r-d':
                services.sort((a,b) => (a.mark < b.mark) ? 1 : ((b.mark < a.mark) ? -1 : 0));
                break;
        }
        let result = []
        services.map((s) =>
            result.push(<div className="column is-6-desktop is-10-tablet">
                <ServiceTile service={s} key={s.id}/>
            </div>)
        )
        return result
    }

    renderProfiles(profiles, orderBy) {
        profiles.sort((a,b) => (a.login > b.login) ? 1 : ((b.login > a.login) ? -1 : 0));
        switch (orderBy){
            case 'un-d':
                profiles.sort((a,b) => (a.login < b.login) ? 1 : ((b.login < a.login) ? -1 : 0));
                break;
            case 'fn-a':
                profiles.sort((a,b) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0));
                break;
            case 'fn-d':
                profiles.sort((a,b) => (a.firstName < b.firstName) ? 1 : ((b.firstName < a.firstName) ? -1 : 0));
                break;
            case 'ln-a':
                profiles.sort((a,b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0));
                break;
            case 'ln-d':
                profiles.sort((a,b) => (a.mark < b.lastName) ? 1 : ((b.lastName < a.lastName) ? -1 : 0));
                break;
            case 'r-a':
                profiles.sort((a,b) => (a.mark > b.mark) ? 1 : ((b.mark > a.mark) ? -1 : 0));
                break;
            case 'r-d':
                profiles.sort((a,b) => (a.mark < b.mark) ? 1 : ((b.mark < a.mark) ? -1 : 0));
                break;
        }

        let result = []
        profiles.map((p) =>
            result.push(<div className="column is-6-desktop is-10-tablet" key={p.id}>
                    <Link to={"/profile/" + p.id}>
                        <article className="box">
                            <ProfileTile profile={p} cabinet={false}/>
                        </article>
                    </Link>
                </div>
            )
        )
        return result
    }

    handleSortChange(event) {
        this.setState({sortValue: event.target.value})
    }


    render() {
        return (
            <main className="Results">
                <div className="select is-rounded">
                    <select value={this.state.value} onChange={this.handleSortChange}>
                        {this.renderSortOptions()}
                    </select>
                </div>

                <div id="results" className="columns is-multiline is-centered">
                    {this.renderResults(this.state.sortValue)}
                </div>
            </main>
        )
    }
}