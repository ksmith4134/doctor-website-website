import Link from "next/link";
import Holofoil from "../widgets/holofoil/Holofoil";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
    return (
        <div className="max-w-6xl mx-auto pt-24 bg-gradient-radial from-white/5 to-transparent to-[70%]">
            <div className="flex justify-between items-center gap-8">
                <div className="basis-6/12">
                    <Link href={'#innovation'} className="border border-gray-600/20 bg-white/5 text-white px-4 py-2 text-xs rounded-full">
                    Bringing AI to patient documentation
                    </Link>
                    <h1 className="mt-12 font-semibold text-7xl leading-tight text-gray-200">Building better doctor websites</h1>
                    <h2 className="mt-8 text-md text-gray-200 leading-relaxed pr-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</h2>
                    <div className="mt-12 flex justify-start items-center gap-8">
                        <Link href={"#services"} className="border border-gray-600/20 bg-gray-600 text-white px-6 py-4 text-sm rounded-lg group">
                            <button className="flex items-center gap-4">
                                <p>Our Services</p>
                                <FaArrowRight className="group-hover:transition group-hover:translate-x-1 group-hover:duration-300 group-hover:ease-in-out" />
                            </button>
                        </Link>
                        <Link href={"#services"} className="border border-gray-600/20 bg-gray-600/20 text-white px-6 py-4 text-sm rounded-lg group">
                            <button className="flex items-center gap-4 group">
                                <p>Contact Us</p>
                                <FaArrowRight className="group-hover:transition group-hover:translate-x-1 group-hover:duration-300 group-hover:ease-in-out" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Holofoil />
                </div>
            </div>
        </div>
    );
}