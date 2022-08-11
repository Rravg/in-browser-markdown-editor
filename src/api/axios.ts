import axios from "axios";

const BASE_URL: string = "http://localhost:8000";
const URL_API: string = `${BASE_URL}/api/v1/editor`;

export default axios.create({
    baseURL: URL_API,
});
