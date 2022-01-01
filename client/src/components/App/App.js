import React, {Component} from "react";

import Header from "../Header/Header";
import Login from '../Login/Login'

import './App.css';

class App extends Component {

    signInButtonClickHandler = () => {
        alert('sign in button clicked')
    }

    signUpButtonClickHandler = () => {
        alert('sign up button clicked')
    }

    state = {
        handlers: {
            signInButtonClickHandler: this.signInButtonClickHandler,
            signUpButtonClickHandler: this.signUpButtonClickHandler,
        }
    }
    render() {
        return (
            <div className='page'>
                <Header {...this.state.handlers}/>
                <div className='main'>
                    <div className='hidden lg:block flex-grow px-20 col-span-3'>
                        <p className='text-7xl font-bold text-slate-800 pt-10 md:pt-28 lg:pt-40'>Cobit<span className='text-orange-500'>.</span>Hub</p>
                        <p className='text-7xl pt-24 w-full font-bold text-slate-800'>Rapidly build modern websites without ever leaving your HTML.</p>
                    </div>
                    <Login />
                </div>
            </div>

        );
    }
}

export default App;
