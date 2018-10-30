
export class AuthService {

    static async login() {
        return { id: Math.trunc(Math.random() * 1000) };
    }
}
