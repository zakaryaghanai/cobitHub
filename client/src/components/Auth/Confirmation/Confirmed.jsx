import React from "react";
import ConfirmationTemplate from "./ConfirmationTemplate";

function Confirmed() {

    const title = 'Confirmation Success'
    const content = (
        <div className='flex flex-col text-md md:text-lg pt-2'>
            <p className='leading-8'>We already did confirme your account successfully</p>
        </div>
    )

    return (
        <ConfirmationTemplate
            title={title}
            content={content} />
    )
}

export default Confirmed