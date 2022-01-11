import React from 'react'
import { Link } from 'react-router-dom'
import {UserIcon, AtSymbolIcon, LockClosedIcon}  from '@heroicons/react/outline'
import CustomInput from "../../../components/Input/CustomInput"
import './SignUp.scss'

const SignUp = () => {
    let inputs = [
        {attrs: {placeholder: 'John', name: 'firstName', value: ''},
            icon: {name: UserIcon},
            label: 'First Name',
            firstFocus: true
        },
        {attrs: {placeholder: 'Doe', name: 'famillyName', value: ''},
            icon: {name: UserIcon},
            label: 'Familly Name',
        },
        {attrs: {placeholder: 'mail@website.com', type: 'email', name: 'email', value: ''},
            icon: {name: AtSymbolIcon},
            label: 'Email',
        },
        {attrs: {placeholder: 'Min. 8 characters', type: 'password', name: 'password', value: ''},
            icon: {name: LockClosedIcon},
            label: 'Password',
            showPassword: true,
        },
        {attrs: {placeholder: 'Min. 8 characters', type: 'password', name: 'confirmPassword', value: ''},
            icon: {name: LockClosedIcon},
            label: 'Confirm Password',
            showPassword: true,
        },
    ]

    return (
        <div className='login-view'>
            <div className='login-card'>
                <div className='inputs'>
                    {inputs.map((attrs, index) => (
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

export default SignUp;