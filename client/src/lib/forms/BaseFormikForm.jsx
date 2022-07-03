import React from "react";
import { Formik, ErrorMessage, FastField, Field } from "formik";
import { Checkbox } from "antd";

const InputField = (props) => {
    let { icon, formik, ...rest } = props;
    icon = icon ? React.createElement(icon, { className: "icon" }) : null;

    return (
        <div className="mb-4">
            <div className={"custom-input group "} disabled={props.disabled}>
                <label htmlFor={props.name}>{props.label}</label>
                <div className="flex items-center">
                    {icon}
                    <FastField
                        {...rest}
                        className={
                            formik.touched[props.name] &&
                            formik.errors[props.name]
                                ? "invalid-feedback"
                                : ""
                        }
                    />
                </div>
            </div>
            <ErrorMessage
                className="validation-error mt-1 mb-0"
                name={props.name}
                component="div"
            />
        </div>
    );
};

const CustomAntdCheckbox = (props) => {
    return (
        <Checkbox
            checked={props.field.checked}
            onChange={props.field.onChange}
            name={props.field.name}
            value={props.field.checked}
            style={{ backgroundColor: "red !important" }}
            className="stroke-red-500"
            disabled={props.disabled}
        >
            <span className="select-none">{props.text}</span>
        </Checkbox>
    );
};

const CheckBoxField = (props) => {
    return (
        <div className="">
            <Field
                type="checkbox"
                name={props.name}
                className=""
                text={props.text}
                component={CustomAntdCheckbox}
            />
            <ErrorMessage
                className="validation-error mt-1 mb-0"
                name={props.name}
                component="div"
            />
        </div>
    );
};

const BaseFormikForm = (props) => (
    <Formik
        initialValues={props.initialValues}
        validate={props.validators}
        onSubmit={props.onSubmit}
    >
        {props.children}
    </Formik>
);

export { BaseFormikForm, InputField, CheckBoxField };
