import Link from "next/link";
import Holofoil from "../widgets/holofoil/Holofoil";

export default function Hero() {
    return (
        <div className="max-w-6xl mx-auto bg-gradient-radial from-white/10 to-transparent to-[60%]">
            <div className="pt-24 max-w-4xl mx-auto flex flex-col justify-center items-center gap-8">
                <Link href={'#innovation'} className="border border-gray-600/20 bg-white/5 text-white px-4 py-1.5 text-xs rounded-full">
                   Bringing AI to patient documentation
                </Link>
                <h1 className="mt-2 font-hind text-center font-semibold text-6xl leading-snug text-gray-200">Building better websites for doctors & their patients</h1>
                <div className="mt-8">
                    <Holofoil />
                </div>
            </div>
        </div>
    );
}