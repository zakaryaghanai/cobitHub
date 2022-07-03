import React from "react";
import ConfirmationTemplate from "./ConfirmationTemplate";

function info() {

    const expired = {
        title : 'Confirmation link has been expired',
        content: (
            <div className='flex flex-col w-full text-md md:text-lg pt-2'>
                <p className='leading-10 pb-1'>A new link has been sent to your email account</p>
                <p className='leading-8'>Please follow instruction to complete your registration</p>
            </div>
        )
    }

    let title = expired.title
    let content = expired.content

    return (
        <ConfirmationTemplate
            status='info'
            title={title}
            content={content} />
    )
}

export default info