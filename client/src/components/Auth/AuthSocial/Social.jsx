import React from "react";

const Social = (props) => {
    return (
        <a
            href="#"
            className="h-11 w-11 bg-zinc-50 shadow-sm rounded-full flex items-center justify-center
                                focus:ring-2 focus:ring focus:ring-zinc-200 duration-100
                                hover:bg-white hover:-translate-y-[3px]"
        >
            {props.children}
        </a>
    );
};

export default Social;
