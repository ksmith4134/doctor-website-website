"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { portfolio } from "@/lib/cms";

export default function Gallery() {
    const [selected, setSelected] = useState(1);
    const [sliderStyle, setSliderStyle] = useState({
        transform: "translateX(0%)",
    });

    const handleSelected = (id) => {
        setSelected(id);

        let index;
        if (id === 0) {
            index = "-100%";
        } else if (id === 1) {
            index = "0%";
        } else {
            index = "100%";
        }

        setSliderStyle({ transform: `translateX(${index})` });
    };

    return (
        <>
            <div className='flex flex-col items-center'>
                <div className='order-2 md:order-1 relative mt-12 md:mt-16 h-12 rounded-full backdrop-blur-3xl bg-gradient-radial from-main-secondary/5 to-white/5 border border-white/5 shadow-inner shadow-white/5 overflow-hidden'>
                    <div className='relative px-1 py-1 w-full h-full rounded-2xl bg-noise bg-repeat flex justify-center items-center'>
                        {portfolio.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => handleSelected(item.id)}
                                className={`${
                                    selected === item.id && ""
                                } z-20 w-24 md:w-28 h-full flex justify-center items-center hover:cursor-pointer text-xs md:text-sm text-gray-300/90`}
                            >
                                <p>{item.label}</p>
                            </div>
                        ))}
                        <div
                            className='absolute top-1 h-[39px] z-10 w-24 md:w-28 rounded-full backdrop-blur-lg bg-gradient-radial from-white/10 border border-white/5 transition-transform duration-500'
                            style={sliderStyle}
                        ></div>
                    </div>
                </div>

                {/* DESKTOP */}
                <div className='hidden md:block order-2 relative mt-8 max-w-4xl w-full aspect-video rounded-xl backdrop-blur-3xl bg-gradient-radial from-main-secondary/5 to-white/5 border border-white/5 overflow-hidden group'>
                    <div className='w-full h-full rounded-2xl bg-noise bg-repeat'>
                        {portfolio.map((item) => (
                            <div
                                key={item.id}
                                className={`absolute p-16 w-full h-full opacity-0 transition duration-500 ease-in-out ${
                                    selected === item.id &&
                                    "opacity-100 group-hover:opacity-60 group-hover:scale-[.98]"
                                }`}
                            >
                                {item.desktopComponent()}
                            </div>
                        ))}
                    </div>
                    <div className='absolute z-10 -bottom-4 w-full h-full bg-gradient-to-t from-gray-950 from-[12%] to-[70%] transition duration-500 group-hover:-translate-y-4'></div>
                    <div className='absolute z-20 bottom-0 w-full h-full px-16 py-6 flex flex-col justify-end items-center opacity-0 translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500'>
                        <a
                            href={portfolio[selected].url}
                            target='_blank'
                            className='text-lg text-gray-300/90 flex items-center gap-4'
                        >
                            <p>{portfolio[selected].description}</p>
                            <FaArrowRight className='text-xl' />
                        </a>
                    </div>
                </div>

                {/* MOBILE */}
                <div className='w-full h-80 overflow-hidden max-w-md mx-auto md:hidden mt-16'>
                    {portfolio[selected].mobileComponent()}
                </div>
            </div>
        </>
    );
}
