import Image from "next/image";
import CardLarge2 from "../widgets/CardLarge2";
import { BsStars } from "react-icons/bs";

export default function CMS() {
    return (
        <div className="relative bg-gradient-radial from-main-primary/20 to-transparent to-[60%]">
            <h2 className='font-hind text-center text-gray-200 text-5xl'>
                Doctors rarely stand still.
            </h2>
            <h2 className='mt-2 font-hind text-center text-gray-200 text-5xl font-bold'>
                Neither do we.
            </h2>
            <div className='mt-20 flex gap-12'>
                <div className='basis-1/2'>
                    <CardLarge2>
                        <div className='pt-2 flex justify-between items-center gap-2'>
                            <div>
                                {/* <h4 className='mt-1 text-sm text-gray-600 font-light'>
                                    Content Management
                                </h4> */}
                                <h3 className='text-3xl text-gray-200 font-semibold'>
                                    White Coat CMS
                                </h3>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-600/20 bg-white/5 text-white px-4 py-1.5 rounded-full'>
                                <BsStars className="rotate-90" />
                                <p className="text-xs">coming soon</p>
                            </div>
                        </div>
                        <p className='mt-8 text-sm font-extralight text-gray-300 leading-7'>
                            Our content management system (CMS) is designed specifically for doctors who need to quickly and easily add new information and resources to their site.
                        </p>
                        <Image
                            alt='example image of content management system'
                            src={"/cms-2.png"}
                            width={850}
                            height={497}
                            className="mt-4 absolute top-[49%] left-[8%]"
                        />
                    </CardLarge2>
                </div>

                <div className='basis-1/2'>
                    <CardLarge2>
                        <div className='pt-2 flex justify-between items-center gap-2'>
                            <div>
                                {/* <h4 className='mt-1 text-sm text-gray-600 font-light'>
                                    Content Creation
                                </h4> */}
                                <h3 className='text-3xl text-gray-200 font-semibold'>
                                    AI Assistant
                                </h3>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-600/20 bg-white/5 text-white px-4 py-1.5 rounded-full'>
                                <BsStars className="rotate-90" />
                                <p className="text-xs">coming soon</p>
                            </div>
                        </div>
                        <p className='mt-8 text-sm font-extralight text-gray-300 leading-7'>
                            Create reusable patient resources in a fraction of the time using our ChatGPT-powered, AI assistant. Write new content for treatment pages, PDFs, and more.
                        </p>
                        <Image
                            alt='using chatGPT to write medical content'
                            src={"/ai-7.png"}
                            width={520}
                            height={352}
                            quality={100}
                            className="absolute top-[52%]"
                        />
                    </CardLarge2>
                </div>
            </div>
            <div className="absolute bottom-0 w-full h-0 bg-gradient-to-t from-gray-950 from-[4%] to-transparent z-10"></div>
        </div>
    );
}
