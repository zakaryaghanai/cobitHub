import React from "react";
import ConfirmationTemplate from "./ConfirmationTemplate";

function Error() {

    const expired = {
        title : 'Confirmation Faild',
        content: (
            <div className='flex flex-col w-full text-md md:text-lg pt-2'>
                <p className='leading-8'>Please follow instruction sent to your email to complete your registration or sign in and request new confirmation link</p>

            </div>
        )
    }

    let title = expired.title
    let content = expired.content

    return (
        <ConfirmationTemplate
            status='warning'
            title={title}
            content={content} />
    )
}

export default Error