import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"

// Components Import
import GlobalNav from "../GlobalNav/GlobalNav";
import Auth from "../Auth/Auth";
import SignUp from '../Auth/SignUp/SignUp'
import SignIn from '../Auth/SignIn/SignIn'
import Blog from '../Blog/Blog'
import Home from '../Home/Home'

import NotFound from "../NotFound/NotFound";
// Css Import

import './App.scss'

class App extends React.Component {

    render() {
        return (
            <div className='page'>

                <BrowserRouter>
                    <GlobalNav />
                    <Routes >
                        <Route index path='/' element={<Home />} />
                        <Route path="*" element={<NotFound/>} />
                        <Route path="blog" element={<Blog />} />
                        <Route path="auth" element={<Auth />} >
                            <Route path='*' element={<NotFound/>} />
                            <Route path='signin' element={<SignIn/>} />
                            <Route path='signup' element={<SignUp/>} />
                        </Route>
                        <Route/>
                    </Routes>
                    <footer className='p-7 bg-sky-800 text-white flex justify-center items-center'>
                        <span className='text-3xl'>Cobit<span className='text-orange-500'>.</span>Hub</span>
                    </footer>
                </BrowserRouter>
            </div>

        );
    }
}

export default App;
