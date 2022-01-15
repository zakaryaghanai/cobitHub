import React from 'react'

import withOverlayBackground from '../../components/Hoc/withOverlayBackground'

const NotFound = () => {
    return (
        <React.Fragment>
            <div className='h-full w-full flex items-center justify-center z-10'>
                <span className='text-2xl md:text-3xl lg:text-6xl font-bold text-slate-800'>Page Not Found</span>
            </div>
        </React.Fragment>
    )
}

export default withOverlayBackground(NotFound)