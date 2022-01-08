import React from "react";
import {Outlet} from "react-router-dom"

class Auth extends React.Component {
    render() {
        return (
            <Outlet/>
        )
    }
}

export default Auth
