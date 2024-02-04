"use client";

import Image from "next/image";
import ContactForm from "../forms/ContactForm";
import logo from "../../../public/portfolio/arnot/logo.svg"

export default function Contact() {
    return (
        <div className=''>
            <div className={``}>
                <div className='flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-12'>
                    {/* TESTIMONIAL */}
                    <div className='order-2 md:order-1 mt-16 md:mt-0 basis-6/12 rounded-2xl bg-custom-gradient-1 border border-white/5 overflow-hidden'>
                        <div className="flex flex-col justify-center items-start gap-12 p-12 w-full h-full bg-noise bg-repeat">
                            <p className='max-w-xl text-xl text-gray-300 leading-relaxed font-light text-balance'>
                                &quot;Revered delivered a perfect website that has
                                greatly benefited our physicians, advanced practice
                                providers, and most importantly, our patients. Thank
                                you, Revered, for your dedication to delivering a
                                successful project!&quot;
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="h-px w-6 bg-portfolio-primary"></div>
                                <p className="text-portfolio-primary text-lg italic">Arnot Health Orthopedics</p>
                            </div>
                            {/* <Image
                                alt='arnot health hospital logo'
                                src={logo}
                                width={180}
                                style={{ height: "auto" }}
                                className='opacity-20'
                            /> */}
                        </div>
                    </div>

                    {/* CONTACT FORM */}
                    <div className='order-1 md:order-2 md:p-8 basis-6/12'>
                        <h3 className='text-3xl font-hind font-medium text-gray-300/90'>
                            Contact
                        </h3>
                        <p className='mt-6 text-sm text-gray-300/90 font-light'>
                            Fill out your name and email address below.
                            We&apos;ll reach out within one day to set up a
                            call.
                        </p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
