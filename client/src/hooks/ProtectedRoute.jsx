import {useLocation, Outlet, Navigate} from 'react-router-dom'
import useAuth from "./useAuth";

function ProtectedRoute() {
    const {isAuthenticated} = useAuth()
    const location = useLocation()

    if(!isAuthenticated) {
        return <Navigate to='/auth/signin' state={{from: location}} replace />
    }

    return <Outlet/>
}

export default ProtectedRoute