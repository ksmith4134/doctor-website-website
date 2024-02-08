"use client";

import MaxWidth from "@/components/utils/MaxWidth";

export default function GlobalError({ error, reset }) {
    console.log("Error", error);

    return (
        <html>
            <body>
                <MaxWidth>
                    <div className='min-h-screen w-full flex flex-col justify-center items-center gap-8'>
                        <h2 className='text-2xl text-white font-bold'>
                            Something went wrong!
                        </h2>
                        <button
                            onClick={() => reset()}
                            className='px-4 py-3 border border-gray-600 hover:bg-gray-800 rounded text-white'
                        >
                            Try again
                        </button>
                    </div>
                </MaxWidth>
            </body>
        </html>
    );
}
