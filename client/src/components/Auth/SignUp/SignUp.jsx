import SignTemplate from "../SignTemplate";
import useAuth from "../../../hooks/useAuth";
import { memo } from "react";
import SignUpForm from "./Form";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const { signup } = useAuth();
    const navigate = useNavigate();
    function handleSubmit(data) {
        return new Promise((resolve, reject) => {
            signup(data)
                .then(() => navigate("/auth/signin"))
                .catch(() => {
                    reject({ message: "email already exists" });
                });
        });
    }

    return (
        <SignTemplate>
            <SignUpForm _handleSubmit={handleSubmit} />
        </SignTemplate>
    );
};

export default memo(Index);
