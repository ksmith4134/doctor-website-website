import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { FaCircleInfo } from "react-icons/fa6";
import skeleton from "../../../public/portfolio/arnot/skeleton.png"

const dropdown = [
    { id: 0, label: "Elbow", },
    { id: 1, label: "Hip", },
    { id: 2, label: "Knee", },
    { id: 3, label: "Shoulder", },
];

const circles = [
    { id: 0, label: "elbow", position: "top-[31%] left-[4%]" },
    { id: 1, label: "hip", position: "top-[38%] right-[25%]" },
    { id: 2, label: "shoulder", position: "top-[16%] right-[18%]" },
];

export default function Navigation() {

    return (
        <div className='w-full h-full flex justify-between items-start'>
            <div className='w-80'>
                {/* Instructions */}
                <div className='flex items-center gap-2'>
                    <FaCircleInfo className='text-2xl text-gray-400' />
                    <p className='text-sm text-gray-300/90 font-medium'>
                        Instructions
                    </p>
                </div>
                <p className='mt-3 text-gray-300/90 text-xs font-extralight leading-relaxed text-balance'>
                    Click on the highlighted skeleton joints, filter
                    buttons, or dropdown menus to learn more about your
                    condition.
                </p>
                {/* Filter Buttons */}
                <div className='mt-8 text-xs'>
                    <button className='w-full py-3 rounded-md text-center bg-cyan-800 text-white'>
                        All Treatments
                    </button>
                    <button className='w-full mt-3 py-3 rounded-md text-center bg-gray-300 text-black'>
                        Arthritis & Joint Replacements
                    </button>
                </div>
                {/* Dropdown List */}
                <div className='mt-8 w-full text-xs'>
                    {dropdown.map((item) => (
                        <div
                            key={item.id}
                            className='w-full py-3 border-b border-gray-400/30 last:border-b-0'
                        >
                            <div className='py-2 flex justify-between items-center hover:cursor-pointer text-gray-300/90'>
                                <p>{item.label}</p>
                                <FiPlus className='text-lg' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='-mt-4 relative overflow-hidden'>
                <Image
                    src={skeleton}
                    alt='skeleton diagram highlighting major joints'
                    width={340}
                    style={{ height: "auto" }}
                    height={391}
                    quality={100}
                />
                {circles.map((item) => (
                    <button
                        key={item.id}
                        className={`absolute z-10 h-20 w-20 rounded-full border-2 border-cyan-700/20 bg-cyan-700/30 shadow-inner shadow-cyan-700/40 ${item.position}`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
