"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { portfolio } from "@/lib/cms";

export default function FlexCard() {

    const [selected, setSelected] = useState(portfolio[0].id)
    const [timer, setTimer] = useState(null)

    const handleSelected = (id) => {
        setSelected(id)
        clearTimeout(timer);
    }

    useEffect(() => {
        
        const time = setTimeout(() => {
            if(selected === portfolio.length-1){
                setSelected(0)
            } else {
                setSelected(selected+1)
            }
        }, 5000);

        setTimer(time)

    }, [selected])

    return (
        <div className='mt-20 flex items-center gap-16 overflow-hidden'>
            <div className='basis-3/12 mt-2 flex flex-col gap-12'>
                {portfolio.map((item) => (
                    <div key={item.id} onClick={() => handleSelected(item.id)} className={`relative z-0 text-gray-300 pl-4 pr-6 py-3 border-l hover:cursor-pointer group border-gray-600/40`}>
                        <h5 className={`font-bold ${selected === item.id ? 'text-portfolio-tertiary' : 'group-hover:text-portfolio-tertiary'}`}>
                            {item.title}
                        </h5>
                        <p className='mt-1 font-light text-sm'>
                            {item.description}
                        </p>
                        <div className={`absolute z-20 w-px h-full top-0 left-0 ${selected === item.id ? 'bg-portfolio-tertiary grow' : 'bg-transparent'}`}></div>
                    </div>
                ))}
            </div>
            <div className='basis-9/12 relative w-full aspect-video text-white rounded-xl overflow-hidden group'>
                <a href={portfolio[selected].anchorLink} target="_blank" className="w-full h-full">
                    <Image
                        alt='arnot health image'
                        src={portfolio[selected].imageUrl}
                        fill
                        className='object-cover opacity-100 group-hover:scale-[1.02] transition-all duration-500'
                    />
                    <div className="absolute w-full h-full z-20 p-12 bg-gray-950/60">
                        <div className='flex flex-col justify-end items-start w-full h-full translate-y-10 group-hover:translate-y-0 transition-all duration-500'>
                            <p className='font-semibold text-balance text-2xl inline-flex items-center gap-3 w-[80%]'>
                                {portfolio[selected].imageText}
                            </p>
                            <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                Read more
                                <FaArrowRight className='group-hover:translate-x-1 transition-all duration-300 delay-100' />
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
