/* eslint-disable */
import React, { useState } from "react";
import * as HeroIcon from '@heroicons/react/outline'
import {Link, useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {Menu, Dropdown, Avatar} from 'antd'

import './GlobalNav.scss';

const GlobalNav = () => {

    const [showTopbar, setShowTopbar] = useState(false)
    const {isAuthenticated, signOut} = useAuth()
    const navigate = useNavigate()
    const links = [
        {name: 'Blog', to: '/blog'},
        {name: 'Join', to: '/auth/signup', show: !isAuthenticated}
    ]

    const toggleNavbarDropDownHandler = () => {
        setShowTopbar(prevState => {
            return !prevState
        })
    }

    const handleHideDropDown = () => {
        setShowTopbar(false)
    }

    const handleSingOut = () => {
        localStorage.removeItem('isAuthenticated')
        signOut(() => {
            navigate('/')
        })
    }

    const menu = (
        <Menu className='p-2'>
            <Menu.Item key="0">
                <div className='flex gap-2 text-slate-800 cursor-pointer px-2'>
                    <span className='text-zinc-800'>Settings</span>
                    <HeroIcon.CogIcon className="h-5 w-5 text-zinc-900"/>
                </div>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">
                <div onClick={handleSingOut} className='flex items-start gap-2 text-slate-800 cursor-pointer px-2'>
                    <span className='text-zinc-800'>Sign out</span>
                    <HeroIcon.LogoutIcon className="h-5 w-5 text-zinc-900"/>
                </div>
            </Menu.Item>
        </Menu>
    );


    const horizontalLinks = (
        <ul className='flex gap-10 h-full items-center'>
            <div className='flex flex-grow gap-10 h-full items-center'>
                {links.map((link, index) => {

                    if(!link.hasOwnProperty('show') || (link.hasOwnProperty('show') && link.show)) {
                        return (
                            <Link key={index} to={link.to} className='item text-slate-900'>
                                <span className='w-full text-zinc-800 hover:underline hover:decoration-2'> {link.name} </span>
                            </Link>
                        )
                    }
                })}
            </div>
            {isAuthenticated ? (
                <Dropdown overlay={menu} trigger={['click']}>
                    <div className='flex items-center '>
                        <a className="ant-dropdown-link">
                            <Avatar size={35} className='p-2 text-slate-700 bg-zinc-100' icon={<HeroIcon.UserIcon />} />
                        </a>
                    </div>
                </Dropdown>
            ): null}
        </ul>
    )

    const verticalLinks = (
        <ul className='items flex flex-col h-full items-start md:hidden'>
            {links.map((link, index) => {

                if(!link.hasOwnProperty('show') || (link.hasOwnProperty('show') && link.show)) {
                    return (
                        <Link onClick={handleHideDropDown} key={index} to={link.to}
                              className='w-full text-slate-800 cursor-pointer p-4 hover:bg-zinc-50 active:bg-zinc-100'>
                            <span className='w-full text-zinc-800'> {link.name} </span>
                        </Link>
                    )
                }
            })}
            {isAuthenticated ? (
                <div onClick={handleSingOut} className='w-full flex gap-2 text-slate-800 cursor-pointer p-4 hover:bg-zinc-50 active:bg-zinc-100'>
                    <span className='text-zinc-800'>Sign out</span>
                    <HeroIcon.LogoutIcon className="h-5 w-5 text-zinc-900"/>
                </div>
            ): null}

        </ul>
    )

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
        <header className='fixed z-50'>
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