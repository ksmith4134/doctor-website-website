"use client";

import { useState, useEffect } from "react";
import Navigation from "../portfolio/Navigation";
import Condition from "../portfolio/Condition";
import Profile from "../portfolio/Profile";

const portfolio = [
    {
        id: 0,
        title: "Condition Navigation",
        description: "Intuitive condition navigation using an interactive skeleton.",
        component: () => <Navigation />
    },
    {
        id: 1,
        title: "Patient Education",
        description: "Simple, yet full customizable condition pages in a wiki-style.",
        component: () => <Condition />
    },
    {
        id: 2,
        title: "Doctor profiles",
        description: "Not your typical doctor profiles. Beautiful and professional.",
        component: () => <Profile />
    },
];


export default function GalleryCard() {
    
    const [selected, setSelected] = useState(portfolio[0].id);
    const [timer, setTimer] = useState(null);

    const handleSelected = (id) => {
        if (selected !== id) {
            setSelected(id);
            clearTimeout(timer);
        }
    };

    useEffect(() => {
        const time = setTimeout(() => {
            if (selected === portfolio.length - 1) {
                setSelected(0);
            } else {
                setSelected(selected + 1);
            }
        }, 10000);

        setTimer(time);
    }, [selected]);


    return (
        <div className='mt-12 flex items-center gap-16'>
            <div className='basis-3/12 mt-2 flex flex-col gap-12'>
                {portfolio.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => handleSelected(item.id)}
                        className='relative z-0 text-gray-300 pl-4 pr-6 py-3 border-l hover:cursor-pointer group border-gray-600/40'
                    >
                        <h5
                            className={`font-bold ${
                                selected === item.id
                                    ? "text-portfolio-primary"
                                    : "group-hover:text-portfolio-primary"
                            }`}
                        >
                            {item.title}
                        </h5>
                        <p className='mt-1 font-light text-sm text-balance'>
                            {item.description}
                        </p>
                        <div
                            className={`absolute z-20 w-px h-full top-0 left-0 ${
                                selected === item.id
                                    ? "bg-portfolio-primary/50 grow"
                                    : "bg-transparent"
                            }`}
                        ></div>
                    </div>
                ))}
            </div>
            <div className='basis-9/12 w-full aspect-video rounded-2xl border-2 border-white/5 bg-custom-gradient-4'>
                <div className='relative bg-noise bg-repeat rounded-2xl w-full h-full overflow-hidden'>
                    {portfolio.map((item) => (
                        <div key={item.id} className={`absolute p-12 w-full h-full opacity-0 transition-opacity duration-[1500ms] ease-in-out ${selected === item.id && 'opacity-100'}`}>
                            {item.component()}
                        </div>
                    ))}
                    <div className='absolute z-10 w-full h-full bg-gradient-to-t from-gray-950 from-[6%] to-transparent to-[60%]'></div>
                </div>
            </div>
        </div>
    );
}
