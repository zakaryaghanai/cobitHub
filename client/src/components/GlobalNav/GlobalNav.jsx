import {React, Component} from "react";

import * as HeroIcon  from '@heroicons/react/outline'
import { Link } from "react-router-dom";

import './GlobalNav.scss';

class GlobalNav extends Component {

    state = {
        links: [
            {name: 'Blog', to: 'blog'},
            {name: 'Join', to: 'auth/signup'}
        ],
        showTopbar: false,
    }


    signUpButtonClickHandler = () => {
        if(this.props.signUpButtonClickHandler) {
            this.props.signUpButtonClickHandler()

            return
        }
        alert('attach your sign up handler by passing function reference to signUpButtonClickHandler property')
    }

    toggleNavbarDropDownHandler = () =>  {
        this.setState({
            showTopbar: !this.state.showTopbar
        })
    }

    hideDropDownHandler = () =>  {
        this.setState({
            showTopbar: false
        })
    }

    render() {

        let horizontalLinks = (
            <ul className='items flex gap-10 h-full items-center'>
                {this.state.links.map((link, index) => (
                    <Link key={index} to={link.to} className='item text-slate-900'>
                        <span  className='w-full text-zinc-800 hover:underline hover:decoration-2'> {link.name} </span>
                    </Link>
                ))}
            </ul>
        );

        let verticalLinks = (
            <ul className='items flex flex-col h-full items-start md:hidden'>
                {this.state.links.map((link, index) => (
                    <Link onClick={this.hideDropDownHandler} key={index} to={link.to} className='w-full text-slate-800 cursor-pointer p-4 hover:bg-zinc-50 active:bg-zinc-100'>
                        <span  className='w-full text-zinc-800'> {link.name} </span>
                    </Link>
                ))}
            </ul>
        );

        let headerButtons = (
            <div className='header-buttons'>
                <button type="button" aria-expanded="false"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                                hover:text-white hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset
                                 focus:ring-gray-400
                                 block md:hidden"
                        onClick={this.toggleNavbarDropDownHandler}>
                    <HeroIcon.MenuIcon className="h-6 w-6 text-zinc-900"/>
                </button>
                <Link to='auth/signin'>
                    <button
                        className='button h-12 w-24 duration-300 bg-white hidden lg:block
                            hover:bg-slate-50
                            focus:bg-slate-200
                            focus:ring-2 focus:ring focus:ring-slate-300'>
                        sign in
                    </button>
                </Link>
                <Link to='auth/signup'>
                    <button
                        className='button h-12 w-24 duration-300 bg-sky-800 text-white rounded-sm hidden lg:block
                            hover:bg-sky-700
                            focus:bg-sky-900
                            focus:ring-2 focus:ring focus:ring-sky-200'>
                        sign up
                    </button>
                </Link>

            </div>
        );

        return (
            <header className='relative z-10'>
                <div className='w-full bg-white py-4 px-8 flex gap-10 shadow-sm relative'>
                    <div className='logo flex items-center justify-between flex-grow md:flex-grow-0'>
                        <Link to='/'>
                            <div className='text-2xl font-bold text-slate-700'>Cobit<span className='text-orange-500'>.</span>Hub</div>
                        </Link>
                    </div>

                    <div className='links flex-grow hidden md:block'>
                        {horizontalLinks}
                    </div>
                    {headerButtons}

                </div>
                <div className= { this.state.showTopbar ? 'w-full bg-white p-4 shadow-md rounded-sm overflow-hidden absolute lg:hidden' : 'hidden'} >
                    {verticalLinks}
                </div>
            </header>
        )
    }
}

export default GlobalNav