"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({ message }) {
    
    const { pending } = useFormStatus();

    return (
        <>
            <button
                type='submit'
                aria-disabled={pending}
                className='mt-14 w-full h-12 rounded-md text-sm text-center bg-gray-700 hover:bg-gray-600'
            >
                {pending ? "Submitting..." : "Submit"}
            </button>
            <div className='mt-2 h-6 -mb-8 text-xs'>
                {message?.type && 
                    <p
                        className={`${
                            message.type === "success"
                                ? "text-emerald-300"
                                : "text-red-400"
                        }`}
                    >
                        {message.body}
                    </p>
                }
            </div>
        </>
    );
}
