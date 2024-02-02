"use client";

import Image from "next/image";
import ContactForm from "../forms/ContactForm";


export default function Contact() {

    return (
        <div className='rounded-3xl lg:border lg:border-gray-600/20 lg:bg-gray-600/5 overflow-hidden'>
            <div className={`w-full h-full lg:bg-noise lg:bg-repeat`}>
                <div className="lg:p-2 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20 lg:bg-custom-gradient-1">

                    {/* TESTIMONIAL */}
                    <div className='basis-7/12 p-0 lg:p-16 flex flex-col items-center gap-8'>
                        <h3 className='pt-4 lg:pt-0 text-3xl font-hind font-medium text-gray-300/90 text-center'>
                            Thank you Revere!
                        </h3>
                        <p className="max-w-xl text-md text-gray-300 text-center text-balance">&quot;Revere delivered a perfect website that has greatly benefited our physicians, advanced practice providers, and most importantly, our patients. Thank you, Revere, for your dedication to delivering a successful project!&quot;</p>
                        <Image alt="arnot health hospital logo" src={'/portfolio/arnot/logo.svg'} width={200} height={200} className="mt-4 opacity-80" />
                    </div>

                    {/* CONTACT FORM */}
                    <div className='mt-16 lg:mt-0 basis-5/12 shrink-0 rounded-2xl backdrop-blur-[64px] bg-white/5 border border-white/5 max-w-lg overflow-hidden'>
                        <div className="p-8 sm:p-12 w-full h-full rounded-2xl bg-noise bg-repeat">
                            <h3 className='text-3xl font-hind font-medium text-gray-300/90'>
                                Contact
                            </h3>
                            <p className='mt-6 text-sm text-gray-300/90 font-light'>
                                Fill out your name and email address below. We&apos;ll
                                reach out within one day to set up a call.
                            </p>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
