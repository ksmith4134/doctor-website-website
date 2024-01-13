"use client";

import { useFormState } from "react-dom";
import { contactMe } from "@/actions/contactMe";
import { SubmitButton } from "./SubmitButton";

const initialState = {
    message: {
        body: '',
        type: '',
    }
}

export default function ContactForm() {
    
    const [state, formAction] = useFormState(contactMe, initialState);

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
                minLength='3'
                maxLength='25'
                placeholder='Enter your name'
                autoComplete='off'
                required
                className='w-full h-12 bg-transparent text-sm placeholder:font-light placeholder-gray-500 border-b border-gray-500/60 focus:outline-none focus:border-gray-600'
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
                placeholder='Enter your email'
                autoComplete='off'
                required
                className='w-full h-12 bg-transparent text-sm placeholder:font-light placeholder-gray-500 border-b border-gray-500/60 focus:outline-none focus:border-gray-600'
            ></input>
            <br />

            <SubmitButton message={state.message} />
            
        </form>
    );
}
