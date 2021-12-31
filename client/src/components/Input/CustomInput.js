import {React, Component} from "react";
import './CustomInput.css';

import {EyeIcon, EyeOffIcon}  from '@heroicons/react/outline'
class CustomInput extends Component {

    iconDefaultClassName = ' absolute w-5 h-5 pointer-events-none left-2 '
    state = {
        name: this.props.name,
        icon: this.props.icon,
        iconDefaultColor : this.props.icon.color
            ? this.iconDefaultClassName + ' ' + this.props.icon.color
            : this.iconDefaultClassName + ' text-slate-400' ,
        placeholder: this.props.placeHolder ? this.props.placeHolder : '',
        inputType: this.props.type ? this.props.type : 'text',
        showPassword: false
    }

    render = () => {

        return (
            <div className='custom-input flex items-center overflow-hidden'>
                <this.state.icon.name
                    className= {this.state.iconDefaultColor} />
                <input name={this.state.name} id={this.state.name} type={this.state.inputType} placeholder={this.state.placeholder}/>
                {this.state.inputType === 'password' ? (
                    (this.state.showPassword
                        ? (
                            <EyeIcon className='absolute w-5 h-5 right-2 text-slate-400 cursor-pointer hover:text-slate-800'/>
                        )
                        : (
                            <EyeOffIcon className='absolute w-5 h-5 right-2 text-slate-400 cursor-pointer hover:text-slate-800'/>
                        ))
                ) : ''}
            </div>
        )
    }
}

export default CustomInput;