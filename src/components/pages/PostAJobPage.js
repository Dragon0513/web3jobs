import { useState, useEffect } from "react";
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const PostAJobPage = () => {

    const formikForm = () => {
        return (
            // TODO: add validation for application email
            <Formik
                initialValues={{
                    contactEmail: '',
                    companyName: '',
                    jobTitle: '',
                    description: '',
                    applicationURL: '',
                }}
                validationSchema={Yup.object({
                    contactEmail: Yup.string().email('Invalid email address').required('Required'),
                    companyName: Yup.string().required('Company name Required'),
                    jobTitle: Yup.string().required('Job title Required'),
                    description: Yup.string().min(20, 'That\'s a pretty short description, dont you think 🤔?').required('Description Required'),
                    applicationURL: Yup.string().required('Application URL Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <MyTextInput
                        label="Your Email"
                        name="contactEmail"
                        type="email"
                    />

                    <MyTextInput
                        label="Company name"
                        name="companyName"
                        type="text"
                    />

                    <MyTextInput
                        label="Job title"
                        name="jobTitle"
                        type="text"
                    />

                    <MyTextInput
                        label="Job description"
                        name="description"
                        type="text"
                    />

                    <MyTextInput
                        label="Apply URL (or email)"
                        name="applicationURL"
                        type="text"
                    />

                    <button type="submit">Post your job</button>
                </Form>
            </Formik>
        );
    }

    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className={"w-screen fixed flex flex-col min-h-screen bg-gray-500"}>
                <header
                    className={
                        "flex justify-between items-center px-4 h-16 bg-gray-900"
                    }
                >
                    <span
                        className={
                            "text-2xl sm:text-4xl text-white border-b font-sans"
                        }
                    >
                        Post A Job
                    </span>
                </header>
                <div>
                    {formikForm()}
                </div>
            </div>
        </div>
    );
};

export default PostAJobPage;