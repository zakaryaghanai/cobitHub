import SignTemplate from "../SignTemplate";
import useAuth from "../../../hooks/useAuth";
import { memo } from "react";
import SignUpForm from "./Form";

const Index = () => {
    const { signup } = useAuth();

    function handleSubmit(data) {
        return new Promise((resolve, reject) => {
            signup(data)
                .then(() => {})
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
