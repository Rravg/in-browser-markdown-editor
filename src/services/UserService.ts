import axios from "../api/axios";

const LOGIN_URL: string = "/login";
const LOGOUT_URL: string = "/logout";
const SIGNUP_URL: string = "/signup";

export default class UserService {
    public static login(user: User) {
        return axios.post(
            `http://ec2-54-146-132-56.compute-1.amazonaws.com:8000/api/v1/editor${LOGIN_URL}`,
            user
        );
    }

    public static logout() {
        return axios.get(
            `http://ec2-54-146-132-56.compute-1.amazonaws.com:8000/api/v1/editor${LOGOUT_URL}`
        );
    }

    public static signup(user: User, date: string) {
        return axios.post(
            `http://ec2-54-146-132-56.compute-1.amazonaws.com:8000/api/v1/editor${SIGNUP_URL}`,
            user,
            { params: { date: date } }
        );
    }
}
