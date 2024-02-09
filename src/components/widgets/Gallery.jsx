"use client";

import { useState } from "react";
import { portfolio } from "@/lib/cms";

export default function Gallery() {
    const [selected, setSelected] = useState(portfolio[1]);

    return (
        <>
            <div className='mt-12 h-12 rounded-full backdrop-blur-3xl bg-gradient-radial from-main-secondary/5 to-white/5 border border-white/5 shadow-inner shadow-white/5 overflow-hidden'>
                <div className='px-1 py-1 w-full h-full rounded-2xl bg-noise bg-repeat flex justify-center items-center text-sm text-gray-300/90'>
                    {portfolio.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelected(item)}
                            className={`${
                                selected.id === item.id &&
                                "backdrop-blur-lg bg-gradient-radial from-white/10"
                            } px-8 w-full h-full rounded-full flex justify-center items-center hover:cursor-pointer`}
                        >
                            <p>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='relative mt-8 max-w-4xl w-full aspect-video rounded-xl backdrop-blur-3xl bg-gradient-radial from-main-secondary/5 to-white/5 border border-white/5 overflow-hidden'>
                <div className='p-16 w-full h-full rounded-2xl bg-noise bg-repeat'>
                    {selected.component()}
                </div>
                <div className='absolute z-10 bottom-0 w-full h-full bg-gradient-to-t from-gray-950 from-[8%] to-[60%]'></div>
            </div>
        </>
    );
}
