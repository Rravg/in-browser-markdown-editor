import axios from "../api/axios";

const GET_DOCUMENTS_URL: string = "/";

export default class DocumentService {
    public static GetDocuments(user: string) {
        return axios.get(GET_DOCUMENTS_URL, { params: { user: user } });
    }
}
