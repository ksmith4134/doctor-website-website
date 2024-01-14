import { portfolioProfileCredentials, portfolioProfileEducation } from "@/lib/cms";
import Image from "next/image";

export default function Profiles() {
    return (
        <div className='h-full flex justify-center items-start gap-20'>
            <div className='relative w-[460px] shrink-0 rounded-lg border border-portfolio-primary/20 bg-noise bg-repeat text-gray-200 overflow-hidden'>
                <div className="p-12 bg-portfolio-primary/10">
                    <h3 className="font-semibold text-2xl">Credentials</h3>
                    {portfolioProfileCredentials.map((item) => (
                        <div key={item.id} className="mt-8">
                            <h4 className="font-bold">{item.label}</h4>
                            {item.list.map((item) => (
                                <h5 key={item.id} className="mt-2 text-sm font-light">{item.label}</h5>
                            ))}
                        </div>
                    ))}
                    <Image alt="award icon" src={'/portfolio/arnot/award.svg'} width={80} height={80} className="absolute top-8 right-8" />
                </div>
            </div>
            <div className='w-full pt-12'>
                <h3 className="-ml-2 mb-10 font-semibold text-2xl text-gray-200">Education</h3>
                {portfolioProfileEducation.map((item) => (
                    <div key={item.id} className="mt-3 mb-2 last:pb-0 pb-8 border-l border-gray-400/30">
                        <div className="flex justify-start items-start gap-4">
                            <div className="-ml-[5px] w-2 h-2 bg-gray-300 rounded-full"></div>
                            <div className="-mt-2">
                                <h4 className="font-light text-gray-200">{item.label}</h4>
                                <h5 key={item.id} className="mt-1 font-light text-sm text-portfolio-primary">{item.link}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
