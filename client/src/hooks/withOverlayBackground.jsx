import React from "react";

const withOverlayBackground = (Component) => (props) => {

    return (
        <React.Fragment>
            <div className='absolute top-0 w-full h-full'>
                <img className=' bg-center bg-no-repeat w-full h-full' src={require('../assets/images/cover.jpg')}
                     alt=''/>
                <div className='absolute bg-zinc-100/70 backdrop-blur-3xl top-0 w-full h-full'/>
            </div>
            <Component {...props} />
        </React.Fragment>
    )
}

export default withOverlayBackground