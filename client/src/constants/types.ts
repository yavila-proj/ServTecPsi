import { RouteComponentProps } from "react-router-dom";

export type roles = "student" | "admin";

export interface IUser {
    name: string;
    avatar: string;
    role: roles;
}

export interface IRoute {
    path: string | string[];
    component:
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>;
    exact?: boolean;
}
