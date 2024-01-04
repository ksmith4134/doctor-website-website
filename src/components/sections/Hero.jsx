import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Holofoil from "../widgets/holofoil/Holofoil";

export default function Hero() {
    return (
        <div className="pt-24 flex justify-start items-center gap-24">
            <div className="md:basis-7/12 -mt-8">
                <h1 className="font-hind font-semibold text-5xl leading-snug text-gray-200">Building better websites for doctors & their patients</h1>
                <div className="mt-6 flex gap-8">
                    <Link href="#contact">
                        <button className="border border-white/5 rounded-md pl-4 pr-6 py-3 bg-[#40507C]/30 text-left group hover:bg-[#40507C]/40 transition duration-300 ease-in-out">
                            <p className="text-white text-sm">Contact us</p>
                            <div className="mt-1 flex gap-6">
                                <p className="text-gray-500 text-xs">We&apos;d love to learn more</p>
                                <FaArrowRight className="text-white group-hover:translate-x-1 transition duration-300 ease-in-out" />
                            </div>
                        </button>
                    </Link>
                    <Link href="#work">
                        <button className="border border-white/5 rounded-md pl-4 pr-6 py-3 text-left group bg-gray-800/20 hover:bg-gray-800/30 transition duration-300 ease-in-out">
                            <p className="text-white text-sm">Recent work</p>
                            <div className="mt-1 flex gap-6">
                                <p className="text-gray-500 text-xs">Arnot Health Orthopedics</p>
                                <FaArrowRight className="text-white group-hover:translate-x-1 transition duration-300 ease-in-out" />
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="basis-5/12 text-white hidden md:flex justify-start items-center">
                <Holofoil />
            </div>
        </div>
    );
}
