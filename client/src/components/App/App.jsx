import React from "react";
import {Routes, Route} from "react-router-dom"
import Blog from "../Blog/Blog";
import Auth from "../Auth/Auth";
import Layout from "../Layout/Layout";

// Css Import
import './App.scss'
import Home from "../Home/Home";
import ProtectedRoute from "../../hooks/ProtectedRoute";

const App = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='auth/*' element={<Auth/>} />
                    <Route index element={<Home/>}/>
                    <Route element={<ProtectedRoute/>}>
                        <Route path='blog' element={<Blog/>}/>
                    </Route>
                </Route>
            </Routes>
        </React.Fragment>

    )
}

export default App;
