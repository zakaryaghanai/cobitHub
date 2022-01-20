import React from "react";
import {Navigate, Outlet, useLocation} from "react-router-dom"

import withOverlayBackground from '../../hooks/withOverlayBackground'
import GlobalNav from "../GlobalNav/GlobalNav";
import useAuth from "../../hooks/useAuth";

const Auth = () => {
    const {isAuthenticated} = useAuth()
    const location = useLocation()

    if (isAuthenticated) {
        return <Navigate to='/blog' state={{from: location}} replace/>
    }

    return (
        <React.Fragment>
            <GlobalNav/>
            <Outlet/>
        </React.Fragment>
    )
}

export default withOverlayBackground(Auth)
