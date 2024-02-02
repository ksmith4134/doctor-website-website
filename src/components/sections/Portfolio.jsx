import GalleryCard from "../widgets/GalleryCard";
import { FaArrowRight } from "react-icons/fa6";

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
        </div>
    );
}
