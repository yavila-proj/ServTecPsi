import axios, { AxiosResponse } from "axios";
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import JwtDecode from "jwt-decode";
import { ENDPOINT, IUser } from "../../constants";
import { AppContext } from "../App";
import { IAuthContext } from "./types";

export const AuthContext = createContext<IAuthContext>({
    closeSession: () => {},
    currentUser: false,
    getToken: () => "",
    logIn: () => {},
    signUp: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
    const { setIsLoading } = useContext(AppContext);
    const [currentUser, setCurrentUser] = useState<IUser | false>(false);
    const [token, setToken] = useState("");

    const setSession = useCallback(
        function (response: AxiosResponse<any>) {
            const { data } = response;
            if (data.error) {
                throw new Error(data.error.message);
            }
            const decoded = JwtDecode(data.accessToken) as IUser;
            setCurrentUser((prev) => ({ ...prev, ...decoded }));
            setToken(data.accessToken);
            setIsLoading(false);
        },
        [setIsLoading]
    );
    useEffect(() => {
        setIsLoading(true);
        let cancel: any;
        const cancelToken = new axios.CancelToken((c: any) => (cancel = c));
        axios
            .get(`${ENDPOINT}/api/v1/current`, { cancelToken })
            .then((response) => setSession(response))
            .catch(() => setIsLoading(false));
        return () => cancel();
    }, [setIsLoading, setSession]);

    function closeSession() {
        axios
            .get(`${ENDPOINT}/api/v1/close`)
            .then((response) => setSession(response));
    }

    function logIn() {
        axios
            .post(`${ENDPOINT}/api/v1/login`)
            .then((response) => setSession(response));
    }

    function signUp() {
        axios
            .get(`${ENDPOINT}/api/v1/signup`)
            .then((response) => setSession(response));
    }

    function getToken() {
        const { exp } = JwtDecode(token) as any;
        if (exp < Date.now().valueOf() / 1000) {
            axios
                .get(`${ENDPOINT}/api/v1/auth/refresh`)
                .then((response) => setSession(response))
                .catch(() => {
                    setToken("");
                    setCurrentUser(false);
                });
        }
        return `Bearer ${token}`;
    }

    return (
        <AuthContext.Provider
            value={{ signUp, logIn, getToken, currentUser, closeSession }}
        >
            {children}
        </AuthContext.Provider>
    );
};
