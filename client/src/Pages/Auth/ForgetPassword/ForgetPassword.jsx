import React from 'react'
import CustomInput from "../../../components/Input/CustomInput"
import * as HeroIcon from '@heroicons/react/outline'
import {Link} from "react-router-dom"
import LoadingButton from "../../../components/Buttons/Loadingbutton";

const ForgetPassword = () => {
    const inputs = [
        {
            attrs: {placeholder: 'mail@website.com', type: 'email', name: 'email', value: ''},
            icon: {name: HeroIcon.AtSymbolIcon},
            label: 'Email',
            firstFocus: true
        }
    ]

    const handleClickCustomButton = () => {
        return true
    }

    return (
        <div className='relative flex flex-row w-full'>
            <div className='w-full rounded-none overflow-hidden shadow-md rounded-md
                flex items-center flex-col gap-5 justify-center px-1 py-4'>
                <div className='w-full md:w-[450px] max-w-[450px] bg-white/80 flex flex-col gap-4 p-10 select-none rounded-md shadow-sm'>
                    <div className='flex flex-col gap-5'>

                        <span className='text-slate-600 text-md bg-sky-200/30 text-sky-800 py-5 text-md text-center text-left'>
                            Enter email address associated with your account
                        </span>
                    </div>
                    {inputs.map((attrs, index) => (
                        <CustomInput key={index} {...attrs} />
                    ))}

                    <LoadingButton withLoader={true} text='Send' changeButtonState={handleClickCustomButton}/>

                    <Link to='/auth/signin'>
                        <span className='pt-2 text-sm cursor-pointer text-sky-500'>Go back to sign in page</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default ForgetPassword;