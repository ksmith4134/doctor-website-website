import Image from "next/image";
import video from "../../../public/portfolio/arnot/hero-home-1.jpg";
import { IoMdPlay } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

export default function ConditionMobile() {
    return (
        <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
            <div className='relative w-full aspect-video'>
                <Image
                    alt='knee arthritis background video thumbnail'
                    src={video}
                    fill={true}
                    className='object-cover rounded-md opacity-80'
                />
                <div className='absolute z-10 w-full h-full flex justify-center items-center'>
                    <div className='rounded-full border border-white/50 shadow-inner shadow-white/20 backdrop-blur-lg bg-white/10 flex justify-center items-center w-24 h-24'>
                        <IoMdPlay className='ml-2 w-12 h-12 text-white' />
                    </div>
                </div>
            </div>
            <div className="w-full mt-8 rounded-lg bg-custom-gradient-2 text-gray-300/90 overflow-hidden">
                <div className="w-full px-4 py-4 bg-teal-200/10">
                    <div className="flex justify-between items-center gap-8">
                        <p className="text-sm">Symptoms</p>
                        <FiMinus />
                    </div>
                    <p className="mt-4 text-xs">The symptoms of an ACL injury can vary depending on the severity of the injury. Some common symptoms of an ACL injury include:</p>
                    <div className="mt-4 flex justify-center items-start gap-2 text-xs">
                        <p>1.</p>
                        <p>A popping sound or sensation at the time of injury</p>
                    </div>
                </div>
            </div>
            <div className="absolute z-20 -bottom-4 w-full h-full bg-gradient-to-t from-gray-950 from-[6%] to-[40%]"></div>
        </div>
    );
}
