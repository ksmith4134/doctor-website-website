import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Holofoil from "../widgets/holofoil/Holofoil";

export default function Hero() {
    return (
        <div className="pt-24 flex justify-start items-center gap-24">
            <div className="md:basis-7/12">
                <h1 className="font-hind font-semibold text-5xl leading-snug text-white">Building better websites for doctors & their patients</h1>
                <div className="mt-6 flex gap-8">
                    <Link href="#work">
                        <button className="border border-white/5 rounded pl-4 pr-6 py-3 text-left group">
                            <p className="text-white text-sm">Case study</p>
                            <div className="mt-1 flex gap-6">
                                <p className="text-gray-600 text-xs">Arnot Health Orthopedics</p>
                                <FaArrowRight className="text-white group-hover:translate-x-1 transition duration-300 ease-in-out" />
                            </div>
                        </button>
                    </Link>
                    <Link href="#contact">
                        <button className="border border-white/5 rounded pl-4 pr-6 py-3 bg-white/5 text-left group">
                            <p className="text-white text-sm">Contact us</p>
                            <div className="mt-1 flex gap-6">
                                <p className="text-gray-600 text-xs">Submit a quick form</p>
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
