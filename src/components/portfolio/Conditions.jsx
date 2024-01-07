import Image from "next/image";
import { FiBookmark, FiHome, FiDownloadCloud } from "react-icons/fi";
import { IoMdPlay } from "react-icons/io";
import { portfolioCondition, portfolioConditionIndex } from "@/lib/cms";

export default function Conditions() {
    return (
        <div className='h-full flex justify-center items-start gap-8 hide-scrollbar overflow-y-scroll'>
            {/* INDEX */}
            <div className='basis-1/4 sticky top-0'>
                <div className='flex items-center gap-3 text-portfolio-tertiary'>
                    <FiBookmark className='text-2xl stroke-1' />
                    <p className='text-xl font-semibold'>Index</p>
                </div>
                <div className='relative mt-12 ml-1 border-l border-gray-400/30'>
                    {portfolioConditionIndex.map((index) => (
                        <div
                            key={index.id}
                            className={`ml-6 my-2 py-2 text-xs ${
                                index.id === 0
                                    ? "text-portfolio-primary font-bold"
                                    : "text-gray-200 font-light hover:text-portfolio-primary hover:cursor-pointer"
                            }`}
                        >
                            {index.label}
                        </div>
                    ))}
                    <div className='absolute top-0 left-0 w-[3px] h-8 bg-portfolio-primary/80'></div>
                </div>
                <div className='mt-12 ml-1'>
                    <div className='flex items-center gap-3 text-gray-200 hover:text-portfolio-primary hover:cursor-pointer last:mt-6'>
                        <FiHome className='text-xl stroke-1' />
                        <p className='text-xs font-light'>Back to Conditions</p>
                    </div>
                    <div className='flex items-center gap-3 text-gray-200 hover:text-portfolio-primary hover:cursor-pointer last:mt-6'>
                        <FiDownloadCloud className='text-xl stroke-1' />
                        <p className='text-xs font-light'>All Downloads</p>
                    </div>
                </div>
            </div>
            {/* CONDITION INFO */}
            <div className='basis-3/4'>
                <h2 className='text-3xl font-bold text-gray-200'>
                    {portfolioCondition.title}
                </h2>
                <h3 className='mt-4 font-extralight text-gray-200'>
                    {portfolioCondition.description}
                </h3>
                <div className='mt-8 flex items-center gap-4'>
                    <Image
                        alt='knee icon'
                        src={portfolioCondition.icon}
                        width={44}
                        height={44}
                    />
                    <p className='uppercase text-sm text-portfolio-primary font-semibold'>
                        {portfolioConditionIndex[0].label}
                    </p>
                    <div className='h-px w-full bg-portfolio-primary'></div>
                </div>
                <p className='mt-8 text-xs text-gray-200 leading-relaxed'>
                    {portfolioCondition.paragraph}
                </p>
                <div className="relative mt-8 w-full aspect-video flex justify-center items-center group">
                    <Image
                        alt='knee arthritis background video thumbnail'
                        src={portfolioCondition.videoThumbUrl}
                        fill={true}
                        className='object-cover rounded-lg'
                    />
                    <IoMdPlay className="absolute w-36 h-36 stroke-1 text-white/80 group-hover:text-white group-hover:cursor-pointer" />
                </div>
            </div>
        </div>
    );
}
