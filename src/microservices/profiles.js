import axios from 'axios';
import * as gateway from './gateway';

const profiles = [
    {
        id: 1,
        username: "iduchan0",
        firstName: "Ivor",
        secondName: "Duchan",
        emailAddress: "iduchan0@dmoz.org",
        description: "Hi! I am a cool guy, who is an expert Software Engineer." +
            "\n I can help you with any of your projects for a low price.",
        location: "Lviv",
        rating: 3.6,
        photo: "https://media.giphy.com/media/3M9zf3NSuNgBWM3RWC/giphy.gif"
    }, {
        id: 2,
        username: "ellegal",
        firstName: "Elena",
        secondName: "Galitska",
        emailAddress: "elgal0@dmoz.org",
        description: "Hi! I am cool.",
        location: "Kyiv",
        rating : 5,
        photo: "https://media.giphy.com/media/7ieOyZw7sogO4/source.gif"
    }
];

let sleep = (t = 500) => new Promise(resolve => setTimeout(resolve, t));

export async function getProfile(id) {
    let res = await axios.get(gateway.paths.profiles.profile, {
        params: {id}
    });

    let profile = res.data;

    // await sleep();
    // let profile = profiles.find(p => p.id.toString() === id);

    if (!profile) {
        return {
            errors: {
                code: 404,
                message: 'profile not found'
            }
        }
    }

    return {profile};
}

export async function createProfile(id, kcProfile) {
    let profile = {
        id,
        username: kcProfile.username,
        firstName: kcProfile.firstName,
        secondName: kcProfile.lastName,
        emailAddress: kcProfile.email,
        profilePicturePath : "https://robohash.org/" + kcProfile.username + "?set=set4"
    };

    await axios.post(gateway.paths.profiles.update, profile);
    return await getProfile(id);
}

export async function updateProfile(userId, data) {
    let res = await axios.post(gateway.paths.profiles.update, data);

    if (!profile) {
        return {
            errors: {
                code: 404,
                message: 'profile not found'
            }
        };
    }

    Object.assign(profile, data);

    return {profile};
}

export async function profileSearch(query) {
    let res = await axios.get(gateway.paths.profiles.search, {
        params: query
    });

    let profiles = res.data;
    return {
        errors: {
            message: profiles.length ? undefined : 'nothing found'
        },
        profiles
    };

    // await sleep();
    //
    // if (query.query === 'profile') {
    //     return {
    //         errors: {
    //             message: 'nothing found'
    //         },
    //         profiles: []
    //     };
    // }
    //
    // return {profiles};
}
