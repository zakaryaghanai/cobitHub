import React from 'react'
import { Outlet } from "react-router-dom"

import GlobalNav from "../../components/GlobalNav/GlobalNav";

const Layout = () => {
    return(
        <React.Fragment>
            <GlobalNav/>
            <Outlet/>
        </React.Fragment>
    )
}

export default Layout