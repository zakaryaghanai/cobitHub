import React, { Component} from "react";
import './CustomInput.css';

import * as HeroIcon  from '@heroicons/react/outline'

class CustomInput extends Component {

    state = {
        attrs: this.props.attrs ? {...this.props.attrs} : '',
        icon: this.props.icon ? (
            React.createElement(this.props.icon.name, {className: 'icon ' + this.props.icon.className})
        ) : '',
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

        return (
            <div className='custom-input flex items-center overflow-hidden'>
                {this.state.icon}
                <input {...this.state.attrs}/>
                {this.state.showPasswordHandler ? (
                    this.state.showPassword ?
                        (<HeroIcon.EyeIcon className='eye-icon eye-icon-active' onClick={this.hidePasswordHandler}/>) :
                        (<HeroIcon.EyeOffIcon className='eye-icon' onClick={this.showPasswordHandler}/>)
                ) : ''}
            </div>
        )
    }
}

export default CustomInput;