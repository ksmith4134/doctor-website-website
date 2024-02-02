"use client";

import { useState, useEffect } from "react";
import Navigation from "../portfolio/Navigation";
import Condition from "../portfolio/Condition";
import Profile from "../portfolio/Profile";

const portfolio = [
    {
        id: 0,
        title: "Simple Navigation",
        description: "Find conditions using an interactive skeleton.",
        component: () => <Navigation />
    },
    {
        id: 1,
        title: "Patient Education",
        description: "Customizable, wiki-style condition pages.",
        component: () => <Condition />
    },
    {
        id: 2,
        title: "Doctor profiles",
        description: "Beautiful, professional profile pages.",
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
        <div className='mt-16 flex flex-col lg:flex-row items-start gap-8'>
            <div className='basis-3/12 mt-2 flex flex-row lg:flex-col gap-12'>
                {portfolio.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => handleSelected(item.id)}
                        className='relative z-0 text-gray-300/90 pl-4 py-4 border-l hover:cursor-pointer group border-gray-600/40'
                    >
                        <h5
                            className={`font-semibold text-md ${
                                selected === item.id
                                    ? "text-portfolio-primary"
                                    : "group-hover:text-portfolio-primary"
                            }`}
                        >
                            {item.title}
                        </h5>
                        <p className='mt-2 font-light text-sm text-balance'>
                            {item.description}
                        </p>
                        {/* Grow height of animated border */}
                        <div
                            className={`absolute z-20 w-px h-full top-0 left-0 ${
                                selected === item.id
                                    ? "bg-portfolio-primary/50 grow-height"
                                    : "bg-transparent"
                            }`}
                        ></div>
                    </div>
                ))}
            </div>
            <div className='basis-9/12 shrink-0 w-full aspect-video rounded-2xl border-2 border-white/5 bg-custom-gradient-1 backdrop-blur-3xl'>
                <div className='relative bg-noise bg-repeat rounded-2xl w-full h-full overflow-hidden'>
                    {portfolio.map((item) => (
                        <div key={item.id} className={`absolute p-12 w-full h-full opacity-0 transition-opacity duration-[1500ms] ease-in-out ${selected === item.id && 'opacity-100'}`}>
                            {item.component()}
                        </div>
                    ))}
                    <div className='absolute z-10 w-full h-full bg-gradient-to-t from-gray-950 from-[6%] to-transparent to-[70%]'></div>
                </div>
            </div>
        </div>
    );
}
