import React, { Component} from "react";
import './CustomInput.css';

import * as HeroIcon  from '@heroicons/react/outline'

class CustomInput extends Component {

    state = {
        attrs: this.props.attrs ? {...this.props.attrs} : '',
        showPasswordHandler: (this.props.showPassword && this.props.attrs.type === 'password') ?? false,
        showPassword: false,
    }

    showPasswordHandler = (e) =>  {

        let newAttrs = this.state.attrs
        newAttrs.type = 'text'
        this.setState({
            showPassword : true,
            attr : {...newAttrs}
        })
    }

    hidePasswordHandler = (e) =>  {
        let newAttrs = this.state.attrs
        newAttrs.type = 'password'
        this.setState({
            showPassword : false,
            attr : {...newAttrs}
        })
    }

    render = () => {

        let icon = null;
        let eyeIcon = null;

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
            <div className='custom-input flex items-center overflow-hidden'>
                {icon}
                <input {...this.state.attrs}/>
                {eyeIcon}
            </div>
        )
    }
}

export default CustomInput;