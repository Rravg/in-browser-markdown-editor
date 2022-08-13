import axios from "../api/axios";

const GET_DOCUMENTS_URL: string = "/";
const CREATE_DOCUMENT_URL: string = "/create";
const DELETE_DOCUMENT_URL: string = "/delete";

export default class DocumentService {
    public static GetDocuments(user: string) {
        return axios.get(GET_DOCUMENTS_URL, { params: { user: user } });
    }

    public static CreateDocument(date: string, user: string) {
        return axios.post(CREATE_DOCUMENT_URL, { date: date }, { params: { user: user } });
    }

    public static DeleteDocument(document: string, user: string) {
        return axios.delete(DELETE_DOCUMENT_URL, {
            params: {
                document_name: document,
                user: user,
            },
        });
    }
}
