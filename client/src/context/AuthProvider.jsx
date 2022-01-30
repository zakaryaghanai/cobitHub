import {createContext, useState} from 'react'

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    let token = localStorage.getItem('accessToken')

    const [isAuthenticated, setIsAuthenticated] = useState(token);

    return (
        <AuthContext.Provider children={children} value={{isAuthenticated, setIsAuthenticated}}/>
    )
}

export default AuthContext;