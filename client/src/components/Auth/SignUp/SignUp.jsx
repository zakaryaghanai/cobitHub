import {React, Component} from 'react'

import { Link } from 'react-router-dom'
import * as HeroIcon  from '@heroicons/react/outline'
import CustomInput from "../../Input/CustomInput"

import './SignUp.scss'
class SignUp extends Component {
    state = {
        inputs: [
            {attrs: {placeholder: 'John', name: 'firstName', value: ''},
                icon: {name: HeroIcon.UserIcon},
                label: 'First Name',
                firstFocus: true
            },
            {attrs: {placeholder: 'Doe', name: 'famillyName', value: ''},
                icon: {name: HeroIcon.UserIcon},
                label: 'Familly Name',
            },
            {attrs: {placeholder: 'mail@website.com', name: 'email', value: ''},
                icon: {name: HeroIcon.AtSymbolIcon},
                label: 'Email',
            },
            {attrs: {placeholder: 'Min. 8 characters', type: 'password', name: 'password', value: ''},
                icon: {name: HeroIcon.LockClosedIcon},
                label: 'Password',
                showPassword: true,
            },
            {attrs: {placeholder: 'Min. 8 characters', type: 'password', name: 'confirmPassword', value: ''},
                icon: {name: HeroIcon.LockClosedIcon},
                label: 'Confirm Password',
                showPassword: true,
            },
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
                        <div className='flex items-center gap-2 py-2'>
                            <span className='text-slate-500'>Already have an account ?</span>
                            <Link to='/auth/signin'>
                                <p className='text-sky-500'>Sign in</p>
                            </Link>
                        </div>
                        <button>Sign up</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default SignUp;