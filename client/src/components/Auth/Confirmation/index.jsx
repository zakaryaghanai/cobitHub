// eslint-disable

import React, { useState, lazy, Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Loading from "./Loading";

function ConfirmAccount() {
    const { code } = useParams();
    const { confirmAccount } = useAuth();

    const Success = lazy(() => import("./Success"));
    const Error = lazy(() => import("./Error"));
    const Info = lazy(() => import("./Info"));
    const Confirmed = lazy(() => import("./Confirmed"));

    const [toRender, setToRender] = useState(<Loading />);

    useEffect(() => {
        if (code) {
            setTimeout(() => {
                confirmAccount(code)
                    .then((res) => {
                        if (res.data.statusCode === 1) {
                            setToRender(<Error />);
                        }

                        if (res.data.statusCode === 2) {
                            setToRender(<Confirmed />);
                        }

                        if (res.data.statusCode === 3) {
                            setToRender(<Info />);
                        }

                        if (res.data.statusCode === 4) {
                            setToRender(<Success tempalteData={res.data} />);
                        }

                        if (res.data.statusCode === 5) {
                            setToRender(<Error />);
                        }
                    })
                    .catch((err) => {});
            }, 2000);
        }
    }, [code, confirmAccount]);

    return (
        <div className="relative w-full h-full">
            <Suspense fallback={<Loading />}>{toRender}</Suspense>
        </div>
    );
}

export default ConfirmAccount;
