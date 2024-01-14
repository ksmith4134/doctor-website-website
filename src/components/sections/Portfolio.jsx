"use client";

import { useState, useEffect } from "react";
import { portfolioCards } from "@/lib/cms";
import Icon from "../utils/Icon";
import Navigation from "../portfolio/Navigation";
import Conditions from "../portfolio/Conditions";
import Profiles from "../portfolio/Profiles";
import Reviews from "../portfolio/Reviews";
import Photography from "../portfolio/Photography";

export default function Portfolio() {
    const [selected, setSelected] = useState(portfolioCards[0].slug);
    const [component, setComponent] = useState();

    useEffect(() => {
        switch (selected) {
            case "navigation":
                setComponent(<Navigation />);
                break;
            case "conditions":
                setComponent(<Conditions />);
                break;
            case "profiles":
                setComponent(<Profiles />);
                break;
            case "reviews":
                setComponent(<Reviews />);
                break;
            case "photography":
                setComponent(<Photography />);
                break;
            default:
                break;
        }
    }, [selected]);

    return (
        <div className="">
            <div className='max-w-3xl'>
                <h3 className='text-gray-500 font-bold text-lg'>Our Work</h3>
                <h1 className='mt-4 font-hind font-semibold text-5xl leading-snug text-gray-200'>
                    Arnot Health Orthopedics
                </h1>
                <h5 className='mt-2 text-lg font-extralight text-gray-200 leading-loose'>
                    We recently built a patient resources web app for Arnot
                    Health&apos;s orthopedics department. Check out some{" "}
                    <span className="font-bold">interactive highlights</span>{" "}below or visit{" "}
                    <a
                        href='https://www.arnotortho.com'
                        className='text-blue-500 underline underline-offset-4 decoration-1'
                    >
                        arnotortho.com
                    </a>
                </h5>
            </div>
            <div className='mt-20 flex gap-8 h-[700px]'>
                {/* NAVIGATION */}
                <div className='w-60 shrink-0'>
                    <p className="p-2 text-gray-400 font-light leading-normal text-xs">Click the buttons below to see  examples of our work.</p>
                    <ul className="mt-2">
                        {portfolioCards.map((item) => (
                            <li
                                key={item.id}
                                onClick={() =>
                                    setSelected(item.slug)
                                }
                                className={`
                                        flex items-center gap-4 first:mt-2 mt-3 px-5 py-4 rounded-lg hover:cursor-pointer
                                        ${
                                            selected ===
                                            item.slug
                                                ? "bg-gray-600/30"
                                                : "hover:bg-gray-600/20"
                                        }
                                    `}
                            >
                                <Icon icon={item.icon} />
                                <p className='text-sm font-thin text-white'>
                                    {item.title}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* PORTFOLIO SAMPLE */}
                <div className='shrink w-full h-full p-px rounded-2xl bg-gradient-to-b from-gray-400/10 from-0% to-white/0 to-70% overflow-hidden'>
                    <div className='w-full h-full bg-gray-950 rounded-2xl'>
                        <div className='w-full h-full rounded-2xl bg-noise bg-repeat'>
                            <div className='w-full h-full p-16 rounded-2xl bg-gradient-to-b from-[#565A67]/10 to-gray-950 to-[70%]'>
                                {component}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
