import Image from "next/image";
import FeatureCard from "../widgets/FeatureCard";
import { BsStars } from "react-icons/bs";

export default function CMS() {
    return (
        <div className="relative bg-gradient-radial from-main-primary/10 to-transparent to-[60%]">
            <div className='mt-8 mx-auto w-fit flex items-center gap-2 border border-main-primary/10 bg-white/5 text-main-primary/100 px-4 py-2 rounded-full'>
                <BsStars className="rotate-90" />
                <p className="text-xs">coming soon</p>
            </div>
            <h2 className='mt-8 font-hind text-center text-gray-300/90 text-6xl'>
                Doctors rarely stand still.
            </h2>
            <h2 className='mt-2 font-hind text-center text-gray-300/90 text-6xl font-bold'>
                Neither do we.
            </h2>
            <div className='mt-20 flex flex-col md:flex-row gap-12'>
                <div className='basis-1/2'>
                    <FeatureCard>
                        <h3 className='pt-2 text-3xl text-gray-300/90 font-medium'>
                            White Coat CMS
                        </h3>
                        <p className='mt-6 text-sm font-light text-gray-300/90 leading-7'>
                            Our content management system (CMS) is designed specifically for doctors who need to quickly and easily add new information and resources to their site.
                        </p>
                        <Image
                            alt='example image of content management system'
                            src={"/cms-2.png"}
                            width={850}
                            height={497}
                            className="mt-4 absolute -bottom-[6%] left-[10%] opacity-90"
                        />
                    </FeatureCard>
                </div>

                <div className='basis-1/2'>
                    <FeatureCard>
                        <h3 className='pt-2 text-3xl text-gray-300/90 font-medium'>
                            AI Assistant
                        </h3>
                        <p className='mt-6 text-sm font-light text-gray-300/90 leading-7'>
                            Create reusable patient resources in a fraction of the time using our ChatGPT-powered, AI assistant. Write new content for treatment pages, PDFs, and more.
                        </p>
                        <Image
                            alt='using chatGPT to write medical content'
                            src={"/ai-7.png"}
                            width={500}
                            height={352}
                            quality={100}
                            className="absolute -bottom-[0%] opacity-90"
                        />
                    </FeatureCard>
                </div>
            </div>
            <div className="absolute bottom-0 w-full h-0 bg-gradient-to-t from-gray-950 from-[4%] to-transparent z-10"></div>
        </div>
    );
}
