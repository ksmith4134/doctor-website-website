import GalleryCard from "../widgets/GalleryCard";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import skeletonMobile from "../../../public/portfolio/arnot/Skeleton_Lg_800x920.png"

const circles = [
    { id: 0, label: "elbow", position: "bottom-[13%] left-[3%]" },
    { id: 1, label: "hip", position: "-bottom-[2%] right-[24%]" },
    { id: 2, label: "shoulder", position: "top-[32%] right-[20%]" },
];

export default function Portfolio() {
    return (
        <div className="">
            <div className="flex flex-col items-center text-center">
                <h3 className='text-gray-500 text-lg'>Our Work</h3>
                <h1 className='mt-4 font-hind text-6xl leading-tight text-gray-300/90'>
                    Arnot Health Orthopedics
                </h1>
                <h5 className='mt-4 text-lg text-gray-300/90 leading-relaxed text-balance'>
                    Arnot Health&apos;s orthopedics department reached out to us to build a patient resource web app. Check out some highlights below or click to learn more.
                </h5>
                
            </div>
            
            <div className="hidden md:block lg:mt-24">
                <GalleryCard />
            </div>

            <div className="mt-16 flex justify-center">
                <a href='https://www.arnotortho.com' target='_blank'>
                    <button className='w-fit flex items-center gap-2 rounded-full bg-portfolio-primary/80 text-white px-4 py-2 text-xs font-semibold hover:bg-portfolio-primary transition-all duration-300 group'>
                        View the site
                        <FaArrowRight className='transition-all duration-300 group-hover:translate-x-1' />
                    </button>
                </a>
            </div>

            <div className='md:hidden mt-16 relative overflow-hidden mx-auto flex justify-center'>
                <div className="w-fit relative">
                    <Image
                        src={skeletonMobile}
                        alt='skeleton diagram highlighting major joints'
                        width={360}
                        height={920}
                        quality={100}
                        className="opacity-80"
                    />
                    {circles.map((item) => (
                        <button
                            key={item.id}
                            className={`absolute z-10 max-w-24 w-[24%] aspect-square rounded-full border-2 border-portfolio-primary/20 bg-portfolio-primary/40 shadow-inner shadow-portfolio-primary/40 ${item.position}`}
                        ></button>
                    ))}
                </div>
                <div className="absolute z-20 w-full h-full bg-gradient-to-t from-gray-950 from-[2%]"></div>
            </div>


        </div>
    );
}
