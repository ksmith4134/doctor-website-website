import { useState, useEffect } from "react";
import { portfolioNavigation } from "@/lib/cms";
import { FaCircleInfo } from "react-icons/fa6";
import { ICONS } from "@/lib/theme";

export default function Navigation() {

    const [ filter, setFilter ] = useState(false);
    const [ dropdown, setDropdown ] = useState(null);


    const filterButtonClick = (filter) => {
        setFilter(filter)
    };

    const dropDownClick = (slug) => {
        slug === dropdown ? setDropdown(null) : setDropdown(slug)
    }

    const Plus = ICONS["plus"];
    const Minus = ICONS["minus"];

    return (
        <div className='h-full flex justify-center items-start gap-8'>
            <div className='basis-1/2'>
                <div className='w-80 mx-auto'>

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
                            className='w-full last:mt-2 py-3 rounded-md bg-portfolio-primary text-white text-center'
                        >
                            All Treatments
                        </button>
                        <button
                            onClick={() => filterButtonClick(true)}
                            className='w-full last:mt-2 py-3 rounded-md bg-gray-200 text-center'
                        >
                            Arthritis & Joint Replacements
                        </button>
                    </div>

                    {/* Dropdown List */}
                    <div className="mt-8 w-full text-xs">
                        {portfolioNavigation.map((item) => (
                            <div key={item.id} className="w-full py-4 border-b border-gray-400/50 last:border-b-0">
                                <div onClick={() => dropDownClick(item.slug)} className={`py-2 flex justify-between items-center text-gray-200 rounded-md hover:cursor-pointer ${dropdown === item.slug ? 'px-3 bg-portfolio-primary' : ' hover:text-portfolio-primary'}`}>
                                    <p>{item.label}</p>
                                    {dropdown === item.slug ? <Minus className="text-lg" /> : <Plus className="text-lg" />}
                                </div>
                                {dropdown === item.slug && item.conditions.map((condition) => (
                                    <div key={condition.id} className="mt-3 px-3 py-2 rounded-md bg-white/10 text-gray-200 hover:bg-white/20 hover:cursor-pointer">
                                        {condition.label}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className='basis-1/2'></div>
        </div>
    );
}
