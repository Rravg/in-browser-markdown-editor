import axios from "../api/axios";

const GET_DOCUMENTS_URL: string = "/";
const CREATE_DOCUMENT_URL: string = "/create";
const DELETE_DOCUMENT_URL: string = "/delete";
const GET_SELECTED_DOCUMENT_URL: string = "/document";
const SAVE_DOCUMENT_URL: string = "/save";
const URL_STRING = "https://markdown-editor-backend.up.railway.app";

export default class DocumentService {


    public static GetDocuments(user: string) {
        return axios.get(
            `${URL_STRING}/api/v1/editor${GET_DOCUMENTS_URL}`,
            { params: { user: user } }
        );
    }

    public static CreateDocument(date: string, user: string) {
        return axios.post(
            `${URL_STRING}/api/v1/editor${CREATE_DOCUMENT_URL}`,
            { date: date },
            { params: { user: user } }
        );
    }

    public static DeleteDocument(document: string, user: string) {
        return axios.delete(
            `${URL_STRING}/api/v1/editor${DELETE_DOCUMENT_URL}`,
            {
                params: {
                    document_name: document,
                    user: user,
                },
            }
        );
    }

    public static GetSelectedDocument(document: string, user: string) {
        return axios.get(
            `${URL_STRING}/api/v1/editor${GET_SELECTED_DOCUMENT_URL}`,
            {
                params: {
                    document_name: document,
                    user: user,
                },
            }
        );
    }

    public static SaveDocument(new_name: string, old_name: string, source: string, user: string) {
        return axios.put(
            `${URL_STRING}/api/v1/editor${SAVE_DOCUMENT_URL}`,
            { source: source },
            {
                params: {
                    new_document_name: new_name,
                    old_document_name: old_name,
                    user: user,
                },
            }
        );
    }
}
