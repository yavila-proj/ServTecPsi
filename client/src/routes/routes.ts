import { IRoute } from "../constants";
import { HomePage } from "../pages/Home";

export const authRoutes: IRoute[] = [
    { path: "/", component: HomePage, exact: true },
];

export const userRoutes: IRoute[] = [];

export const adminRoutes: IRoute[] = [];
