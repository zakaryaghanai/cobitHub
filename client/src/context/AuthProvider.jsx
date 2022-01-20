import {createContext, useState} from 'react'

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    let user = localStorage.getItem('isAuthenticated')

    const [isAuthenticated, setIsAuthenticated] = useState(user);

    return (
        <AuthContext.Provider children={children} value={{isAuthenticated, setIsAuthenticated}}/>
    )
}

export default AuthContext;