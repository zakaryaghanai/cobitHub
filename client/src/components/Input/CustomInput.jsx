import React, {useState, memo, useMemo} from "react";
import './CustomInput.scss';

import * as HeroIcon from '@heroicons/react/outline'

const CustomInput = (props) => {

    let [showPassword, setShowPassword] = useState(false)
    let [attrs, setAttrs] = useState(props.attrs)
    let [value, setValue] = useState(props.value)

    const showPasswordHandler = () => {
        setShowPassword(true)

        setAttrs(prevState => {
            let newAttrs = Object.assign({}, prevState)
            newAttrs.type = 'text'
            return newAttrs
        })
    }

    const hidePasswordHandler = () => {
        setShowPassword(false)
        setAttrs(prevState => {
            let newAttrs = Object.assign({}, prevState)
            newAttrs.type = 'password'
            return newAttrs
        })
    }

    const handleChange = (e) => {
        setValue(e.target.value)
        props.valueSetter(e.target.value)
    }

    const onFocusHandler = (e) => {
        if (props.icon) {
            let icon = e.target.previousElementSibling
            icon.classList.add('active')
        }
    }

    const onBlurHandler = (e) => {
        if (props.icon) {
            let icon = e.target.previousElementSibling
            icon.classList.remove('active')
        }
    }

    const initFirstFocusHandler = useMemo(() => (element) => {
            if (element) {
                element.focus()
            }
        }
        , [])

    let icon = null
    let eyeIcon = null
    let handleInputChange = null
    let firstFocusRef = null

    if (props.hasOwnProperty('value')) {
        handleInputChange = {
            onChange: handleChange
        }
    }

    if (props.firstFocus) {
        firstFocusRef = {
            ref: initFirstFocusHandler
        }
    }

    if (props.icon) {
        icon = React.createElement(props.icon.name, {className: 'icon ' + props.icon.className});

    }

    if (props.showPassword) {
        eyeIcon = <HeroIcon.EyeOffIcon className='eye-icon' onClick={showPasswordHandler}/>
        if (showPassword) {
            eyeIcon = <HeroIcon.EyeIcon className='eye-icon eye-icon-active' onClick={hidePasswordHandler}/>;
        }
    }

    return (
        <div className='custom-input-wrap'>
            
            <div className='custom-input flex items-center overflow-hidden'>
                {icon}
                <input className='w-full h-12 text-sm px-10 py-2 bg-sky-800/[3%] rounded text-zinc-800
                focus:outline-none focus:ring-2 focus:ring-inset ring-transparent
                focus:ring-sky-500 duration-100
                focus:bg-white
                placeholder:text-zinc-400'
                       value={value}
                       {...attrs}
                       {...handleInputChange}
                       {...firstFocusRef}
                       onFocus={onFocusHandler}
                       onBlur={onBlurHandler}/>
                {eyeIcon}
            </div>
        </div>
    )
}
export default memo(CustomInput);