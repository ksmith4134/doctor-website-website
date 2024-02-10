"use client";

import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { portfolio } from "@/lib/cms";

export default function Gallery() {
    const [selected, setSelected] = useState(1);
    const [sliderStyle, setSliderStyle] = useState({transform: 'translateX(0%)'});

    const handleSelected = (id) => {
        setSelected(id)

        let index;
        if(id === 0){
            index = '-100%'
        } else if(id === 2){
            index = '100%'
        } else {
            index = '0%'
        }

        setSliderStyle({ transform: `translateX(${index})`})
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='relative mt-16 h-12 rounded-full backdrop-blur-3xl bg-gradient-radial from-main-secondary/5 to-white/5 border border-white/5 shadow-inner shadow-white/5 overflow-hidden'>
                <div className='relative px-1 py-1 w-full h-full rounded-2xl bg-noise bg-repeat flex justify-center items-center text-sm text-gray-300/90'>
                    {portfolio.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleSelected(item.id)}
                            className={`${
                                selected === item.id &&
                                ""
                            } z-20 w-28 h-full flex justify-center items-center hover:cursor-pointer`}
                        >
                            <p>{item.label}</p>
                        </div>
                    ))}
                    <div className="absolute top-[3px] h-10 z-10 w-28 rounded-full backdrop-blur-lg bg-gradient-radial from-white/10 border border-white/5 transition-transform duration-500" style={sliderStyle}></div>
                </div>
            </div>
            <div className='relative mt-8 max-w-4xl w-full aspect-video rounded-xl backdrop-blur-3xl bg-gradient-radial from-main-secondary/5 to-white/5 border border-white/5 overflow-hidden group'>
                <div className='w-full h-full rounded-2xl bg-noise bg-repeat'>
                    {portfolio.map((item) => (
                        <div
                            key={item.id}
                            className={`absolute p-16 w-full h-full opacity-0 transition duration-500 ease-in-out ${
                                selected === item.id && "opacity-100 group-hover:opacity-60 group-hover:scale-[1.00]"
                            }`}
                        >
                            {item.component()}
                        </div>
                    ))}
                </div>
                <div className='absolute z-10 bottom-0 w-full h-full bg-gradient-to-t from-gray-950 from-[8%] to-[60%]'></div>
                <div className="absolute z-20 bottom-0 w-full h-full px-16 py-10 flex flex-col justify-end items-start opacity-0 translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                    <a href={portfolio[selected].url} target="_blank" className="text-lg text-gray-300/90 flex items-center">
                        <p>{portfolio[selected].description}</p>
                        <FaArrowRight className="text-xl translatex-0 group-hover:translate-x-4 transition duration-500" />
                    </a>
                </div>
            </div>
            <div className='mt-3'>
                <a
                    href={`${selected.url}`}
                    target="_blank"
                    className='block md:hidden text-xs italic text-cyan-600/90 underline-offset-4 hover:underline'
                >
                    View site
                </a>
            </div>
        </div>
    );
}
