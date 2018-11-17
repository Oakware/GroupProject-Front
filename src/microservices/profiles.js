const profiles = {
    1: {
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
    2: {
        id: 2,
        login: "ellegal",
        firstName: "Elena",
        lastName: "Galitska",
        email: "elgal0@dmoz.org",
        description: "Hi! I am cool.",
        city: "Kyiv",
        mark: 5,
        photo: "https://media.giphy.com/media/7ieOyZw7sogO4/source.gif"
    }
};

let sleep = (t = 500) => new Promise(resolve => setTimeout(resolve, t));

export async function getProfile(id) {
    await sleep();

    let profile = profiles[id];

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

export async function updateProfile(userId, data) {
    let profile = profiles[userId];

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
    await sleep();

    if (query.text === 'profile') {
        return {
            errors: {
                message: 'nothing found'
            },
            profiles: []
        };
    }

    return {profiles};
}
