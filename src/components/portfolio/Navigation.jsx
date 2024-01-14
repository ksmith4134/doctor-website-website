import Image from "next/image";
import { useState, useEffect } from "react";
import { portfolioNavigation } from "@/lib/cms";
import { FaCircleInfo } from "react-icons/fa6";
import { ICONS } from "@/lib/theme";

export default function Navigation() {
    const [filter, setFilter] = useState(false);
    const [dropdown, setDropdown] = useState(null);
    const [conditions, setConditions] = useState(portfolioNavigation);

    const filterButtonClick = (filter) => {
        setFilter(filter);

        let filtered = [];

        if (filter) {
            filtered = portfolioNavigation.map((item) => {
                return {
                    id: item.id,
                    slug: item.slug,
                    label: item.label,
                    skeletonLocation: item.skeletonLocation,
                    conditions: item.conditions.filter(
                        (item) => item.arthritis
                    ),
                };
            });
        } else {
            filtered = portfolioNavigation;
            setConditions(filtered);
        }

        setConditions(filtered);
    };

    const dropDownClick = (slug) => {
        slug === dropdown ? setDropdown(null) : setDropdown(slug);
    };

    const Plus = ICONS["plus"];
    const Minus = ICONS["minus"];

    return (
        <div className='h-full flex justify-center items-start gap-8'>
            <div className='basis-1/2'>
                <div className='w-80 mx-auto mt-4'>
                    {/* Instructions */}
                    <div className='flex items-center gap-3'>
                        <FaCircleInfo className='text-2xl text-gray-400' />
                        <p className='text-sm text-white font-semibold'>
                            Instructions
                        </p>
                    </div>
                    <p className='mt-3 text-white text-xs font-extralight leading-relaxed'>
                        Click on the highlighted skeleton joints, filter
                        buttons, or dropdown menus to learn more about your
                        condition.
                    </p>

                    {/* Filter Buttons */}
                    <div className='mt-8 text-xs font-light'>
                        <button
                            onClick={() => filterButtonClick(false)}
                            className={`w-full last:mt-2 py-3 rounded-md text-center ${
                                filter === false
                                    ? "bg-portfolio-primary text-white"
                                    : "bg-gray-300 hover:bg-portfolio-primary hover:text-white"
                            }`}
                        >
                            All Treatments
                        </button>
                        <button
                            onClick={() => filterButtonClick(true)}
                            className={`w-full last:mt-2 py-3 rounded-md text-center ${
                                filter === true
                                    ? "bg-portfolio-secondary text-white"
                                    : "bg-gray-300 hover:bg-portfolio-secondary hover:text-white"
                            }`}
                        >
                            Arthritis & Joint Replacements
                        </button>
                    </div>

                    {/* Dropdown List */}
                    <div className='mt-8 w-full text-xs'>
                        {conditions
                            .filter((item) => item.conditions.length > 0)
                            .map((item) => (
                                <div
                                    key={item.id}
                                    className='w-full py-4 border-b border-gray-400/30 last:border-b-0'
                                >
                                    <div
                                        onClick={() => dropDownClick(item.slug)}
                                        className={`py-2 flex justify-between items-center hover:cursor-pointer ${
                                            dropdown === item.slug
                                                ? `font-bold ${
                                                      filter == false
                                                          ? "text-portfolio-primary"
                                                          : "text-portfolio-secondary"
                                                  }`
                                                : "text-gray-200"
                                        } ${
                                            filter === false
                                                ? "hover:text-portfolio-primary"
                                                : "hover:text-portfolio-secondary"
                                        }`}
                                    >
                                        <p>{item.label}</p>
                                        {dropdown === item.slug ? (
                                            <Minus className='text-lg' />
                                        ) : (
                                            <Plus className='text-lg' />
                                        )}
                                    </div>
                                    {dropdown === item.slug &&
                                        item.conditions.map((condition) => (
                                            <div
                                                key={condition.id}
                                                className='my-3 px-3 py-2 rounded-md bg-white/10 text-gray-200 hover:bg-white/20 hover:cursor-pointer'
                                            >
                                                {condition.label}
                                            </div>
                                        ))}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className='basis-1/2 relative'>
                <Image
                    src={"/portfolio/arnot/skeleton.png"}
                    alt='skeleton diagram highlighting major joints'
                    width={220}
                    height={578}
                    quality={100}
                    className='mx-auto'
                />
                {conditions.filter((item) => item.conditions.length > 0).map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setDropdown(item.slug)}
                        className={`absolute h-14 w-14 rounded-full border-2 hover:cursor-pointer ${
                            item.skeletonLocation
                        } ${
                            filter === false
                                ? `border-portfolio-primary/40 ${
                                      dropdown === item.slug
                                          ? "bg-portfolio-primary/70"
                                          : "bg-portfolio-primary/30 hover:animate-pulse"
                                  }`
                                : `border-portfolio-secondary/40 ${
                                      dropdown === item.slug
                                          ? "bg-portfolio-secondary/70"
                                          : "bg-portfolio-secondary/30 hover:animate-pulse"
                                  }`
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
