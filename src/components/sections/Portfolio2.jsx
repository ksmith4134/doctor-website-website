import FlexCard from "../widgets/FlexCard";
import { FaArrowRight } from "react-icons/fa6";

export default function Portfolio2() {
    return (
        <div className="">
            <div className='max-w-3xl'>
                <h3 className='text-gray-500 font-bold text-lg'>Our Work</h3>
                <h1 className='mt-4 font-hind font-semibold text-5xl leading-snug text-gray-200'>
                    Arnot Health Orthopedics
                </h1>
                <h5 className='mt-2 text-lg font-extralight text-gray-200 leading-loose'>
                    We recently built a <span className="font-bold">patient resources</span> web application for Arnot
                    Ogden Medical Center&apos;s orthopedics department. Check out some{" "}
                    <span className="font-bold">highlights below</span>{" "}or click to learn more.
                </h5>
                <a href='https://www.arnotortho.com' target='_blank'>
                    <button className='mt-8 w-fit flex items-center gap-2 rounded-full bg-portfolio-primary/60 text-white px-4 py-2 text-xs font-semibold hover:bg-portfolio-primary transition-all duration-300 group'>
                        View the site
                        <FaArrowRight className='transition-all duration-300 group-hover:translate-x-1' />
                    </button>
                </a>
            </div>
            <FlexCard />
        </div>
    );
}
