import {ArrowLeftIcon, CheckIcon, XIcon, InformationCircleIcon} from "@heroicons/react/outline";
import {Link} from "react-router-dom";
import React from "react";

function ConfirmationTemplate(props) {

    const title = props.title ?? 'Title';
    const content = props.content ?? 'Content';

    let styles = {
        bg: ' bg-emerald-400/[2%] ',
        title: ' text-emerald-900/60 ',
        border: ' border-emerald-600/20 ',
        icon: {
            type: CheckIcon,
            bg: ' bg-emerald-100 ',
            color: ' text-emerald-900/40 '
        }
    }

    if (props.status === 'warning') {
        styles = {
            bg: ' bg-red-400/[5%] ',
            title: ' text-red-900/80 ',
            border: ' border-red-600/20 ',
            icon: {
                type: XIcon,
                bg: ' bg-red-100/70 ',
                color: ' text-red-900/50 '
            }
        }
    }

    if (props.status === 'info') {
        styles = {
            bg: ' bg-amber-500/[5%] ',
            title: ' text-amber-900 ',
            border: ' border-amber-600/20 ',
            icon: {
                type: InformationCircleIcon,
                bg: ' bg-amber-500/10 ',
                color: ' text-amber-900/60 '
            }
        }
    }

    return(
        <div className='h-full w-full flex flex-col items-center p-2 md:p-10 '>
            <div className={'md:w-[600px] flex flex-col rounded p-7 border-solid border-[3px]' + styles.bg + styles.border}>
                <div className={'h-[max-content]flex flex-col gap-5 items-center '}>
                    <div className='w-full flex flex-col gap-5'>
                        <div className='w-full flex items-center justify-center'>
                            <styles.icon.type
                                className={styles.icon.bg + styles.icon.color +
                                    'w-[100px] h-[100px] rounded-full p-6'}/>
                        </div>
                        <p className={'text-xl text-center w-full ' + styles.title}>{title}</p>
                    </div>
                    <div className='text-slate-600 w-full'>
                        {content}
                        <div className='md:text-lg text-center'>
                            <p className='leading-10 pt-1'>The <b>CobitHub</b> team 👋</p>
                        </div>
                    </div>
                </div>
                <Link to='/auth/signin' className='w-[max-content]'>
                    <div className={'flex gap-2 mt-5' + styles.title}>
                        <p>Back to sign in Page</p>
                        <ArrowLeftIcon width='20'/>
                    </div>
                </Link>
            </div>
        </div>
    )
}


export default ConfirmationTemplate;