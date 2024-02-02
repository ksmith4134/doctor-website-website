"use client";

import { useFormStatus } from "react-dom";
import { FONT_COLORS } from "@/lib/theme";

export function SubmitButton({ message, disableForm }) {
    
    const { pending } = useFormStatus();

    const messageColor = FONT_COLORS[message.type]

    if(disableForm)
        return (
            <>
                <div className='mt-14 w-full h-12 rounded-md text-sm flex justify-center items-center bg-gray-700 text-gray-400'>
                    Submit
                </div>
                <div className="mt-2 h-6 -mb-8 text-xs text-center">
                    {message?.type && 
                        <p className={`${messageColor}`}>{message.body}</p>
                    }
                </div>
            </>
        );

    return (
        <>
            <button
                type="submit"
                aria-disabled={pending}
                disabled={pending}
                className='mt-10 w-full h-12 rounded-md text-sm text-center bg-gray-700 hover:bg-gray-600'
            >
                {pending ? "Submitting..." : "Submit"}
            </button>
            <div className="mt-2 h-6 -mb-8 text-xs text-center">
                {message?.type && 
                    <p className={`${messageColor}`}>{message.body}</p>
                }
            </div>
        </>
    );
}
