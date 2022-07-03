import React, { useCallback, useEffect, useMemo } from "react";
import { toast, ToastContainer } from "react-toastify";

const Toast = (props) => {
    const { id, text, type, duration, visible, _setToastVisibility } = props;
    const fn = props.children;
    const toastId = React.useRef();

    let { limit } = props;
    limit = limit ? limit : 1;

    const defaultConfig = useMemo(() => {
        return {
            toastId: id ? id : "toast",
            position: toast.POSITION.TOP_CENTER,
            key: "1",
            onClose: () => {
                toast.dismiss()
                _setToastVisibility(false)
                if (fn) {
                    fn({ active: false });
                }
            },
        }
    }, [_setToastVisibility, fn, id]);

    const showToast = useCallback(() => {
        switch (type) {
            case "Success":
                toastId.current = toast.success(text, defaultConfig);
                break;
            case "Info":
                toastId.current = toast.info(text, defaultConfig);
                break;
            case "Warning":
                toastId.current = toast.warning(text, defaultConfig);
                break;
            case "Error":
                toastId.current = toast.error(text, defaultConfig);
                break;
            default:
                return ''
        }
    }, [type, defaultConfig, text]);

    const RenderToast = useMemo(() => () => {
        if (fn) {
            fn({ active: true });
        }

        return (
            <div className={"absolute px-10 left-0 top-[0px] w-full z-1000"}>
                <ToastContainer
                    className="absolute w-full"
                    toastClassName="my-20 mt-0 md:my-0 md:mt-0 top-0"
                    autoClose={duration}
                    limit={limit}
                    closeOnClick={true}
                />
            </div>
        );
    }, [duration, fn, limit]);

    useEffect(() => {
        if (visible) {
            showToast();
        }

        return () => {
            toast.dismiss();
        };
    }, [visible, showToast]);

    return <>{visible ? <RenderToast /> : null}</>;
};

export default React.memo(Toast);
