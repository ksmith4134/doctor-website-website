import Image from "next/image";
import { FiBookmark } from "react-icons/fi";
import { IoMdPlay } from "react-icons/io";

const index = [
    { id: 0, label: "Background" },
    { id: 1, label: "Conservative Care" },
    { id: 2, label: "Surgery" },
    { id: 3, label: "Pre-Op Care" },
    { id: 4, label: "Post-Op Care" },
    { id: 5, label: "All Resources" },
];

export default function Condition() {
    return (
        <div className='w-full h-full flex justify-between items-start'>
            <div className='w-80'>
                <div className='flex items-center gap-3 text-portfolio-tertiary/80'>
                    <FiBookmark className='text-2xl stroke-1' />
                    <p className='text-xl font-semibold'>Index</p>
                </div>
                <div className='relative mt-12 ml-1 border-l border-gray-400/30'>
                    {index.map((index) => (
                        <div
                            key={index.id}
                            className={`ml-6 my-2 py-2 text-xs ${
                                index.id === 0
                                    ? "text-cyan-700 font-bold"
                                    : "text-gray-300/90 font-light hover:text-cyan-500 hover:cursor-pointer"
                            }`}
                        >
                            {index.label}
                        </div>
                    ))}
                    <div className='absolute top-0 left-0 -ml-[2px] w-[3px] h-8 rounded bg-cyan-700'></div>
                </div>
            </div>
            <div className='w-full'>
                <h2 className='-mt-1 text-3xl font-semibold text-gray-300/90'>
                    Knee Arthritis
                </h2>
                <p className='mt-2 text-sm font-extralight text-gray-300/90 text-balance'>
                    Knee arthritis is a common condition that occurs when the
                    cartilage in the knee joint breaks down, causing pain,
                    stiffness, and swelling.
                </p>
                <div className='mt-6 relative w-full aspect-video'>
                    <Image
                        alt='knee arthritis background video thumbnail'
                        src={"/portfolio/arnot/hero-home-1.jpg"}
                        fill={true}
                        className='object-cover rounded-md opacity-60'
                    />
                    <div className='absolute z-10 w-full h-full flex justify-center items-center'>
                        <div className='rounded-full border border-white/50 shadow-inner shadow-white/20 backdrop-blur-lg bg-white/10 flex justify-center items-center w-28 h-28'>
                            <IoMdPlay className='ml-2 w-16 h-16 text-white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
