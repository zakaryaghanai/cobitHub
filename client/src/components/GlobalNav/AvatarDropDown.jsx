import {Dropdown} from "antd";
import * as HeroIcon from '@heroicons/react/outline'
import useAuth from '../../hooks/useAuth'
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import useDomClick from "../../hooks/useDomClick";

const dropDownMenu = ({handleSignOut}) => {

    return (
        <div className='avatarDropDownItem hidden md:block relative top-3 bg-white w-[max-content] flex flex-col divide-y divide-zinc-100
        shadow-md rounded-sm'>
            <div className='flex gap-3 items-center p-4'>
                <div className='w-14 h-14 border-0 rounded-full overflow-hidden'>
                    <img className='w-full h-full border-0 bg-center bg-cover'
                         style={{'backgroundImage': `url(${require("../../assets/images/profile.jpg")})`}}
                         alt=''/>
                </div>
                <div className='flex flex-col'>
                    <span className='font-extrabold text-[16px]'>Zakarya Ghanai</span>
                    <span>Full-stack Developer</span>
                </div>
            </div>
            <div className='flex flex-col pt-3'>
                <span className='font-extrabold text-[16px] px-4'>Account</span>
                <button className='text-slate-600 text-left py-2 px-4 hover:bg-zinc-50'>Setting & Privacy</button>
                <button className='text-slate-600 text-left py-2 px-4 hover:bg-zinc-50'>Help</button>
                <button className='text-slate-600 text-left py-2 px-4 hover:bg-zinc-50'>Language</button>
            </div>
            <div className='flex flex-col pt-3'>
                <span className='font-extrabold text-[16px] px-4'>Manage</span>
                <button className='text-slate-600 text-left py-2 px-4 hover:bg-zinc-50'>Posts & Activity</button>
            </div>
            <div className=''>
                <button onClick={handleSignOut}
                        className='text-slate-600 text-left w-full py-2 px-4 hover:bg-zinc-50 flex items-center gap-2'>
                    <span>Sign Out</span>
                    <HeroIcon.LogoutIcon className="h-5 w-5 text-zinc-900"/>
                </button>
            </div>
        </div>
    )
};

const AvatarDropDown = () => {
    const {signOut} = useAuth()
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)
    const [clickedElement] = useDomClick()
    const handleSignOut = () => {
        signOut(() => {
            navigate('/')
        })
    }

    const handleShowDropDown = () => {
        setVisible(!visible)
    }

    useEffect(() => {
        if (clickedElement) {
            let isChild = clickedElement.closest('.avatarDropDownItem')
            if (!clickedElement.classList.contains('avatarDropDown') && !isChild) {
                setVisible(false)
            }
        }
    }, [clickedElement])

    return (
        <Dropdown className='avatarDropDown' overlay={() => dropDownMenu({handleSignOut})} onClick={handleShowDropDown}
                  visible={visible}>
            <div className='cursor-pointer'>
                <div className="pointer-events-none flex flex-col gap-1 justify-center items-center">
                    <div className='cursor-pointer w-9 h-9 rounded-full overflow-hidden'>
                        <img className='w-full h-full border-0 bg-center bg-cover'
                             style={{'backgroundImage': `url(${require("../../assets/images/profile.jpg")})`}}
                             alt=''/>
                    </div>
                    <div className='pointer-events-none flex gap-[2px]'>
                        <span className='text-[12px] text-slate-700'>Me</span>
                        {visible ?
                            <HeroIcon.ChevronUpIcon className="h-4 w-4 text-slate-700"/> :
                            <HeroIcon.ChevronDownIcon className="h-4 w-4 text-slate-700"/>}
                    </div>
                </div>
            </div>
        </Dropdown>
    )
}

export default AvatarDropDown