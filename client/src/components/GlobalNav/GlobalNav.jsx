/* eslint-disable */

import React, { useEffect, useState, useLayoutEffect, useRef } from "react";

import * as HeroIcon from '@heroicons/react/outline'
import {Link} from "react-router-dom";

import './GlobalNav.scss';

const useWindowScroll = () => {
    const [scrollValue, setsSrollValue] = useState(window.scrollY)

    const handleVerticalScroll = () => {
        setsSrollValue(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleVerticalScroll)

        return () => {
            window.removeEventListener('scroll', handleVerticalScroll)
        }
    }, [scrollValue])

    return scrollValue;
}


const getHorizontalLinks = (links) => {
    return (
        <ul className='items flex gap-10 h-full items-center'>
            {links.map((link, index) => (
                <Link key={index} to={link.to} className='item text-slate-900'>
                    <span className='w-full text-zinc-800 hover:underline hover:decoration-2'> {link.name} </span>
                </Link>
            ))}
        </ul>
    )
}

const getVertivalLinks = ({links, handleHideDropDown}) => {
    return (
        <ul className='items flex flex-col h-full items-start md:hidden'>
            {links.map((link, index) => (
                <Link onClick={handleHideDropDown} key={index} to={link.to}
                      className='w-full text-slate-800 cursor-pointer p-4 hover:bg-zinc-50 active:bg-zinc-100'>
                    <span className='w-full text-zinc-800'> {link.name} </span>
                </Link>
            ))}
        </ul>
    )
}

const GlobalNav = () => {

    let headerRef = useRef(null)

    const links = [
        {name: 'Blog', to: '/blog'},
        {name: 'Join', to: '/auth/signup'}
    ]

    let [showTopbar, setShowTopbar] = useState(false)

    const toggleNavbarDropDownHandler = () => {
        setShowTopbar(prevState => {
            return !prevState
        })
    }

    const handleHideDropDown = () => {
        setShowTopbar(false)
    }


    let horizontalLinks = getHorizontalLinks(links)

    let verticalLinks = getVertivalLinks({links, handleHideDropDown})

    let headerButtons = (
        <button type="button" aria-expanded="false"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                                hover:text-white hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset
                                 focus:ring-gray-400
                                 block md:hidden"
                onClick={toggleNavbarDropDownHandler}>
            <HeroIcon.MenuIcon className="h-6 w-6 text-zinc-900"/>
        </button>
    );

    return (
        <header className='fixed z-50' ref={headerRef}>
            <div className='w-full bg-white/60 backdrop-blur-2xl py-5 px-8 flex gap-10 shadow-sm relative'>
                <div className='logo flex items-center justify-between flex-grow md:flex-grow-0'>
                    <Link to='/'>
                        <div className='text-2xl font-bold text-slate-700'>Cobit<span
                            className='text-orange-500'>.</span>Hub
                        </div>
                    </Link>
                </div>

                <div className='links flex-grow hidden md:block'>
                    {horizontalLinks}
                </div>
                {headerButtons}

            </div>
            <div
                className={showTopbar ? 'w-full bg-white/60 backdrop-blur-2xl p-4 shadow-md rounded-sm overflow-hidden absolute md:hidden' : 'hidden'}>
                {verticalLinks}
            </div>
        </header>
    )
}

export default GlobalNav