import React from 'react'
import { Outlet } from "react-router-dom"

import GlobalNav from "../GlobalNav/GlobalNav";

const Layout = () => {
    return(
        <React.Fragment>
            <GlobalNav/>
            <Outlet/>
        </React.Fragment>
    )
}

export default Layout