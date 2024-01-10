import Image from "next/image";
import CardLarge from "../widgets/CardLarge";
import { BsStars } from "react-icons/bs";

export default function CMS() {
    return (
        <div className="relative">
            <h2 className='font-hind text-center text-gray-200 text-5xl'>
                Doctors rarely stand still.
            </h2>
            <h2 className='mt-2 font-hind text-center text-gray-200 text-5xl font-bold'>
                Neither do we.
            </h2>
            <div className='mt-20 flex gap-12'>
                <div className='basis-1/2'>
                    <CardLarge>
                        <div className='flex justify-between items-start gap-2'>
                            <div>
                                <h4 className='mt-1 text-sm text-gray-600 font-light'>
                                    Content Management
                                </h4>
                                <h3 className='mt-4 text-3xl text-gray-200 font-semibold'>
                                    White Coat CMS
                                </h3>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-600/20 bg-white/5 text-white px-4 py-1.5 rounded-full'>
                                <BsStars className="rotate-90" />
                                <p className="text-xs">coming soon</p>
                            </div>
                        </div>
                        <p className='mt-8 font-light text-gray-200 leading-7'>
                            Our content management system (CMS) is designed specifically for doctors who need to quickly and easily add new information and resources to their site.
                        </p>
                        <Image
                            alt='example image of content management system'
                            src={"/cms.png"}
                            width={850}
                            height={497}
                            className="absolute top-[51%] left-[8%]"
                        />
                    </CardLarge>
                </div>

                <div className='basis-1/2'>
                    <CardLarge>
                        <div className='flex justify-between items-start gap-2'>
                            <div>
                                <h4 className='mt-1 text-sm text-gray-600 font-light'>
                                    Content Creating
                                </h4>
                                <h3 className='mt-4 text-3xl text-gray-200 font-semibold'>
                                    AI Writing Assistant
                                </h3>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-600/20 bg-white/5 text-white px-4 py-1.5 rounded-full'>
                                <BsStars className="rotate-90" />
                                <p className="text-xs">coming soon</p>
                            </div>
                        </div>
                        <p className='mt-8 font-light text-gray-200 leading-7'>
                            Create reusable patient resources in a fraction of the time using White Coat&apos;s ChatGPT-powered, AI assistant. Write new content for treatment and condition pages, create new PDFs, and much more.
                        </p>
                        <Image
                            alt='using chatGPT to write medical content'
                            src={"/ai.png"}
                            width={520}
                            height={352}
                            className="absolute bottom-[0%]"
                        />
                    </CardLarge>
                </div>
            </div>
            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-gray-950 to-transparent z-10">

            </div>
        </div>
    );
}
