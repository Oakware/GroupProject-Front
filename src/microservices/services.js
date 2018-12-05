import axios from 'axios';
import * as gateway from './gateway';

const services = [
    {
        key: 1,
        id: 1,
        user_id: "1",
        name: "Walk Your Dog",
        description: "Hamburger excepteur ex non. Picanha labore t-bone excepteur, shoulder jerky frankfurter jowl venison veniam andouille tail shank chicken prosciutto. Lorem et capicola pariatur frankfurter, fugiat turkey. Ex consequat dolore, eiusmod shank bacon tri-tip shoulder elit. Jowl rump tenderloin officia labore reprehenderit.",
        owner: "@iduchan0",
        mark: 3,
        price: 3,
        category: 'Graphics & Design',
        subcategory: 'Logo Design'
    }, {
        key: 2,
        id: 2,
        user_id: "2",
        name: "Feed Your Cat",
        description: "In t-bone salami occaecat tongue nostrud cupim dolore pancetta doner short ribs. Reprehenderit burgdoggen alcatra cupidatat non id laborum lorem andouille mollit. Chuck ham hock dolor ground round, esse porchetta kevin salami alcatra proident beef ribs incididunt anim nostrud ut. Pig cupim picanha frankfurter sint officia kielbasa qui.",
        owner: "@ellegal",
        mark: 4,
        price: 3,
        category: 'Graphics & Design',
        subcategory: 'Logo Design'
    }, {
        key: 3,
        id: 3,
        user_id: "1",
        name: "Debug Your Code",
        description: "Bacon ipsum dolor amet deserunt officia in consectetur strip steak. Strip steak labore sint ham chuck buffalo, sunt velit reprehenderit andouille kevin. Pastrami velit jowl do voluptate turducken, landjaeger anim tongue dolor sirloin chicken et strip steak fatback. Frankfurter doner filet mignon minim, pancetta exercitation shank non chuck.",
        owner: "@iduchan0",
        mark: 3.5,
        price: 4,
        category: 'Graphics & Design',
        subcategory: 'Logo Design'
    }, {
        key: 4,
        id: 4,
        user_id: "1",
        name: "Merge Your Branches",
        description: "Ullamco dolor id laborum ham ham hock meatball consequat. In strip steak pork loin, nostrud short ribs aliquip nulla aliqua. Landjaeger biltong dolor ullamco. Nisi mollit pork chop in ut. Beef ribs frankfurter rump jowl voluptate drumstick.",
        owner: "@iduchan0",
        mark: 5,
        price: 5,
        category: 'Graphics & Design',
        subcategory: 'Logo Design'
    }
];

export async function getService(serviceId) {
    let res = await axios.get(gateway.paths.services.service, {
        params: {id: serviceId}
    });

    let service = res.data.result;

    if (!service) {
        return {
            errors: {
                code: 404,
                message: 'service not found'
            }
        };
    }

    return {service};
}

export async function getUserServices(userId) {
    let res = await axios.get(gateway.paths.services.user, {
        params: {
            user: userId
        }
    });

    return { services: res.data.result }
}

export async function serviceSearch(query) {
    let res = await axios.get(gateway.paths.services.search, {
        params: query
    });

    let services = res.data.result.result;
    return {
        errors: {
            message: services.length ? undefined : 'nothing found'
        },
        services
    };
}

export async function addService(data) {
    let res = await axios.post(gateway.paths.services.addService, data);

    let service = res.data;
    return {service};
}
