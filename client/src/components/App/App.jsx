import React from "react";

import GlobalNav from "../GlobalNav/GlobalNav";
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import Blog from '../Blog/Blog'
import Home from '../Home/Home'

import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.scss';

class App extends React.Component {

    render() {
        return (
            <div className='page'>

                <BrowserRouter>
                    <GlobalNav />
                    <Routes >
                        <Route index element={<Home />} />
                        <Route path="blog" element={<Blog />} />
                        <Route path="signin" element={<SignIn />} />
                        <Route path="signup" element={<SignUp /> } />
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
