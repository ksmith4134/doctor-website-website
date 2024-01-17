"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { portfolio } from "@/lib/cms";

export default function FlexCard() {

    const [selected, setSelected] = useState(portfolio[0].id)

    const handleSelected = (id) => {
        setSelected(id)
    }

    return (
        <div className='mt-24 flex items-start gap-16'>
            <div className='basis-3/12 mt-2 h-full flex flex-col gap-12'>
                <a href='https://www.arnotortho.com' target='_blank'>
                    <button className='w-fit flex items-center gap-3 rounded-full bg-portfolio-primary text-white px-4 py-2 text-xs font-semibold group'>
                        View the site
                        <FaArrowRight className='group-hover:transition group-hover:translate-x-1 group-hover:duration-300 group-hover:ease-in-out' />
                    </button>
                </a>
                {portfolio.map((item) => (
                    <div key={item.id} onClick={() => handleSelected(item.id)} className={`first:mt-4 text-gray-300 pl-4 pr-6 py-2 border-l hover:cursor-pointer ${selected === item.id ? 'border-portfolio-primary' : 'border-gray-600/40'}`}>
                        <h5 className='font-semibold text-portfolio-tertiary/100'>
                            {item.title}
                        </h5>
                        <p className='mt-1 font-light text-sm'>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
            <a href={portfolio[selected].anchorLink} target="_blank" className='basis-9/12 relative w-full aspect-video text-white rounded-lg overflow-hidden group'>
                <Image
                    alt='arnot health image'
                    src={portfolio[selected].imageUrl}
                    fill
                    className='object-cover opacity-100'
                />
                <div className='absolute w-full h-full z-20 flex flex-col justify-end items-start p-8'>
                    <p className='font-semibold text-2xl inline-flex items-center gap-3 w-[70%]'>
                        {portfolio[selected].imageText}
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                        Read more
                        <FaArrowRight className='group-hover:transition group-hover:translate-x-1 group-hover:duration-300 group-hover:ease-in-out' />
                    </div>
                </div>
            </a>
        </div>
    );
}
