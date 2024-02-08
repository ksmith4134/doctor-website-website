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
                className='mt-4 flex gap-4 w-[400px] h-12'
            >
                <div className='p-1 bg-white/5 w-full h-full border border-gray-600/20 rounded-full flex justify-between items-center gap-2'>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        onChange={(e) => setInputs({ email: e.target.value })}
                        value={inputs.email}
                        placeholder={
                            disableForm
                                ? "Disabled"
                                : "Enter email and click contact"
                        }
                        autoComplete='off'
                        required
                        disabled={disableForm}
                        className='w-full h-full px-4 bg-transparent text-sm text-gray-300/90 placeholder-gray-600 focus:outline-none focus:border-gray-600'
                    ></input>
                    <SubmitButton disableForm={disableForm} />
                </div>
            </form>
            <ToastMessage message={state.message} />
        </>
    );
}
