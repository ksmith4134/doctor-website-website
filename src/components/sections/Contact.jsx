"use client";

import Image from "next/image";
import ContactForm from "../forms/ContactForm";


export default function Contact() {

    return (
        <div className='rounded-3xl border border-gray-600/20 bg-gray-600/5 overflow-hidden'>
            <div className={`w-full h-full bg-noise bg-repeat`}>
                <div className="p-2 flex justify-between items-center gap-20 bg-custom-gradient-1">

                    {/* TESTIMONIAL */}
                    <div className='basis-7/12 p-8 text-center flex flex-col items-center'>
                        <Image alt="quotation mark icon" src={"/quote-5.png"} width={60} height={93} />
                        <p className="mt-12 text-lg text-gray-300 font-light text-balance">Revere delivered a perfect website that has greatly benefited our physicians, advanced practice providers, and patients. Thank you, Revere, for your dedication to this project!</p>
                        <Image alt="arnot health hospital logo" src={'/portfolio/arnot/logo.svg'} width={200} height={200} className="mt-12 mx-auto opacity-80" />
                    </div>

                    {/* CONTACT FORM */}
                    <div className='basis-5/12 rounded-2xl backdrop-blur-[64px] bg-white/5 border border-white/5 overflow-hidden'>
                        <div className="p-12 w-full h-full rounded-2xl bg-noise bg-repeat">
                            <h3 className='text-3xl font-hind font-semibold text-gray-200'>
                                Contact
                            </h3>
                            <p className='mt-6 text-sm text-gray-200 font-light'>
                                Fill out your name and email address below.<br />We&apos;ll
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
