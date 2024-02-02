import Link from "next/link";
import Holofoil from "../widgets/holofoil/Holofoil";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
    return (
        <div className="pt-8 md:pt-20 bg-gradient-radial from-white/5 to-transparent to-[70%]">
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-8">
                <div className="basis-[60%]">
                    <h1 className="text-center md:text-left font-semibold text-5xl md:text-7xl leading-tight md:leading-tight text-gray-300 text-balance">Building better doctor websites</h1>
                    <h2 className="text-center md:text-left max-w-lg md:max-w-none mx-auto mt-8 text-md text-gray-300 leading-relaxed text-balance">Our services were designed from the ground up to meet the specific needs of healthcare organizations, from small private practices to large hospitals.</h2>
                    <div className="mt-12 flex justify-center md:justify-start items-center gap-6">
                        <Link href={"#contact"} className="border border-gray-600/20 bg-gray-600/20 text-white px-6 py-4 text-sm rounded-lg group">
                            <button className="flex items-center gap-4">
                                <p>Contact</p>
                                <FaArrowRight className="group-hover:transition group-hover:translate-x-1 group-hover:duration-300 group-hover:ease-in-out" />
                            </button>
                        </Link>
                        <Link href={"#services"} className="border border-gray-600/20 text-white px-6 py-4 text-sm rounded-lg group">
                            <button className="flex items-center gap-4">
                                <p>Services</p>
                                <FaArrowRight className="group-hover:transition group-hover:translate-x-1 group-hover:duration-300 group-hover:ease-in-out" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="basis-[40%] flex justify-evenly items-center mt-12 md:mt-0">
                    <Holofoil />
                </div>
            </div>
        </div>
    );
}


/* 
<Link href={'#innovation'} className="border border-gray-600/20 bg-white/5 text-white px-4 py-2 text-xs rounded-full">
    Bringing AI to patient documentation
</Link> 
*/