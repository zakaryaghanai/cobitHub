import React from "react";
import {Routes, Route} from "react-router-dom"
import SignUp from '../Auth/SignUp/SignUp'
import SignIn from '../Auth/SignIn/SignIn'
import ForgetPassword from '../Auth/ForgetPassword/ForgetPassword'

import NotFound from "../NotFound/NotFound";
// Css Import

import './App.scss'

const App = () => {
    return (
        <React.Fragment>
            <div className='absolute top-0 w-full h-full'>
                <img className=' bg-center bg-no-repeat w-full h-full' src={require('../../assets/images/cover.jpg')} alt='' />
                <div className='absolute bg-zinc-100/70 backdrop-blur-3xl top-0 w-full h-full'/>
            </div>
            <Routes>
                <Route path='/' element={<SignIn/>}/>
                <Route path='signin' element={<SignIn/>}/>
                <Route path='signup' element={<SignUp/>}/>
                <Route path='forgetpassword' element={<ForgetPassword/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </React.Fragment>

    )
}

export default App;
