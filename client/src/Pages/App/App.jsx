import React from "react";
import {Routes, Route} from "react-router-dom"
import SignUp from '../Auth/SignUp/SignUp'
import SignIn from '../Auth/SignIn/SignIn'
import ForgetPassword from '../Auth/ForgetPassword/ForgetPassword'
import Blog from "../Blog/Blog";
import Auth from "../Auth/Auth";
import Layout from "../Layout/Layout";
import NotFound from "../NotFound/NotFound";

// Css Import
import './App.scss'
import Home from "../Home/Home";

const App = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path='auth' element={<Auth /> }>
                    <Route path='signin' element={<SignIn/>}/>
                    <Route path='signup' element={<SignUp/>}/>
                    <Route path='forgetpassword' element={<ForgetPassword/>}/>
                </Route>

                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path='blog' element={<Blog />}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>

            </Routes>
        </React.Fragment>

    )
}

export default App;
