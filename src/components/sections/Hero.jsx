import Link from "next/link";
import Holofoil from "../widgets/holofoil/Holofoil";
import { FaArrowRight } from "react-icons/fa6";

// bg-gradient-radial from-white/5 to-transparent to-[70%]

export default function Hero() {
    return (
        <div className="pt-8 md:pt-20 bg-gradient-radial from-main-primary/[0.07] to-transparent to-[50%]">
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-8">
                <div className="basis-[60%]">
                    <h1 className='font-hind text-6xl leading-tight text-gray-300/90 text-balance text-center md:text-left'>
                        Building better websites for{" "}
                        <span className='font-semibold'>
                            doctors & their patients
                        </span>
                    </h1>
                    <h2 className="text-center md:text-left max-w-lg md:max-w-none mx-auto mt-6 text-lg text-gray-300/90 text-balance">Our digital services help healthcare organizations of all sizes, from small private practices to large hospitals.</h2>
                    <div className="mt-12 flex justify-center md:justify-start items-center gap-6">
                        <Link href={"#contact"} className="border border-gray-600/20 bg-gray-600/20 text-white px-6 py-4 text-sm rounded-lg group hover:bg-gray-600/40 transition duration-300">
                            <button className="flex items-center gap-4">
                                <p>Contact</p>
                                <FaArrowRight className="group-hover:transition group-hover:translate-x-1 group-hover:duration-300 group-hover:ease-in-out" />
                            </button>
                        </Link>
                        <Link href={"#services"} className="border border-gray-600/20 text-white px-6 py-4 text-sm rounded-lg group hover:bg-gray-600/40 transition duration-300">
                            <button className="flex items-center gap-4">
                                <p>Services</p>
                                <FaArrowRight className="group-hover:transition group-hover:translate-x-1 group-hover:duration-300 group-hover:ease-in-out" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="md:basis-[40%] flex justify-center md:justify-evenly items-center mt-12 md:mt-0">
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