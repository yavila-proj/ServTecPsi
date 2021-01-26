import React, { Fragment } from "react";
import { Router } from "../routes";
import { AppProvider } from "./App";
import { AuthProvider } from "./Auth";

export const Providers: React.FC = () => {
    return (
        <Fragment>
            <AppProvider>
                <AuthProvider>
                    <Router />
                </AuthProvider>
            </AppProvider>
        </Fragment>
    );
};
