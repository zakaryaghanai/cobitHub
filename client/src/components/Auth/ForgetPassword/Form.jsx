import React from 'react'
import isEmail from "../../../Validators/isEmail";
import {Form} from "formik";
import * as HeroIcon from '@heroicons/react/outline'
import { BaseFormikForm, InputField } from '../../../lib/forms/BaseFormikForm';

const ForgetPassword = (props) => {
    const initialValues = {email: ''}
    const validators = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Required';
        } else if (!isEmail(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    const handleSubmit = (values, {setSubmitting}) => {
        props._handleSubmit(values)
        setSubmitting(false);
    }

    return (
        <BaseFormikForm
            initialValues={initialValues}
            validators={validators}
            onSubmit={handleSubmit}>
            {(formik) => {
                let disableSubmit = formik.isSubmitting || Object.keys(formik.errors).length > 0
                return (
                    <Form className='flex flex-col gap-2'>
                        <div className='card'>
                            <span className='flex text-slate-600 w-full text-md bg-sky-200/30 mb-5 text-sky-800 p-5 text-center'>
                                Enter email address associated with your account
                            </span>
                            <InputField type="email" name="email" placeholder="Email"
                                        icon={HeroIcon.AtSymbolIcon} formik={formik}/>
                            <button className='btn btn-primary w-full' type="submit" disabled={disableSubmit}>
                                Sign in
                            </button>
                        </div>
                    </Form>
                )
            }}
        </BaseFormikForm>
    )

}

export default ForgetPassword;