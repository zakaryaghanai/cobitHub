import {React, Component} from 'react'
import * as HeroIcon  from '@heroicons/react/outline'

import './Login.css'
import CustomInput from "../Input/CustomInput";
class Login extends Component {
    state = {
        inputs: [
            {icon: {name: HeroIcon.UserIcon}, placeholder: 'first name', name: 'firstName'},
            {icon: {name: HeroIcon.UserIcon}, placeholder: 'last name', name: 'lastName'},
            {icon: {name: HeroIcon.AtSymbolIcon}, placeholder: 'email', name: 'email'},
            {icon: {name: HeroIcon.LockClosedIcon}, placeholder: 'password', type: 'password', name: 'password'},
            {icon: {name: HeroIcon.LockClosedIcon}, placeholder: 'confirm password', type: 'password', name: 'confirmPassword'},
        ]
    }

    handleChange = (e) => {
        console.log(e)
    }
    render() {
        return (
            <div className='login-view'>
                <div className='login-card'>
                    <div className='inputs'>
                        {this.state.inputs.map((input, index) => (
                            <CustomInput key={input.name} icon={input.icon}
                                         placeHolder={input.placeholder} type={input.type} name={input.name} />
                        ))}
                    </div>
                    <button>Create account</button>
                </div>
            </div>
        )
    }
}


export default Login;