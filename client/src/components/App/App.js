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
                    <div className='hidden lg:block flex-grow px-20'>
                        <p className='text-6xl font-bold text-slate-800 pt-10 md:pt-28 lg:pt-40'>Cobit<span className='text-orange-500'>.</span>Hub</p>
                    </div>
                    <Login/>
                </div>
            </div>

        );
    }
}

export default App;
