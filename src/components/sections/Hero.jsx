import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Holofoil from "../widgets/holofoil/Holofoil";

export default function Hero() {
    return (
        <div className="max-w-6xl mx-auto bg-gradient-radial from-white/10 to-transparent to-[60%]">
            <div className="pt-24 max-w-2xl mx-auto flex flex-col justify-center items-center gap-8">
                <Link href={'#innovation'} className="border border-gray-600/20 bg-white/5 text-white px-4 py-1 text-xs rounded-full">
                    See how we&apos;re bringing AI to patient documentation
                </Link>
                <h1 className="mt-2 font-hind text-center font-semibold text-5xl leading-snug text-gray-200">Building better websites for doctors & their patients</h1>
                <div className="mt-8">
                    <Holofoil />
                </div>
            </div>
        </div>
    );
}

// <div className="pt-24 flex justify-start items-center gap-24">
//     <div className="md:basis-7/12 -mt-8">
//         <h1 className="font-hind font-semibold text-5xl leading-snug text-gray-200">Building better websites for doctors & their patients</h1>
//         <div className="mt-6 flex gap-8">
//             <Link href="#work">
//                 <button className="border border-white/5 rounded-lg pl-6 pr-6 py-4 text-left group bg-gray-800/20 hover:bg-gray-800/30 transition duration-300 ease-in-out">
//                     <p className="text-gray-100 text-md">Recent work</p>
//                     <div className="mt-1 flex gap-6">
//                         <p className="text-gray-500 text-xs">Arnot Health Orthopedics</p>
//                         <FaArrowRight className="text-white group-hover:translate-x-1 transition duration-300 ease-in-out" />
//                     </div>
//                 </button>
//             </Link>
//             <Link href="#contact">
//                 <button className="border border-white/5 rounded-lg pl-6 pr-6 py-4 bg-[#565A67]/20 text-left group hover:bg-[#565A67]/40 transition duration-300 ease-in-out">
//                     <p className="text-gray-100 text-md">Contact us</p>
//                     <div className="mt-1 flex gap-6">
//                         <p className="text-gray-500 text-xs">We&apos;d love to learn more</p>
//                         <FaArrowRight className="text-white group-hover:translate-x-1 transition duration-300 ease-in-out" />
//                     </div>
//                 </button>
//             </Link>
//         </div>
//     </div>
//     <div className="basis-5/12 text-white hidden md:flex justify-start items-center">
//         <Holofoil />
//     </div>
// </div>