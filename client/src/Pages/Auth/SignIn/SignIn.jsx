import React, { useState } from 'react'
import CustomInput from "../../../components/Input/CustomInput"
import * as HeroIcon from '@heroicons/react/outline'
import {Link} from "react-router-dom"
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';

import './SignIn.css'

import LoadingButton from "../../../components/Buttons/Loadingbutton";

const SignIn = () => {

    const [rememberMeIsChecked, setRememberMeIsChecked] = useState(false)

    const inputs = [
        {
            attrs: {placeholder: 'mail@website.com', type: 'email', name: 'email', value: ''},
            icon: {name: HeroIcon.AtSymbolIcon},
            label: 'Email',
            firstFocus: true
        },
        {
            attrs: {placeholder: 'password', type: 'password', name: 'password', value: ''},
            icon: {name: HeroIcon.LockClosedIcon},
            label: 'Password',
            showPassword: true
        },
    ]

    const handleClickCustomButton = () => {
        return true;
    }

    const handleRememberMe = () => {
        setRememberMeIsChecked(prevState => {
            return !prevState
        })
    }

    return (
        <div className='relative flex w-full'>
            <div className='w-full overflow-hidden shadow-md
                flex items-center justify-center px-1 py-4'>

                <div className='w-full md:w-[450px] max-w-[450px] bg-white/80 flex flex-col gap-4 p-10 select-none rounded-md shadow-sm'>
                    {inputs.map((attrs, index) => (
                        <CustomInput key={index} {...attrs} />
                    ))}

                    <div className='flex text-zinc-700 items-center justify-between h-11 text-sm'>
                        <div className='flex items-center gap-2 '>
                            <Checkbox
                                checked={rememberMeIsChecked}
                                onChange={handleRememberMe}
                                name='rememberMe'
                                value={rememberMeIsChecked}
                                className='stroke-cyan-500'
                            >
                                <span>Remember me</span>
                            </Checkbox>

                        </div>
                        <Link to='/forgetpassword'>
                            <span className='cursor-pointer hover:text-sky-500 font-bold'>Forget password</span>
                        </Link>
                    </div>

                    <LoadingButton withLoader={true} text='Sign in' changeButtonState={handleClickCustomButton}/>

                    <div className='relative flex flex-col items-center pt-4 gap-1'>
                        <div className='flex w-full'>
                            <hr className='w-full text-zinc-200'/>
                            <span className='w-full relative -top-3 text-sm text-slate-600 px-3'>or continue with</span>
                            <hr className='w-full text-zinc-200'/>
                        </div>
                        <div className='social flex justify-center gap-5 items-center'>
                            <button
                                className='h-11 w-11 bg-zinc-50 shadow-sm rounded-full flex items-center justify-center
                                focus:ring-2 focus:ring focus:ring-zinc-200 duration-200'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px" height="25px">
                                    <path fill="#FFC107"
                                          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                                    <path fill="#FF3D00"
                                          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                                    <path fill="#4CAF50"
                                          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                                    <path fill="#1976D2"
                                          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                                </svg>
                            </button>
                            <button
                                className='h-11 w-11 bg-zinc-50 shadow-sm rounded-full flex items-center justify-center
                                focus:ring-2 focus:ring focus:ring-zinc-200 duration-200'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="27px" height="27px">
                                    <linearGradient id="CXanuwD9EGkBgTn76_1mxa" x1="9.993" x2="40.615" y1="-299.993"
                                                    y2="-330.615" gradientTransform="matrix(1 0 0 -1 0 -290)"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stopColor="#2aa4f4"/>
                                        <stop offset="1" stopColor="#007ad9"/>
                                    </linearGradient>
                                    <path fill="url(#CXanuwD9EGkBgTn76_1mxa)"
                                          d="M24,4C12.954,4,4,12.954,4,24c0,10.028,7.379,18.331,17.004,19.777	C21.981,43.924,22.982,41,24,41c0.919,0,1.824,2.938,2.711,2.818C36.475,42.495,44,34.127,44,24C44,12.954,35.046,4,24,4z"/>
                                    <path
                                        d="M27.707,21.169c0-1.424,0.305-3.121,1.757-3.121h4.283l-0.001-5.617l-0.05-0.852l-0.846-0.114	c-0.608-0.082-1.873-0.253-4.206-0.253c-5.569,0-8.636,3.315-8.636,9.334v2.498H15.06v7.258h4.948V43.6	C21.298,43.861,22.633,44,24,44c1.268,0,2.504-0.131,3.707-0.357V30.301h5.033l1.122-7.258h-6.155V21.169z"
                                        opacity=".05"/>
                                    <path
                                        d="M27.207,21.169c0-1.353,0.293-3.621,2.257-3.621h3.783V12.46l-0.026-0.44l-0.433-0.059	c-0.597-0.081-1.838-0.249-4.143-0.249c-5.323,0-8.136,3.055-8.136,8.834v2.998H15.56v6.258h4.948v13.874	C21.644,43.876,22.806,44,24,44c1.094,0,2.16-0.112,3.207-0.281V29.801h5.104l0.967-6.258h-6.072V21.169z"
                                        opacity=".05"/>
                                    <path fill="#fff"
                                          d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46	c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.475	C21.988,43.923,22.981,44,24,44c0.921,0,1.82-0.062,2.707-0.182V29.301z"/>
                                </svg>
                            </button>
                            <button
                                className='h-11 w-11 bg-zinc-50 shadow-sm rounded-full flex items-center justify-center
                                focus:ring-2 focus:ring focus:ring-zinc-200 duration-200'>
                                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="27px" height="27px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
                            </button>
                        </div>
                        <Link to='/signup'>
                            <div className='text-sm flex gap-2 pt-3'>
                                <span className='text-slate-500'>Don't have and account?</span>
                                <span className='font-bold text-zinc-700 cursor-pointer hover:text-sky-500'>Sign up for free</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SignIn;