import React from "react";

const SignTemplate = ({children}) => {

    return (
        <div className='flex md:items-center md:justify-center pt-0 md:pt-28'>
            <div className='w-full md:w-[450px] z-10'>
                {children}
            </div>
        </div>
    )
}

export default React.memo(SignTemplate)