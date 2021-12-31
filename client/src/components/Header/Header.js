import {React, Component} from "react";

import './Header.css';
import * as HeroIcon  from '@heroicons/react/outline'

class Header extends Component {
    signInButtonClickHandler = () => {
        alert('attach your sign up handler by passing function reference to signInButtonClickHandler property')
    }

    signUpButtonClickHandler = () => {
        alert('attach your sign up handler by passing function reference to signUpButtonClickHandler property')
    }

    state = {
        links: [
            {name: 'Blog', url: '#'},
            {name: 'Join', url: '#'}
        ],
        showTopbar: false,
        signInButtonClickHandler: this.props.signInButtonClickHandler ? this.props.signInButtonClickHandler : this.signInButtonClickHandler,
        signUpButtonClickHandler: this.props.signUpButtonClickHandler ? this.props.signUpButtonClickHandler : this.signUpButtonClickHandler,
    }


    showDropDownHandler = () =>  {
        this.setState({
            showTopbar: !this.state.showTopbar
        })
    }

    render() {
        return (
            <header className=''>
                <div className='w-full bg-white py-3 px-8 flex gap-10 shadow-sm relative md:py-4'>
                    <div className='logo flex items-center justify-between flex-grow md:flex-grow-0'>
                        <div className='text-xl'>Cobit.Hub</div>
                    </div>

                    <div className='links flex-grow hidden md:block'>
                        <ul className='items flex gap-10 h-full items-center'>
                            {this.state.links.map((link) => (
                                <li key={link.name + '_'} className='item'>
                                    <a href={link.url}
                                       className='hover:underline hover:decoration-2'>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
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
                            onClick={this.state.signInButtonClickHandler}
                        >sign in
                        </button>
                        <button
                            className='button h-12 w-24 duration-200 bg-slate-700 text-white rounded-sm hidden lg:block
                            hover:bg-slate-700
                            focus:bg-slate-800
                            focus:ring-2 focus:ring focus:ring-slate-400'
                            onClick={this.state.signUpButtonClickHandler}>
                            sign up
                        </button>
                    </div>

                </div>
                <div className= { this.state.showTopbar ? 'bg-white p-4 shadow-md rounded-sm overflow-hidden lg:hidden' : 'hidden'} >
                    <ul className='items flex flex-col h-full items-start md:hidden'>
                        {this.state.links.map((link, index) => (
                            <li key={link.title} className='w-full cursor-pointer p-4 hover:bg-zinc-50 active:bg-zinc-100'>
                                <a href={link.url}
                                   className='w-full text-zinc-800'>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className='flex gap-3 justify-end pt-4'>
                        <button
                            className='button h-12 w-24 duration-200 bg-slate-100 lg:hidden
                            focus:bg-slate-200
                            focus:ring-2 focus:ring focus:ring-slate-300'
                        >sign in
                        </button>
                        <button
                            className='button h-12 w-24 duration-200 bg-slate-800 text-white rounded-sm lg:hidden
                            hover:bg-slate-700
                            focus:bg-slate-800
                            focus:ring-2 focus:ring focus:ring-slate-400'>sign up
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header