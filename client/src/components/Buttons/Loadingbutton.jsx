import React, {useState} from "react";
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const LoadingButton = (props) => {

    let withLoader = props.withLoader ?? false
    let [isLoading, setIsLoading] = useState(false)
    let buttonText = props.text ?? 'Button'

    const handleClick = () => {
        setTimeout(() => {
            setIsLoading(props.changeButtonState())
        }, 200)
    }


    let button = () => {

        if(withLoader) {

            let spinner = null;

            if(isLoading) {
                spinner = <Spin size="small" spinning={isLoading} indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} className='text-sky-500' />
            }

            return (
                <button className={`w-full ${isLoading ? 'bg-sky-500/10' : 'bg-sky-500'} text-white px-4 h-11 
                            rounded-md duration-200
                            ${isLoading ? '' : 'hover:bg-sky-500/80 focus:bg-sky-500 focus:ring-2 focus:ring focus:ring-sky-200'}`}
                        onClick={handleClick} disabled={isLoading}>
                    {spinner}
                    { isLoading ? '': <span className='text-sm font-bold'>{buttonText}</span>}
                </button>
            )
        }

        return (
            <button className={`w-full bg-sky-500 text-white px-4 h-11 
                            rounded-md duration-200
                            hover:bg-sky-500/80 focus:bg-sky-500 focus:ring-2 focus:ring focus:ring-sky-200`}
                    onClick={handleClick}>
                <span className='text-sm font-bold'>{buttonText}</span>
            </button>
        )
    }


    return button()
}

export default LoadingButton;