import React, { Component} from "react";
import './CustomInput.scss';

import * as HeroIcon  from '@heroicons/react/outline'

class CustomInput extends Component {

    state = {
        attrs: this.props.attrs ? {...this.props.attrs} : '',
        showPasswordHandler: (this.props.showPassword && this.props.attrs.type === 'password') ?? false,
        showPassword: false,
    }

    showPasswordHandler = (e) =>  {
        this.setState((prevState, props) => {
            return {
                showPassword : true,
                attrs : {...prevState.attrs, type: 'text'}
            }
        })
    }

    hidePasswordHandler = (e) =>  {
        let newAttrs = this.state.attrs
        newAttrs.type = 'password'
        this.setState({
            showPassword : false,
            attrs : {...newAttrs}
        })
    }

    changeHandler = (e) => {
        this.setState((prevState) => {
            prevState.attrs.value = e.target.value
            return prevState
        })

    }

    onFocusHandler = (e) => {
        if(this.props.icon) {
            let icon = e.target.previousElementSibling
            icon.classList.add('active')
        }
    }

    onBlurHandler = (e) => {
        if(this.props.icon) {
            let icon = e.target.previousElementSibling
            icon.classList.remove('active')
        }
    }

    componentDidMount = () => {
        if(this.elementToFocus) {
            this.elementToFocus.focus()
        }
    }

    initFirstFocusHandler = (element) => {
        if(element) {
            element.focus()
        }
    }

    render = () => {

        let icon = null
        let eyeIcon = null
        let label = null
        let changeHandler = null
        let firstFocus = null

        if(this.props.attrs.hasOwnProperty('value')){
            changeHandler = {
                onChange: this.changeHandler
            }
        }

        if(this.props.firstFocus) {
            firstFocus = {
                ref : this.initFirstFocusHandler
            }
        }

        if(this.props.label) {
            label = <span className='custom-input-label'>{this.props.label}</span>
        }

        if ( this.props.icon ) {
            icon = React.createElement(this.props.icon.name, {className: 'icon ' + this.props.icon.className});

        }

        if ( this.props.showPassword && this.props.attrs.type === 'password') {
            eyeIcon = <HeroIcon.EyeOffIcon className='eye-icon' onClick={this.showPasswordHandler}/>
            if ( this.state.showPassword ) {
                eyeIcon = <HeroIcon.EyeIcon className='eye-icon eye-icon-active' onClick={this.hidePasswordHandler}/> ;
            }
        }

        return (
            <div className='custom-input-wrap'>
                {label}
                <div className='custom-input flex items-center overflow-hidden'>
                    {icon}
                    <input {...this.state.attrs} {...changeHandler}
                           {...firstFocus} onFocus={this.onFocusHandler} onBlur={this.onBlurHandler}/>
                    {eyeIcon}
                </div>
            </div>
        )
    }
}

export default CustomInput;