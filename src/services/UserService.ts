import axios from "../api/axios";

const LOGIN_URL: string = "/login";
const LOGOUT_URL: string = "/logout";
const SIGNUP_URL: string = "/signup";
const URL_STRING = "https://markdown-editor-backend.up.railway.app";

export default class UserService {
    public static login(user: User) {
        return axios.post(
            `${URL_STRING}/api/v1/editor${LOGIN_URL}`,
            user
        );
    }

    public static logout() {
        return axios.get(
            `${URL_STRING}/api/v1/editor${LOGOUT_URL}`
        );
    }

    public static signup(user: User, date: string) {
        return axios.post(
            `${URL_STRING}/api/v1/editor${SIGNUP_URL}`,
            user,
            { params: { date: date } }
        );
    }
}
