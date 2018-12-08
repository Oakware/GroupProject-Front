import axios from 'axios';
import * as gateway from './gateway';

export async function getProfile(id) {
    let res = await axios.get(gateway.paths.profiles.profile, {
        params: {id}
    });

    let profile = res.data;

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

    return await updateProfile(profile);
}

export async function updateProfile(profile) {
    await axios.post(gateway.paths.profiles.update, profile);
    return await getProfile(profile.id);
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
}
