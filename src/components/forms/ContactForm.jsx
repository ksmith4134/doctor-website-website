"use client";

import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { sendContactEmail } from "@/actions/sendContactEmail";
import { SubmitButton } from "./SubmitButton";

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
    const [inputs, setInputs] = useState({ name: "", email: "" });
    const [disableForm, setDisableForm] = useState(false);

    useEffect(() => {
        setInputs({ name: "", email: "" });
        if(state.disable){
            setDisableForm(true)
        }
    }, [state]);

    return (
        <form action={formAction} id='contact' className='mt-12 text-gray-200'>
            <label htmlFor='name' className='text-xs'>
                Name
            </label>
            <br />
            <input
                type='text'
                id='name'
                name='name'
                onChange={(e) =>
                    setInputs({ email: inputs.email, name: e.target.value })
                }
                value={inputs.name}
                minLength='3'
                maxLength='25'
                placeholder={disableForm ? 'Disabled' : 'Enter your name'}
                autoComplete='off'
                required
                disabled={disableForm}
                className='w-full h-12 bg-transparent text-sm placeholder:font-light placeholder-gray-500 border-b border-gray-500/60 focus:outline-none focus:border-gray-400'
            ></input>
            <br />
            <br />

            <label htmlFor='email' className='text-xs'>
                Email
            </label>
            <br />
            <input
                type='email'
                id='email'
                name='email'
                onChange={(e) =>
                    setInputs({ email: e.target.value, name: inputs.name })
                }
                value={inputs.email}
                placeholder={disableForm ? 'Disabled' : 'Enter your email'}
                autoComplete='off'
                required
                disabled={disableForm}
                className='w-full h-12 bg-transparent text-sm placeholder:font-light placeholder-gray-500 border-b border-gray-500/60 focus:outline-none focus:border-gray-400'
            ></input>
            <br />

            <SubmitButton message={state.message} disableForm={disableForm} />
        </form>
    );
}
