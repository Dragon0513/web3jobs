import { useState, Fragment } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/outline';
import { MailIcon } from '@heroicons/react/solid';
import { Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'

import PageContainer from "../PageContainer";
import { postAJob } from "@db/";
import {
    TIER_FREE,
    TIER_POPULAR,
    TIER_SPENCY
} from "@constants/";
import { getLinkCard } from "@util/genLinkCard";

const freeFeatures = [
    'Job listed on the site',
    'Company added to the site'
];

const mostPopular = [
    '👈 Everything in free',
    'Job featured for 1️⃣ week',
    'Primo real estate in 1️⃣ newsletter 👀',
    'Company featured for 1️⃣ week!',
];

const spencyFeatures = [
    '👈 Everything here for 4️⃣ weeks!!',
    'Podcast 🎙 && post on our blog 💪'
];

const buttonStyles = {
    notSelected: "block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50",
    selected: "block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700",
}

const selectedButton = () => {
    return (
        <div className="flex items-start">
            <div className="flex-shrink-0">
                <CheckIcon className="flex-shrink-0 lg:h-10 h-8 w-10 text-green-500" aria-hidden="true" />
            </div>
            <p className="lg:text-3xl text-2xl text-center flex-grow font-medium dark:text-white text-white">Selected</p>
        </div>
    );
}

const paymentOptions = formik => {
    return (
        <div className="sm:col-span-6 lg:py-5">
            <div className="relative lg:grid lg:grid-cols-7">
                <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                    <div className="h-full flex flex-col rounded-lg shadow-2xl overflow-hidden lg:rounded-none lg:rounded-l-lg">
                        <div className="flex-1 flex flex-col">
                            <div className="bg-white px-6 py-10">
                                <div>
                                    <div className="mt-4 flex items-center justify-center">
                                        <span className="px-3 flex items-start text-5xl tracking-tight text-gray-900">
                                            <span className="font-extrabold lg:text-6xl">Free!</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-light p-6 bg-gray-lightest sm:p-10 lg:p-6 xl:p-10">
                                <ul className="space-y-4">
                                    {freeFeatures.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <div className="flex-shrink-0">
                                                <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                                            </div>
                                            <p className="ml-3 text-base font-medium text-white">{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <div className="rounded-lg shadow-md">
                                        <button
                                            className={`${formik.values.priceSelection === TIER_FREE ? buttonStyles.selected : buttonStyles.notSelected}`}
                                            aria-describedby="tier-hobby"
                                            onClick={() => updatePriceTier(formik.setFieldValue, TIER_FREE)}
                                        >
                                            {formik.values.priceSelection === TIER_FREE ? selectedButton() : "Select"}
                                        </button >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                    <div className="relative z-10 rounded-lg shadow-xl">
                        <div
                            className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"
                            aria-hidden="true"
                        />
                        <div className="absolute inset-x-0 top-0 transform translate-y-px">
                            <div className="flex justify-center transform -translate-y-1/2">
                                <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                                    Most popular
                                </span>
                            </div>
                        </div>
                        <div className="bg-green-200 bg-opacity-85 rounded-t-lg px-6 pt-12 pb-10">
                            <div>
                                <div className="mt-4 flex items-center justify-center">
                                    <span className="px-3 flex items-start tracking-tight text-gray-900 sm:text-6xl">
                                        <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                                        <span className="text-7xl lg:text-9xl font-extrabold">299</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-b-lg pt-10 pb-8 px-6 bg-green-300 sm:px-10 sm:py-10">
                            <ul className="space-y-4">
                                {mostPopular.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                                        </div>
                                        <p className="ml-3 text-base text-lg lg:text-xl font-medium text-black-500">{feature}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10">
                                <div className="rounded-lg shadow-md">
                                    <button
                                        className={`${formik.values.priceSelection === TIER_POPULAR ? buttonStyles.selected : buttonStyles.notSelected}`}
                                        aria-describedby="tier-hobby"
                                        onClick={() => updatePriceTier(formik.setFieldValue, TIER_POPULAR)}
                                    >
                                        {formik.values.priceSelection === TIER_POPULAR ? selectedButton() : "Select"}
                                    </button >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                    <div className="h-full flex flex-col rounded-lg shadow-2xl overflow-hidden lg:rounded-none lg:rounded-r-lg">
                        <div className="flex-1 flex flex-col">
                            <div className="bg-white px-6 py-10">
                                <div>
                                    <div className="mt-4 flex items-center justify-center">
                                        <span className="px-3 flex items-start text-5xl tracking-tight text-gray-900">
                                            <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                                            <span className="lg:text-6xl font-extrabold">499</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-light p-6 bg-gray-lightest sm:p-10 lg:p-6 xl:p-10">
                                <ul className="space-y-4">
                                    {spencyFeatures.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <div className="flex-shrink-0">
                                                <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                                            </div>
                                            <p className="ml-3 text-base font-medium text-white">{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <div className="rounded-lg shadow-md">
                                        <button
                                            className={`${formik.values.priceSelection === TIER_SPENCY ? buttonStyles.selected : buttonStyles.notSelected}`}
                                            aria-describedby="tier-hobby"
                                            onClick={() => updatePriceTier(formik.setFieldValue, TIER_SPENCY)}
                                        >
                                            {formik.values.priceSelection === TIER_SPENCY ? selectedButton() : "Select"}
                                        </button >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const updatePriceTier = (setFieldValue, value) => {
    setFieldValue("priceSelection", value);
}

const popOver = (show, setShow) => {
    return (
        <>
            {/* Global notification live region, render this permanently at the end of the document */}
            <div
                aria-live="assertive"
                className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
            >
                <div className="w-full flex flex-col items-center space-y-4 lg:mt-20 sm:items-end">
                    {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                    <Transition
                        show={show}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p className="text-sm font-medium text-gray-900">Successfully submitted!</p>
                                        <p className="mt-1 text-sm text-gray-500">We will follow up within 24 hours</p>
                                    </div>
                                    <div className="ml-4 flex-shrink-0 flex">
                                        <button
                                            className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            onClick={() => {
                                                setShow(false)
                                            }}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XIcon className="h-5 w-5" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </>
    )
}

const imageURL = "https://yhsyqsnormpfxbbippdb.supabase.in/storage/v1/object/public/assets/heroimage.svg";

const headerInfo = {
    title: "Web3J☁bs Post A Job",
    imageURL,
    description: "Looking to hire some of the best web3 engineers? Post a job on the #1 Web3J☁b Board!"
}

const PostAJobPage = () => {
    const [show, setShow] = useState(false)

    const putDataIntoDB = async jobData => {
        const { data: job, error } = await postAJob(jobData)
        if (!error) setShow(true)
    }

    const getContent = formik => {
        return (
            <div>
                {getLinkCard(headerInfo)}
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <div className="pb-8">
                            <h3 className="text-5xl lg:text-6xl leading-tight font-medium dark:text-white text-gray">The first step to your next hire 👇</h3>
                            <p className="mt-6 text-2xl lg:text-3xl dark:text-white text-gray-500">
                                It will only take 2 minutes ⏳
                            </p>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-6">
                                <label htmlFor="contactEmail" className="pb-1 lg:pb-3 block text-lg lg:text-3xl md:text-2xl font-medium dark:text-white text-gray-700">
                                    Company Email
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <MailIcon className="h-7 w-7 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="contactEmail"
                                        name="contactEmail"
                                        type="email"
                                        autoComplete="email"
                                        className={`${formik.touched.contactEmail && formik.errors.contactEmail ? "border-4 border-red-500" : ""} lg:h-14 md:h-12 flex-1 pl-10 lg:pl-12 focus:ring-indigo-500 md:text-xl focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-md sm:text-sm`}
                                        aria-invalid="true"
                                        aria-describedby="email-error"
                                        {...formik.getFieldProps('contactEmail')}
                                    />
                                    {formik.touched.contactEmail && formik.errors.contactEmail ? (
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <ExclamationCircleIcon className="h-5 w-5 lg:h-7 lg:w-7 text-red-500" aria-hidden="true" />
                                        </div>
                                    ) : null}
                                </div>
                                {formik.touched.contactEmail && formik.errors.contactEmail ? (
                                    <p className="mt-2 text-lg text-white" id="email-error">
                                        {formik.errors.contactEmail}
                                    </p>
                                ) : null}
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="companyName" className="pb-1 lg:pb-3 block text-lg lg:text-3xl md:text-2xl font-medium dark:text-white text-gray-700">
                                    Company Name
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        id="companyName"
                                        name="companyName"
                                        type="text"
                                        autoComplete="organization"
                                        className={`${formik.touched.companyName && formik.errors.companyName ? "border-4 border-red-500" : ""} lg:h-14 md:h-12 flex-1 focus:ring-indigo-500 md:text-xl focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-md sm:text-sm`}
                                        {...formik.getFieldProps('companyName')}
                                    />
                                    {formik.touched.companyName && formik.errors.companyName ? (
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <ExclamationCircleIcon className="h-5 w-5 lg:h-7 lg:w-7 text-red-500" aria-hidden="true" />
                                        </div>
                                    ) : null}
                                </div>
                                {formik.touched.companyName && formik.errors.companyName ? (
                                    <p className="mt-2 text-lg text-white" id="email-error">
                                        {formik.errors.companyName}
                                    </p>
                                ) : null}
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="jobTitle" className="pb-1 lg:pb-3 block text-lg lg:text-3xl md:text-2xl font-medium dark:text-white text-gray-700">
                                    Job Title
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        id="jobTitle"
                                        name="jobTitle"
                                        type="text"
                                        placeholder="i.e. Senior Solidity Engineer"
                                        className={`${formik.touched.jobTitle && formik.errors.jobTitle ? "border-4 border-red-500" : ""} lg:h-14 md:h-12 flex-1 focus:ring-indigo-500 md:text-xl focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-md sm:text-sm border-gray-300`}
                                        {...formik.getFieldProps('jobTitle')}
                                    />
                                    {formik.touched.jobTitle && formik.errors.jobTitle ? (
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <ExclamationCircleIcon className="h-5 w-5 lg:h-7 lg:w-7 text-red-500" aria-hidden="true" />
                                        </div>
                                    ) : null}
                                </div>
                                {formik.touched.jobTitle && formik.errors.jobTitle ? (
                                    <p className="mt-2 text-lg text-white" id="email-error">
                                        {formik.errors.jobTitle}
                                    </p>
                                ) : null}
                            </div>

                            {paymentOptions(formik)}

                            <div className="sm:col-span-6">
                                <label htmlFor="description" className="pb-1 lg:pb-3 block text-lg lg:text-3xl md:text-2xl font-medium dark:text-white text-gray-700">
                                    Job Description
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={10}
                                        placeholder="Describe the role - please use markdown formatting 🤙"
                                        className={`${formik.touched.description && formik.errors.description ? "border-4 border-red-500" : ""} flex-1 focus:ring-indigo-500 focus:border-indigo-500 md:text-xl block w-full min-w-0 rounded-none rounded-md sm:text-sm border-gray-300`}
                                        {...formik.getFieldProps('description')}
                                    />
                                    {formik.touched.description && formik.errors.description ? (
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <ExclamationCircleIcon className="h-5 w-5 lg:h-7 lg:w-7 text-red-500" aria-hidden="true" />
                                        </div>
                                    ) : null}
                                </div>
                                {formik.touched.description && formik.errors.description ? (
                                    <p className="mt-2 text-lg text-white" id="email-error">
                                        {formik.errors.description}
                                    </p>
                                ) : null}
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="application url" className="pb-1 lg:pb-3 block text-lg lg:text-3xl md:text-2xl font-medium dark:text-white text-gray-700">
                                    Apply URL
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <span className="inline-flex items-center px-3 rounded-l-md md:text-xl border border-r-0 border-white bg-gray-lightest dark:text-white sm:text-sm">
                                        https://
                                    </span>
                                    <input
                                        id="applicationURL"
                                        name="applicationURL"
                                        type="text"
                                        placeholder="i.e. company.com/careers/apply"
                                        className={`${formik.touched.applicationURL && formik.errors.applicationURL ? "border-t-4 border-l-4 border-b-4 border-red-500" : ""} lg:h-14 md:h-12 flex-1 focus:ring-indigo-500 md:text-xl focus:border-indigo-500 block w-full min-w-0 rounded-none sm:text-sm`}
                                        {...formik.getFieldProps('applicationURL')}
                                    />
                                    {formik.touched.applicationURL && formik.errors.applicationURL ? (
                                        <span className="inline-flex items-center px-3 rounded-r-md md:text-xl border border-r-0 bg-white text-gray-500 sm:text-sm">
                                            <ExclamationCircleIcon className="h-5 w-5 lg:h-7 lg:w-7 text-red-500" aria-hidden="true" />
                                        </span>
                                    ) : null}
                                </div>
                                {formik.touched.applicationURL && formik.errors.applicationURL ? (
                                    <p className="mt-2 text-lg text-white" id="email-error">
                                        {formik.errors.applicationURL}
                                    </p>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="block py-8">
                            <button
                                type="submit"
                                className="block w-full lg:w-3/5 lg:h-20 lg:text-4xl lg:justify-center md:text-3xl justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Post that Job 🚀!
                            </button>
                        </div>
                    </div>
                </form>
                {popOver(show, setShow)}
            </div>
        );
    }

    return (
        <Formik
            initialValues={{
                contactEmail: '',
                companyName: '',
                jobTitle: '',
                priceSelection: TIER_POPULAR,
                description: '',
                applicationURL: '',
            }}
            validationSchema={Yup.object({
                contactEmail: Yup.string().email('👆 Invalid 📧 address').required('👆 Email Required'),
                companyName: Yup.string().required('👆 Company name Required'),
                jobTitle: Yup.string().required('👆 Job title Required'),
                description: Yup.string().min(20, 'That\'s a pretty short description, dont you think 🤔?').required('👆 Description Required'),
                applicationURL: Yup.string().required('👆 Application URL Required'),
            })}
            onSubmit={async (values, { resetForm }) => {
                putDataIntoDB(values)
                resetForm()
            }}
        >{formik => (
            PageContainer(getContent(formik), { isShown: false })
        )}

        </Formik>
    )
}

export default PostAJobPage;