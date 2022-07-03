import React from "react";
import {Routes, Navigate, Route, useLocation} from "react-router-dom"
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import ForgetPassword from "./ForgetPassword/ForgetPassword";
import Confirmation from "./Confirmation";
import NotFound from "../NotFound/NotFound";
import useAuth from "../../hooks/useAuth";

function Auth() {
    const {isAuthenticated} = useAuth()
    const location = useLocation()

    const confirmation = location.pathname.includes('confirmationCode');

    if (!confirmation) {

        if (isAuthenticated) {
            return <Navigate to='/blog' state={{from: location}} replace/>
        }

        if (location.pathname === '/auth' || location.pathname === '/auth/') {
            return <Navigate to='signin' state={{from: location}} replace/>
        }
    }

    return (
        <React.Fragment>
            <Routes>
                <Route path='signin' element={<SignIn/>} />
                <Route path='signup' element={<SignUp/>}/>
                <Route path='forgetpassword' element={<ForgetPassword/>}/>
                <Route path='confirmation/confirmationcode/:code' element={<Confirmation />}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </React.Fragment>
    )
}

export default Auth
// export default withOverlayBackground(Auth)
