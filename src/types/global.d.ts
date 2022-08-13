export {};

declare global {
    interface User {
        username: string;
        password: string;
    }

    type document = {
        document_name: string;
        created_at: string;
    };
}
