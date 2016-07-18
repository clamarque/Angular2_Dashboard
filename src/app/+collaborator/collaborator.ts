export interface Collaborator {
    id: string;
    active: boolean;
    admin: boolean;
    email: string;
    first: string;
    last: string;
    password: string;
    role: string;
    username: string
}