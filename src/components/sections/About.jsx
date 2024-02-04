import Image from "next/image";
import davidProfilePic from "../../../public/david.jpg";
import kevinProfilePic from "../../../public/kevin.jpg";

export default function About() {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-start lg:items-center gap-16'>
            <div className='basis-5/12'>
                <h2 className='font-hind text-6xl leading-tight text-gray-300'>
                    About Us
                </h2>
                <div className='text-gray-200 font-extralight text-balance'>
                    <p className='mt-4'>
                        Revered was founded by brothers Kevin and David Smith.
                        They share a combined experience of over 20 years in web
                        design and development.
                    </p>
                    <p className='mt-4'>
                        Both Kevin and David reside with their families in
                        Greater Rochester, NY which is world renowned for its
                        healthcare education and hospital systems.
                    </p>
                </div>
            </div>
            <div className='w-full lg:basis-7/12 shrink-0 bg-gradient-radial from-white/5 to-white/0 to-[60%] flex flex-col sm:flex-row gap-8'>
                <div className='relative basis-1/2 bg-noise bg-repeat rounded-3xl border border-gray-600/20 overflow-hidden group'>
                    {/* BG GRADIENT */}
                    <div className='absolute w-full h-full top-0 bg-gradient-radial from-gray-400/20 group-hover:from-teal-600/60 to-transparent to-[90%]'></div>
                    <div className='p-2 w-full h-full bg-gray-600/10 group-hover:bg-gray-600/20'>
                        {/* IMAGE */}
                        <div className='z-10 relative w-full h-72 rounded-2xl overflow-hidden'>
                            <Image
                                alt='about us profile picture'
                                src={davidProfilePic}
                                fill={true}
                                className='object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-300 ease-in-out'
                            />
                        </div>
                        {/* TEXT */}
                        <div className='px-2 pb-3 mt-5'>
                            <p className='mt-4 font-bold text-gray-200'>
                                David Smith
                            </p>
                            <p className='mt-1 text-sm text-gray-400 font-light'>
                                Founder, Design Engineer
                            </p>
                        </div>
                    </div>
                </div>
                <div className='relative basis-1/2 bg-noise bg-repeat rounded-3xl border border-gray-600/20 overflow-hidden group'>
                    {/* BG GRADIENT */}
                    <div className='absolute w-full h-full top-0 bg-gradient-radial from-gray-400/20 group-hover:from-red-600/60 to-transparent to-[90%]'></div>
                    <div className='p-2 w-full h-full bg-gray-600/10 group-hover:bg-gray-600/20'>
                        {/* IMAGE */}
                        <div className='z-10 relative w-full h-72 rounded-2xl overflow-hidden'>
                            <Image
                                alt='about us profile picture'
                                src={kevinProfilePic}
                                fill={true}
                                className='object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-300 ease-in-out'
                            />
                        </div>
                        {/* TEXT */}
                        <div className='px-2 pb-3 mt-5'>
                            <p className='mt-4 font-bold text-gray-200'>
                                Kevin Smith
                            </p>
                            <p className='mt-1 text-sm text-gray-400 font-light'>
                                Founder, Software Engineer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
