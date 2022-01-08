import React from 'react'
import * as HeroIcon  from '@heroicons/react/outline'

import './SignIn.scss'
import CustomInput from "../../Input/CustomInput"
import {Link} from "react-router-dom"

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: [
                {attrs: {placeholder: 'mail@website.com', name: 'email', value: ''},
                    icon: {name: HeroIcon.AtSymbolIcon},
                    label: 'Email',
                    firstFocus: true
                },
                {attrs: {placeholder: 'password', type: 'password', name: 'password', value: ''},
                    icon: {name: HeroIcon.LockClosedIcon},
                    label: 'Password',
                    showPassword: true
                },
            ],
            isAuthenticated: false
        }
    }

    render() {
        return (
            <div className='register-view'>
                <div className='register-card'>
                    <div className='inputs'>
                        {this.state.inputs.map((attrs, index) => (
                            <CustomInput key={index} {...attrs} />
                        ))}
                        <div className='flex gap-2'>
                            <span className='text-slate-500'>Don't have an account ?</span>
                            <Link to='/auth/signup'>
                                <p className='text-sky-500'>Sign up</p>
                            </Link>
                        </div>
                        <div className='flex gap-2'>
                            <Link to='#'>
                                <p className='text-sky-500'>Forget your password?</p>
                            </Link>
                        </div>
                        <button>Sign in</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default SignIn;