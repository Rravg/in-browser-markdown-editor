import axios from "../api/axios";

const LOGIN_URL: string = "/login";
const LOGOUT_URL: string = "/logout";
const SIGNUP_URL: string = "/signup";

export default class UserService {
    public static login(user: User) {
        return axios.post(LOGIN_URL, user);
    }

    public static logout() {
        return axios.get(LOGOUT_URL);
    }

    public static signup(user: User, date: string) {
        return axios.post(SIGNUP_URL, user, { params: { date: date } });
    }
}
