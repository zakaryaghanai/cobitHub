import React from "react";
import Google from "./Google";
import Facebook from "./Facebook";
import Github from "./Github";

const Index = () => {

    return (
        <div className='relative flex flex-col justify-center items-center py-3'>
            <div className="relative py-5 w-full">
                <div className="w-full h-px bg-gray-200" />
                <span className="bg-white min-w-max text-sm text-gray-400 px-3 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Or continue with</span>
            </div>
            <div className='social flex justify-center gap-5 items-center'>
                <Google />
                <Facebook />
                <Github />
            </div>
        </div>
    )
}

export default Index