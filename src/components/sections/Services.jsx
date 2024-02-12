import Image from "next/image";
import { codeToHtml } from "shiki";
import { code, conditionsGraphic } from "../../lib/cms";

import { FiPlay, FiMenu } from "react-icons/fi";
import { FaCircleInfo, FaArrowRight } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { BsFileEarmarkPdf, BsArrowDownSquareFill } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
import { RiOpenaiFill } from "react-icons/ri";
import FeatureColumn from "../widgets/FeatureColumn";
import { services } from "../../lib/cms";


export default function Services() {
    return (
        <>
            <div className='py-24 flex flex-col xl:flex-row justify-between items-center gap-16'>
                <div className='order-2 xl:order-1 max-w-lg xl:max-w-md w-full'>
                    <FeatureColumn service={services[0]} />
                </div>
                <div className='order-1 xl:order-2 max-w-xl xl:max-w-full w-full relative flex flex-col items-center sm:block'>
                    <div className='flex justify-center sm:justify-end'>
                        <ConditionPageGraphic />
                    </div>
                    <div className='mt-8 sm:mt-0 sm:absolute top-[22%] left-0 xl:left-10'>
                        <CodeBlockGraphic />
                    </div>
                </div>
            </div>
            <div className='py-24 flex flex-col xl:flex-row justify-between items-center gap-16'>
                <div className='order-2 max-w-lg xl:max-w-md w-full'>
                    <FeatureColumn service={services[1]} />
                </div>
                <div className='order-1 max-w-xl xl:max-w-full w-full relative flex flex-col items-center sm:block'>
                    <div className='flex justify-center sm:justify-start sm:h-[480px]'>
                        <CMSGraphic />
                    </div>
                    <div className='mt-8 sm:mt-0 sm:absolute bottom-0 xl:bottom-[1.5%] right-0 xl:left-[25%]'>
                        <ChatGPTGraphic />
                    </div>
                    <div className='hidden sm:block absolute z-10 top-14 left-[60%]'>
                        <PlayIcon />
                    </div>
                    <div className='hidden sm:block absolute z-10 bottom-14 left-[26%] xl:left-[17%]'>
                        <PDFIcon />
                    </div>
                </div>
            </div>
        </>
    );
}


const html = await codeToHtml(code, {
    lang: "javascript",
    theme: "nord",
});

function CodeBlockGraphic() {
    return (
        <div className='w-80 sm:w-96 rounded-xl backdrop-blur-3xl bg-gradient-radial from-main-secondary/10 to-white/5 border border-white/5 shadow-lg shadow-gray-950/20'>
            <div className='p-8 w-full h-full rounded-2xl bg-noise bg-repeat'>
                <div
                    className='text-xs sm:text-sm'
                    dangerouslySetInnerHTML={{
                        __html: html,
                    }}
                ></div>
            </div>
        </div>
    );
}

function ConditionPageGraphic() {
    return (
        <div className='w-80 rounded-xl backdrop-blur-3xl bg-gradient-radial from-main-secondary/30 to-main-secondary/10 border border-white/5 overflow-hidden'>
            <div className='p-2 w-full h-full bg-noise bg-repeat flex flex-col gap-3'>
                <div className='w-full px-4 py-3 rounded-lg bg-main-secondary/10 flex justify-between items-center text-gray-300/90'>
                    <div>
                        <p className='text-xs'>Rotator Cuff Tear</p>
                        <p className='text-sm font-medium'>Background</p>
                    </div>
                    <FiMenu className='w-6 h-6' />
                </div>
                <div className='w-full px-4 py-3 rounded-lg bg-main-secondary/20 text-2xl font-hind'>
                    <p className='text-xs text-gray-300/90'>
                        Injuries to the rotator cuff can be caused by overuse,
                        traumatic events such as falls or sports injuries, or
                        degenerative changes associated with aging.
                    </p>
                </div>
                <div className='w-full aspect-video px-4 py-3 rounded-lg relative overflow-hidden'>
                    <Image
                        alt='x-ray image'
                        src={"/portfolio/arnot/x-ray-2.jpg"}
                        fill={true}
                        className='object-cover opacity-80'
                    />
                </div>
                <div className='w-full px-4 py-3 rounded-lg bg-red-200/20 flex items-center gap-4'>
                    <FaCircleInfo className='w-8 h-8 text-red-400/80 shrink-0' />
                    <p className='text-xs text-gray-300/90'>
                        In case of an emergency, pelase call 911 or the Posion
                        Control Hotline at 1-800-222-1222
                    </p>
                </div>
            </div>
        </div>
    );
}

function CMSGraphic() {
    return (
        <div className='w-80 sm:w-96 h-fit rounded-xl bg-gradient-radial from-cyan-200/20 to-cyan-800/5 border border-white/5 overflow-hidden relative'>
            <div className='p-8 w-full h-full bg-noise bg-repeat'>
                <div className='flex justify-between items-center gap-4'>
                    <h3 className='shrink-0 text-md font-semibold text-gray-300/30'>
                        Conditions
                    </h3>
                    <div className='w-48 h-8 rounded-md p-2 bg-white/5 flex justify-start items-center gap-3'>
                        <IoSearchOutline className='w-4 h-4 text-gray-300/20' />
                        <p className='text-xs text-gray-300/20'>Search</p>
                    </div>
                </div>
                <div className='mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300/20'>
                    <div className='p-3 flex flex-col justify-center items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] h-20'>
                        <MdAddCircleOutline className='w-8 h-8' />
                        <p className='text-xs font-semibold'>Add</p>
                    </div>
                    {conditionsGraphic.map((item, index) => (
                        <div
                            key={item.id}
                            className={`${
                                index > 2 ? "flex xl:hidden" : "flex"
                            } p-3 flex-col justify-between items-start rounded-lg border border-white/5 bg-white/[0.02] h-20`}
                        >
                            <p className='text-xs font-medium'>
                                {item.label}
                            </p>
                            <div className='w-full flex justify-between items-center'>
                                <p className='text-xs'>View</p>
                                <FaArrowRight className='text-xs' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ChatGPTGraphic() {
    return (
        <div className='w-80 sm:w-96'>
            <div className='w-full h-14 rounded-lg backdrop-blur-3xl bg-gradient-radial from-main-secondary/5 to-white/5 border border-white/5 overflow-hidden shadow-lg shadow-gray-950/40'>
                <div className='p-4 w-full h-full bg-noise bg-repeat flex justify-between items-center gap-4'>
                    <p className='text-xs text-gray-300/60 italic'>
                        Write a conservative care plan for hyperthyroidism
                    </p>
                    <BsArrowDownSquareFill className='-mr-1 w-8 h-8 text-gray-300/20' />
                </div>
            </div>
            <div className='mt-2 w-full h-56 rounded-lg backdrop-blur-3xl bg-gradient-radial from-main-secondary/5 to-white/5 border border-white/5 overflow-hidden shadow-lg shadow-gray-950/40'>
                <div className='p-4 w-full h-full bg-noise bg-repeat flex items-start gap-4'>
                    <RiOpenaiFill className='w-8 h-8 text-gray-300/60 shrink-0' />
                    <div>
                        <h3 className='mt-1 text-md font-semibold text-gray-300/60'>
                            ChatGPT
                        </h3>
                        <p className='mt-4 text-xs text-gray-300/60 leading-normal'>
                            Conservative management for hyperthyroidism
                            typically involves medication, lifestyle
                            adjustments, and regular monitoring. However, please
                            note that treatment plans should be personalized and
                            supervised by a healthcare professional. Here&apos;s
                            a general conservative care plan:
                        </p>
                        <p className='mt-4 text-xs text-gray-300/60 font-semibold leading-normal'>
                            1. Medication:
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PlayIcon() {
    return (
        <div className='rounded-xl border border-white/5 shadow-inner shadow-white/5 backdrop-blur-lg bg-white/5 flex justify-center items-center w-20 h-20'>
            <FiPlay className='ml-2 w-10 h-10 text-gray-300/80' />
        </div>
    );
}

function PDFIcon() {
    return (
        <div className='rounded-xl border border-white/5 shadow-inner shadow-white/5 backdrop-blur-lg bg-white/5 flex justify-center items-center w-20 h-20'>
            <BsFileEarmarkPdf className='w-10 h-10 text-gray-300/80' />
        </div>
    );
}
