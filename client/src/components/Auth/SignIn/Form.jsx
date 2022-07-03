import React, { useState } from "react";
import isEmail from "../../../Validators/isEmail";
import { Form } from "formik";
import * as HeroIcon from "@heroicons/react/outline";
import {
    BaseFormikForm,
    InputField,
    CheckBoxField,
} from "../../../lib/forms/BaseFormikForm";
import { Link } from "react-router-dom";
import AuthSocial from "../AuthSocial";
import Toast from "../../Toast";

const SignInForm = (props) => {
    const initialValues = { email: "", password: "", rememberMe: "" };
    const [toastText, setToastText] = useState("");
    const [toastType, setToastType] = useState(null);
    const [visible, setVisible] = useState(null);

    const validators = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = "Required";
        } else if (!isEmail(values.email)) {
            errors.email = "Invalid email address";
        }
        if (!values.password) {
            errors.password = "Required";
        } else if (values.password.length < 8) {
            errors.password = "must be greater then 8 characters";
        }

        return errors;
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);

        await props._handleSubmit(values).catch((err) => {
            setSubmitting(false);
            setToastText(err.message);
            setToastType("Error");
            setVisible(true);
        });
    };

    return (
        <div className="relative">
            <Toast
                text={toastText}
                type={toastType}
                id="sign"
                duration="3000"
                visible={visible}
                _setToastVisibility={setVisible}
            />

            <BaseFormikForm
                initialValues={initialValues}
                validators={validators}
                onSubmit={handleSubmit}
            >
                {(formik) => {
                    let disableSubmit =
                        formik.isSubmitting ||
                        Object.keys(formik.errors).length > 0;

                    return (
                        <Form className="relative flex flex-col gap-2">
                            <div className="card">
                                <InputField
                                    type="email"
                                    name="email"
                                    placeholder="email@domain.xyz"
                                    label="Email"
                                    icon={HeroIcon.AtSymbolIcon}
                                    formik={formik}
                                />
                                <InputField
                                    type="password"
                                    name="password"
                                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                                    label="Password"
                                    icon={HeroIcon.LockClosedIcon}
                                    formik={formik}
                                />

                                <div className="flex text-text-primary items-center justify-between text-sm mb-6">
                                    <div className="flex items-center gap-2 ">
                                        <CheckBoxField
                                            type="checkbox"
                                            name="rememberMe"
                                            text="Remember me"
                                        />
                                    </div>
                                    <Link to="/auth/forgetpassword">
                                        <span className="cursor-pointer hover:text-primary font-bold">
                                            Forget password
                                        </span>
                                    </Link>
                                </div>
                                <button
                                    className="btn btn-primary w-full"
                                    type="submit"
                                    disabled={disableSubmit}
                                >
                                    Sign in
                                </button>

                                <AuthSocial />

                                <Link to="/auth/signup">
                                    <div className="text-sm flex justify-center gap-2 pt-3">
                                        <span className="text-slate-500">
                                            Don't have and account?
                                        </span>
                                        <span className="font-bold text-zinc-700 cursor-pointer hover:text-primary">
                                            Sign up for free
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </Form>
                    );
                }}
            </BaseFormikForm>
        </div>
    );
};

export default React.memo(SignInForm);
