import Image from "next/image";


export default function About() {
    return (
        <div className="flex justify-center items-center gap-20">
            <div className="basis-5/12">
                <h2 className="font-hind font-semibold text-5xl leading-snug text-gray-200">About Us</h2>
                <div className="text-gray-200 font-extralight">
                    <p className="mt-4">Revered was founded by brothers Kevin and David Smith. They share a combined experience of over 20 years in web design and development.</p>
                    <p className="mt-4">Both Kevin and David reside in Greater Rochester, NY which is world renowned for its healthcare education and hospital systems. Many of their close family members work in the medical field which inspired them to start creating better online experiences for patients and professionals.</p>
                </div>
            </div>
            <div className="h-96 basis-7/12 bg-gradient-radial from-white/5 to-white/0 to-[60%] flex gap-8">
                <div className="relative basis-1/2 bg-noise bg-repeat rounded-3xl border border-gray-600/20 overflow-hidden group">
                    {/* BG GRADIENT */}
                    <div className="absolute w-full h-full top-0 group-hover:bg-gradient-radial group-hover:from-teal-600/60 group-hover:to-transparent group-hover:to-[90%]"></div>
                    <div className="p-2 w-full h-full bg-gray-600/10 group-hover:bg-gray-600/20">
                        {/* IMAGE */}
                        <div className="z-10 relative w-full h-72 rounded-2xl overflow-hidden">
                            <Image alt="" src={'/david.jpg'} fill={true} className="object-cover grayscale-0 group-hover:grayscale-0 transition duration-300 ease-in-out" />
                        </div>
                        
                        {/* TEXT */}
                        <div className="px-2 mt-5">
                            <p className="mt-4 font-bold text-gray-200">David Smith</p>
                            <p className="mt-1 text-sm text-gray-400 font-light">Founder, Design Engineer</p>
                        </div>
                    </div>
                </div>
                <div className="relative basis-1/2 bg-noise bg-repeat rounded-3xl border border-gray-600/20 overflow-hidden group">
                    {/* BG GRADIENT */}
                    <div className="absolute w-full h-full top-0 group-hover:bg-gradient-radial group-hover:from-red-600/60 group-hover:to-transparent group-hover:to-[90%]"></div>
                    <div className="p-2 w-full h-full bg-gray-600/10 group-hover:bg-gray-600/20">
                        {/* IMAGE */}
                        <div className="z-10 relative w-full h-72 rounded-2xl overflow-hidden">
                            <Image alt="" src={'/kevin.jpg'} fill={true} className="object-cover grayscale-0 group-hover:grayscale-0 transition duration-300 ease-in-out" />
                        </div>
                        
                        {/* TEXT */}
                        <div className="px-2 mt-5">
                            <p className="mt-4 font-bold text-gray-200">Kevin Smith</p>
                            <p className="mt-1 text-sm text-gray-400 font-light">Founder, Software Engineer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
