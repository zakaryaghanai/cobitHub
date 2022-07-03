import React from 'react'
import { Outlet } from "react-router-dom"
import GlobalNav from "../GlobalNav/GlobalNav";

const Layout = () => {
    return(
        <React.Fragment>
            <GlobalNav/>
            <div className='relative w-full h-full'>
                <Outlet/>
            </div>
        </React.Fragment>
    )
}

export default Layout;