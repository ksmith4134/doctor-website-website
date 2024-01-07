import Image from "next/image";
import { portfolioPhotography } from "@/lib/cms";

export default function Photography() {
    return (
        <div className='w-full h-full grid grid-cols-4 grid-flow-row gap-8 overflow-hidden'>
            {portfolioPhotography.map((photo, index) => (
                <div
                    key={photo.id}
                    className={`relative ${index === 5 && "col-span-2"}`}
                >
                    <Image
                        alt='doctor collage photo'
                        src={photo.imageUrl}
                        fill={true}
                        quality={100}
                        className='object-cover rounded-lg'
                    />
                </div>
            ))}
        </div>
    );
}
