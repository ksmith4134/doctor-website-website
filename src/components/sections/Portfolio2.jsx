import Image from "next/image";
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
                    We recently built a patient resources web app for Arnot
                    Health&apos;s orthopedics department. Check out some{" "}
                    <span className="font-bold">highlights below</span>{" "}or visit{" "}
                    <a
                        href='https://www.arnotortho.com'
                        className='text-sky-500 font-semibold underline underline-offset-4 decoration-1'
                    >
                        arnotortho.com
                    </a>
                </h5>
            </div>
            <div className='mt-20 flex items-center gap-16'>
                <div className="basis-3/12 mt-4 flex flex-col gap-12">
                    <div className="text-gray-300 pr-6">
                        <h5 className="font-semibold text-xl text-portfolio-primary">Skeletal Navigation</h5>
                        <p className="mt-1 font-light">Intuitive condition navigation using an interactive skeleton.</p>
                    </div>
                    <div className="text-gray-300 pr-6">
                        <h5 className="font-semibold text-xl text-portfolio-primary">Condition Pages</h5>
                        <p className="mt-1 font-light">Simple, yet full customizable condition pages in a wiki-style.</p>
                    </div>
                    <div className="text-gray-300 pr-6">
                        <h5 className="font-semibold text-xl text-portfolio-primary">Doctor Profiles</h5>
                        <p className="mt-1 font-light">Not your typical doctor profiles. Beautiful and extensive.</p>
                    </div>
                </div>
                <div className="basis-9/12 relative overflow-hidden w-full h-[400px] rounded-lg">
                    <Image alt="arnot health image" src={"/team-prof-2.jpg"} fill className="object-cover" />
                    <div className="absolute w-full h-full z-20 bg-gradient-to-b from-portfolio-primary/0 to-portfolio-primary/90 flex flex-col justify-between p-8">
                        <Image alt="arnot health hospital logo" src={'/portfolio/arnot/logo.svg'} width={180} height={200} className="opacity-0" />
                        <a href="https://www.arnotortho.com" className="text-2xl font-semibold text-white flex items-center gap-3 group">
                            View the site
                            <FaArrowRight className="group-hover:transition group-hover:translate-x-1 group-hover:duration-300 group-hover:ease-in-out" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
