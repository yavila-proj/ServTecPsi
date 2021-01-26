import React, { useContext, useEffect } from "react";
import { Loader } from "../components/Loader";
import { RouterComponent } from "../components/Router";
import { AppContext } from "../providers/App";
import { AuthContext } from "../providers/Auth";
import { adminRoutes, authRoutes, userRoutes } from "./routes";

export const Router: React.FC = () => {
    const { isLoading } = useContext(AppContext);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {}, [currentUser]);
    if (isLoading) {
        return <Loader />;
    }
    if (currentUser === false) {
        return <RouterComponent routes={authRoutes} />;
    }
    if (currentUser.role === "admin") {
        return <RouterComponent routes={adminRoutes} />;
    }

    return <RouterComponent routes={userRoutes} />;
};
