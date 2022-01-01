import {React, Component} from 'react'
import * as HeroIcon  from '@heroicons/react/outline'

import './Login.css'
import CustomInput from "../Input/CustomInput";
class Login extends Component {
    state = {
        inputs: [
            {attrs: {placeholder: 'First Name', name: 'firstName'},
                icon: {name: HeroIcon.UserIcon}
            },
            {attrs: {placeholder: 'Last Name', name: 'lastName'},
                icon: {name: HeroIcon.UserIcon} },
            {attrs: {placeholder: 'Email', name: 'email'},
                icon: {name: HeroIcon.AtSymbolIcon} },
            {attrs: {placeholder: 'Password', type: 'password', name: 'password'},
                icon: {name: HeroIcon.LockClosedIcon},
                showPassword: true },
            {attrs: {placeholder: 'Confirm Password', type: 'password', name: 'confirmPassword'},
                icon: {name: HeroIcon.LockClosedIcon},
                showPassword: true },
        ]
    }

    render() {
        return (
            <div className='login-view'>
                <div className='login-card'>
                    <div className='inputs'>
                        {this.state.inputs.map((attrs, index) => (
                            <CustomInput key={index} {...attrs} />
                        ))}
                    </div>
                    <button>Create Account</button>
                </div>
            </div>
        )
    }
}


export default Login;