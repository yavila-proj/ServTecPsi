import { IUser } from "../../constants";

export interface IAuthContext {
    currentUser: IUser | false;
    getToken: () => string;
    signUp: (values: ISignUp) => void;
    logIn: (values: ILogIn) => void;
    closeSession: () => void;
}

export interface ISignUp {
    email: string;
    password: string;
    username: string;
}

export interface ILogIn {
    email: string;
    password: string;
}
