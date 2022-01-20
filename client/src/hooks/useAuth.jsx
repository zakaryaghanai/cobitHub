import {useContext} from "react";
import AuthContext from '../context/AuthProvider'

const useAuth = () => {

    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);

    return {
        isAuthenticated,
        signIn: (credentials, callback) => {
            const {email, password} = credentials
            if (email === 'admin@gmail.com' && password === 'admin') {
                localStorage.setItem('isAuthenticated', true)
                setIsAuthenticated(true)
                callback(true)
            } else {
                callback(false)
            }
        },
        signOut: (callback) => {
            setIsAuthenticated(false)
            localStorage.removeItem('isAuthenticated')
            callback(true)
        },
    }
}

export default useAuth