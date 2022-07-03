import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function Loading() {
    return (
        <div className="h-full w-full flex flex-col items-center p-2 md:p-10 lg:p-32 bg-white">
            <div className="md:w-[600px] flex flex-col">
                <div
                    className={
                        "h-[300px] flex flex-col gap-10 justify-center items-center p-10"
                    }
                >
                    <Spin
                        indicator={
                            <LoadingOutlined
                                className="text-slate-400 text-8xl"
                                spin
                            />
                        }
                    />
                    <p className="text-xl text-slate-400">Cheking ...</p>
                </div>
            </div>
        </div>
    );
}

export default Loading;
