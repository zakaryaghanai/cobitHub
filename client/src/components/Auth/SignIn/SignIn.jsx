import { memo } from "react";
import { useNavigate } from "react-router-dom";

import "antd/dist/antd.css";
import "./style.css";
import SignInForm from "./Form";
import SignTemplate from "../SignTemplate";
import useAuth from "../../../hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();

    function handleSubmit(data) {
        return new Promise((resolve, reject) => {
            signIn(data)
                .then(() => {
                    navigate("/blog");
                })
                .catch(() =>
                    reject({ message: "email or password incorrect" })
                );
        });
    }

    return (
        <SignTemplate>
            <SignInForm _handleSubmit={handleSubmit} />
        </SignTemplate>
    );
};

export default memo(SignIn);
