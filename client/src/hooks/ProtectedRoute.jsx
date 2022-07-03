import {useLocation, Outlet, Navigate} from 'react-router-dom'
import useAuth from "./useAuth";

function ProtectedRoute() {
    const {isAuthenticated} = useAuth()
    const location = useLocation()

    let elementToRender = <Outlet/>

    if(!isAuthenticated) {
        elementToRender = <Navigate to='/auth/signin' state={{from: location}} replace />
    }

    return elementToRender
}

export default ProtectedRoute