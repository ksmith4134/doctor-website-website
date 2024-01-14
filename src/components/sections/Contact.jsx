"use client";

import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa6";
import ContactForm from "../forms/ContactForm";


export default function Contact() {

    return (
        <div className='p-px rounded-4xl border border-gray-600/20 bg-noise bg-repeat overflow-hidden'>
            <div className={`w-full h-full p-2 bg-gray-600/5`}>
                <div className="flex justify-between items-center gap-20">

                    {/* TESTIMONIAL */}
                    <div className='basis-7/12 p-16 bg-gradient-radial from-white/10 to-transparent to-[60%] text-center'>
                        <FaQuoteRight className="text-5xl text-white/30 mx-auto" />
                        <h2 className="mt-10 font-hind text-2xl font-extrabold text-gray-200">The team at Revere has done an incredible job!</h2>
                        <p className="mt-6 font-thin text-gray-200">Revere delivered a perfect website that has greatly benefited our patients. After each deliverable the team came away with expectations completely exceeded. Thank you to Kevin and David for their dedication to this project!</p>
                        {/* <p className="mt-6 text-sm font-thin text-gray-400 italic">- Arnot Health Orthopedics</p> */}
                        <Image alt="arnot health hospital logo" src={'/portfolio/arnot/logo.svg'} width={180} height={200} className="mt-12 mx-auto opacity-80" />
                    </div>

                    {/* CONTACT FORM */}
                    <div className='basis-5/12 px-12 py-14 bg-gray-400/10 rounded-3xl'>
                        <h3 className='text-3xl font-hind font-semibold text-gray-200'>
                            Contact
                        </h3>
                        <p className='mt-6 text-sm text-gray-200 font-light'>
                            Fill out your name and email address below.<br />We&apos;ll
                            reach out within one business day to set up a call.
                        </p>
                        <ContactForm />
                    </div>

                </div>
            </div>
        </div>
    );
}
