"use client";

import { useFormStatus } from "react-dom";
import { FaArrowRight } from "react-icons/fa6";

export function SubmitButton({ disableForm }) {
    const { pending } = useFormStatus();

    if (disableForm)
        return (
            <div className='w-fit h-full px-4 flex items-center gap-2 border border-gray-600/20 bg-gray-800 text-gray-300/90 text-sm rounded-full group hover:bg-gray-700 transition duration-300'>
                Contact
            </div>
        );

    return (
        <button
            type='submit'
            aria-disabled={pending}
            disabled={pending}
            className='w-fit h-full px-4 flex items-center gap-2 border border-gray-600/20 bg-gray-800 text-gray-300/90 text-sm rounded-full group hover:bg-gray-700 transition duration-300'
        >
            {pending ? (
                "Submitting..."
            ) : (
                <>
                    <p>Contact</p>
                    <FaArrowRight className='group-hover:transition group-hover:translate-x-1 group-hover:duration-300 group-hover:ease-in-out' />
                </>
            )}
        </button>
    );
}
