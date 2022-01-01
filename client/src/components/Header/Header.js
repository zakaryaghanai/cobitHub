import {React, Component} from "react";

import './Header.css';
import * as HeroIcon  from '@heroicons/react/outline'

class Header extends Component {

    state = {
        links: [
            {name: 'Blog', url: '#'},
            {name: 'Join', url: '#'}
        ],
        showTopbar: false,
    }

    signInButtonClickHandler = () => {
        if(this.props.signInButtonClickHandler) {
            this.props.signInButtonClickHandler()

            return
        }
        alert('attach your sign up handler by passing function reference to signInButtonClickHandler property')
    }

    signUpButtonClickHandler = () => {
        if(this.props.signUpButtonClickHandler) {
            this.props.signUpButtonClickHandler()

            return
        }
        alert('attach your sign up handler by passing function reference to signUpButtonClickHandler property')
    }

    showDropDownHandler = () =>  {
        this.setState({
            showTopbar: !this.state.showTopbar
        })
    }

    render() {

        let horizontalLinks = (
            <ul className='items flex gap-10 h-full items-center'>
                {this.state.links.map((link) => (
                    <li key={link.name + '_'} className='item text-slate-900'>
                        <a href={link.url}
                           className='hover:underline hover:decoration-2'>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        );

        let verticalLinks = (
            <ul className='items flex flex-col h-full items-start md:hidden'>
                {this.state.links.map((link, index) => (
                    <li key={index} className='w-full text-slate-800 cursor-pointer p-4 hover:bg-zinc-50 active:bg-zinc-100'>
                        <a href={link.url}
                           className='w-full text-zinc-800'>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        );

        let horizontalButtons = (
            <div className='header-buttons'>
                <button onClick={this.showDropDownHandler} type="button" aria-expanded="false"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                                hover:text-white hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset
                                 focus:ring-gray-400
                                 block lg:hidden
                                 ">
                    <HeroIcon.MenuIcon className="h-6 w-6 text-zinc-900"/>
                </button>
                <button
                    className='button h-12 w-24 duration-200 bg-slate-100 hidden lg:block
                            focus:bg-slate-200
                            focus:ring-2 focus:ring focus:ring-slate-300'
                    onClick={this.signInButtonClickHandler}
                >sign in
                </button>
                <button
                    className='button h-12 w-24 duration-200 bg-slate-800 text-white rounded-sm hidden lg:block
                            hover:bg-slate-700
                            focus:bg-slate-900
                            focus:ring-2 focus:ring focus:ring-slate-400'
                    onClick={this.signUpButtonClickHandler}>
                    sign up
                </button>
            </div>
        );

        return (
            <header className='relative z-10'>
                <div className='w-full bg-white py-3 px-8 flex gap-10 shadow-sm relative md:py-4'>
                    <div className='logo flex items-center justify-between flex-grow md:flex-grow-0'>
                        <div className='text-2xl font-bold'>Cobit<span className='text-orange-500'>.</span>Hub</div>
                    </div>

                    <div className='links flex-grow hidden md:block'>
                        {horizontalLinks}
                    </div>
                    {horizontalButtons}

                </div>
                <div className= { this.state.showTopbar ? 'w-full bg-white p-4 shadow-md rounded-sm overflow-hidden absolute lg:hidden' : 'hidden'} >
                    {verticalLinks}
                </div>
            </header>
        )
    }
}

export default Header