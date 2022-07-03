import React, {useState} from 'react'
// eslint-disable-next-line no-unused-vars
import CustomInput from "../../Input/CustomInput"

import ForgetPasswordForm from "./Form";
import SignTemplate from "../SignTemplate";

const ForgetPassword = () => {

    function handleSubmit() {
       
    }

    return (
        <>
            <SignTemplate>
                <ForgetPasswordForm _handleSubmit={handleSubmit}/>
            </SignTemplate>
        </>

    )
}


export default ForgetPassword;