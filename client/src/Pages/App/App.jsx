import React from "react";
import {Routes, Route} from "react-router-dom"
import GlobalNav from "../../components/GlobalNav/GlobalNav";
import Auth from "../Auth/Auth";
import SignUp from '../Auth/SignUp/SignUp'
import SignIn from '../Auth/SignIn/SignIn'
import Blog from '../Blog/Blog'
import Home from '../Home/Home'

import NotFound from "../NotFound/NotFound";
// Css Import

import './App.scss'

const App = () => {
    return (
        <React.Fragment>
            <GlobalNav/>
            <Routes>
                <Route index path='/' element={<Home/>}/>
                <Route path="blog" element={<Blog/>}/>
                <Route path="auth" element={<Auth/>}>
                    <Route path='signin' element={<SignIn/>}/>
                    <Route path='signup' element={<SignUp/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
                <Route/>
            </Routes>
            <footer className='p-7 bg-sky-800 text-white flex justify-center items-center'>
                <span className='text-3xl'>Cobit<span className='text-orange-500'>.</span>Hub</span>
            </footer>
        </React.Fragment>

    )
}

export default App;
