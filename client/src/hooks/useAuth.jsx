import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { globalAxios } from "../config";

const useAuth = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    return {
        isAuthenticated,
        signIn: (credentials) => {
            return new Promise((resolve, reject) => {
                globalAxios
                    .post("/api/auth/signin", credentials)
                    .then((response) => {
                        localStorage.setItem(
                            "accessToken",
                            "Bearer " + response.data.accessToken
                        );
                        setIsAuthenticated(true);
                        resolve(true);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        signup: (credentials) => {
            
            // return new Promise((resolve, reject) => {
            //     resolve(true)
            // });

            return new Promise((resolve, reject) => {
                globalAxios
                    .post("/api/auth/signup", credentials)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        signOut: () => {
            globalAxios
                .post("/api/auth/signout")
                .then(() => {
                    localStorage.removeItem("accessToken");
                    setIsAuthenticated(false);
                })
                .catch((error) => {});
        },
        confirmAccount: (confirmationCode) => {
            return new Promise((resolve, reject) => {
                globalAxios
                    .post("/api/auth/accountVerification", {
                        confirmationCode: confirmationCode,
                    })
                    .then((data) => {
                        resolve(data);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
    };
};

export default useAuth;
