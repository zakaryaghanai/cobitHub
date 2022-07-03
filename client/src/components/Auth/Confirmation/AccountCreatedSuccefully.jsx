import React from "react";
import ConfirmationTemplate from "./ConfirmationTemplate";

function AccountCreatedSuccefully(props) {


    const firstName = props.firstName
    const title = 'Account created successfully'

    const content = (
        <div className='flex flex-col text-md md:text-lg pt-2'>
            <p className='leading-10 pb-1'>Hello {firstName}</p>
            <p className='leading-8'>Thank you for joining CobitHub</p>
            <p className='leading-8 break-words'>
                Please follow instruction that we sent to your email to complete your registration
            </p>
        </div>
    )

    return (
        <ConfirmationTemplate
            title={title}
            content={content}/>
    )
}

export default AccountCreatedSuccefully