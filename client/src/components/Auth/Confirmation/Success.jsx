import React from "react";
import ConfirmationTemplate from "./ConfirmationTemplate";

function Success(props) {

    let firstName = props.firstName ? props.firstName : ''
    const title = 'Confirmation Success'

    const content = (
        <div className='flex flex-col text-md md:text-lg pt-2'>
            <p className='leading-10 pb-1'>Hello <b>{firstName}</b>,</p>
            <p className='leading-8'>Thank you for confirming your account</p>
            <p className='leading-8 break-words'>We look forward to reading your posts and hope you will enjoy the space that we created for our customers.</p>
        </div>
    )

    return (
        <ConfirmationTemplate
            title={title}
            content={content} />
    )
}

export default Success