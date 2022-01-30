import {useContext} from "react";
import AuthContext from '../context/AuthProvider'
import axios from "axios";

const useAuth = () => {

    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);

    return {
        isAuthenticated,
        signIn: (credentials) => {
            return new Promise(((resolve, reject) => {
                axios.post('http://localhost:9000/api/auth/signin', credentials)
                    .then(function (response) {
                        localStorage.setItem('accessToken', 'Bearer ' + response.data.accessToken)
                        setIsAuthenticated(true)
                        resolve(true)
                    })
                    .catch((error) => {
                        reject(error)
                    });
            }))

        },
        signup: (credentials) => {
            return new Promise(((resolve, reject) => {
                axios.post('http://localhost:9000/api/auth/signup', credentials)
                    .then(function (response) {
                        resolve(response)
                    })
                    .catch(function (error) {
                        reject(error)
                    });
            }))
        },
        signOut: () => {
            axios.post('http://localhost:9000/api/auth/signout')
                .then(function () {
                    localStorage.removeItem('accessToken')
                    setIsAuthenticated(false)
                })
                .catch(function (error) {
                    console.log(error)
                });
        },
    }
}

export default useAuth