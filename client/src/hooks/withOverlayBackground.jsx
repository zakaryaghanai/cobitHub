import React from "react";

const withOverlayBackground = (Component) => (props) => {
    return (
        <React.Fragment>
            <div className="relative h-full">
                <div className="absolute top-0 w-full h-full">
                    <img
                        className=" bg-center bg-no-repeat w-full h-full"
                        src={require("../assets/images/cover.jpg")}
                        alt=""
                    />
                    <div className="absolute bg-white/[95%] backdrop-blur-3xl top-0 w-full h-full" />
                    {/* <div className='absolute bg-white/30 top-0 w-full h-full'/> */}
                </div>
                <Component {...props} />
            </div>
        </React.Fragment>
    );
};

export default withOverlayBackground;
