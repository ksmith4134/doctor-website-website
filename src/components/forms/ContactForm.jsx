"use client";

import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { sendContactEmail } from "@/actions/sendContactEmail";
import { SubmitButton } from "./SubmitButton";
import ToastMessage from "./ToastMessage";

const initialState = {
    message: {
        body: "",
        type: "",
    },
    count: 0,
    disable: false,
};

export default function ContactForm() {
    const [state, formAction] = useFormState(sendContactEmail, initialState);
    const [inputs, setInputs] = useState({ email: "" });
    const [disableForm, setDisableForm] = useState(false);

    useEffect(() => {
        setInputs({ name: "", email: "" });
        if (state.disable) {
            setDisableForm(true);
        }
    }, [state]);

    return (
        <>
            <form
                action={formAction}
                id='contact-form'
                className='mt-4 max-w-96 w-full'
            >
                <div className='p-1 h-12 bg-white/5 w-full border border-gray-600/20 rounded-full flex justify-between items-center gap-2'>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        onChange={(e) => setInputs({ email: e.target.value })}
                        value={inputs.email}
                        placeholder={
                            disableForm
                                ? "Disabled"
                                : "Enter your email and click"
                        }
                        autoComplete='off'
                        required
                        disabled={disableForm}
                        className='w-full h-full px-4 bg-transparent text-sm text-gray-300/90 placeholder-gray-600 focus:outline-none focus:border-gray-600 text-center md:text-left'
                    ></input>
                    <div className='hidden md:block h-full'>
                        <SubmitButton disableForm={disableForm} />
                    </div>
                </div>
                <div className='block md:hidden w-full h-12 mt-4'>
                    <SubmitButton disableForm={disableForm} />
                </div>
            </form>
            <ToastMessage message={state.message} />
        </>
    );
}
