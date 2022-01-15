import React, { useEffect } from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom"

import withOverlayBackground from '../../components/Hoc/withOverlayBackground'
import GlobalNav from "../../components/GlobalNav/GlobalNav";
const Auth = () => {

    let navigate = useNavigate()
    let location = useLocation()

    useEffect(() => {
        if(location.pathname === '/auth') {
            navigate('signin')
        }
    } , [navigate, location])

    return (
        <React.Fragment>
            <GlobalNav/>
            <Outlet/>
        </React.Fragment>
    )
}

export default withOverlayBackground(Auth)
