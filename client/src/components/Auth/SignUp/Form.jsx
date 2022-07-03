import React, { useState } from "react";
import isEmail from "../../../Validators/isEmail";
import { Form } from "formik";
import * as HeroIcon from "@heroicons/react/outline";
import { BaseFormikForm, InputField } from "../../../lib/forms/BaseFormikForm";
import { Link } from "react-router-dom";
import AuthSocial from "../AuthSocial";
import Toast from "../../Toast";

const SignupForm = (props) => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    };

    const [toastText, setToastText] = useState("");
    const [toastType, setToastType] = useState(null);
    const [visible, setVisible] = useState(null);

    const validators = (values) => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = "Required";
        } else if (values.firstName.length < 3) {
            errors.firstName = "First Name Should be more then 3 letters";
        }

        if (!values.lastName) {
            errors.lastName = "Required";
        } else if (values.lastName.length < 3) {
            errors.lastName = "Last Name Should be more then 3 letters";
        }

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
            setToastText(err.message);
            setToastType("Error");
            setVisible(true);
            setSubmitting(false);
        });
    };

    return (
        <div className='relative'>
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
                        <Form className="flex flex-col gap-2">
                            <div className="card">
                                <InputField
                                    type="text"
                                    name="firstName"
                                    placeholder="John"
                                    label="First ame"
                                    icon={HeroIcon.UserIcon}
                                    formik={formik}
                                />
                                <InputField
                                    type="text"
                                    name="lastName"
                                    placeholder="Doe"
                                    label="Last Name"
                                    icon={HeroIcon.UserIcon}
                                    formik={formik}
                                />
                                <InputField
                                    type="email"
                                    name="email"
                                    placeholder="mail@website.com"
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
                                <button
                                    className="btn btn-primary w-full"
                                    type="submit"
                                    disabled={disableSubmit}
                                >
                                    Sign in
                                </button>

                                <AuthSocial />

                                <Link to="/auth/signin">
                                    <div className="text-sm flex gap-2 pt-3 justify-center">
                                        <span className="text-slate-500">
                                            Already have and account?
                                        </span>
                                        <span className="font-bold text-zinc-700 cursor-pointer hover:text-primary ">
                                            Sign in
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

export default SignupForm;
