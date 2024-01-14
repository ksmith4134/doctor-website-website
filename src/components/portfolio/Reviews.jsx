import { portfolioReviews } from "@/lib/cms";
import Image from "next/image";
import { useState } from "react";

export default function Reviews() {
    const [selected, setSelected] = useState(0);

    return (
        <div className='h-full flex justify-center items-start gap-8'>
            <div className='basis-4/12 mt-0 flex flex-col gap-4'>
                {portfolioReviews.map((doctor) => (
                    <div
                        key={doctor.id}
                        onClick={() => setSelected(doctor.id)}
                        className={`p-3 flex items-center gap-4 rounded-lg border ${
                            selected === doctor.id
                                ? "grayscale-0 border-portfolio-primary/20 bg-portfolio-primary/10 text-gray-200 shadow-inner shadow-white/5"
                                : "grayscale hover:grayscale-0 border-transparent text-gray-600 hover:text-gray-400 hover:cursor-pointer"
                        }`}
                    >
                        <Image
                            alt='doctor profile picture'
                            src={doctor.imageUrl}
                            width={60}
                            height={60}
                            quality={100}
                            className={`${selected === doctor.id ? "" : ""}`}
                        />
                        <div>
                            <h3 className='font-bold'>{doctor.name}</h3>
                            <h5 className='text-sm font-light'>{doctor.condition}</h5>
                        </div>
                    </div>
                ))}
            </div>
            <div className='basis-8/12 rounded-lg border border-portfolio-primary/30 text-gray-200 bg-noise bg-repeat overflow-hidden'>
                <div className="p-12 flex flex-col justify-between gap-2 bg-portfolio-primary/10 shadow-inner shadow-white/5">
                    <div>
                        <h3 className="text-lg font-bold">{portfolioReviews[selected].review.title}</h3>
                        <Image alt="review stars" src={'/portfolio/arnot/review-stars.png'} width={110} height={15} className="mt-2" /> {/* 157 x 21 */}
                        <p className="mt-6 font-extralight">{portfolioReviews[selected].review.body}</p>
                    </div>
                    <div className="mt-8 flex items-center gap-4">
                        <Image
                            alt='knee icon'
                            src={portfolioReviews[selected].review.icon}
                            width={44}
                            height={44}
                        />
                        <div>
                            <p className="font-bold">{portfolioReviews[selected].review.initials}</p>
                            <p className="text-sm font-light">{portfolioReviews[selected].review.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
