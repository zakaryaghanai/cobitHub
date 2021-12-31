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
    render() {
        return (
            <div className='page'>
                <Header signInButtonClickHandler={this.signInButtonClickHandler}/>
                <div className='main'>
                    <div className='hidden lg:block flex-grow px-20'>
                        <p className='text-5xl font-bold text-slate-600 pt-10 md:pt-28 lg:pt-40'>Welcome</p>
                    </div>
                    <Login/>
                </div>
            </div>

        );
    }
}

export default App;
