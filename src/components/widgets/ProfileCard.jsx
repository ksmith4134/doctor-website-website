import Image from "next/image";
import { GRADIENT_COLORS } from "@/lib/theme";

export default function ProfileCard(props) {

    const {
        profilePic,
        name,
        title,
        picAltText,
        gradientColor = "gray",
    } = props;

    const gradient = GRADIENT_COLORS.GROUP_HOVER_FROM[gradientColor];

    return (
        <div className='w-full h-full bg-noise bg-repeat rounded-3xl border border-gray-600/20 overflow-hidden group'>
            {/* BG GRADIENT */}
            <div className={`absolute w-full h-full top-0 bg-gradient-radial from-gray-400/20 ${gradient} to-transparent to-[90%]`}></div>
            <div className='p-2 w-full h-full bg-gray-600/10 group-hover:bg-gray-600/20'>
                {/* IMAGE */}
                <div className='z-10 relative w-full h-72'>
                    {profilePic ? 
                        <Image
                            alt={picAltText}
                            src={profilePic}
                            fill={true}
                            className='object-cover grayscale-[0%] group-hover:grayscale-0 transition duration-300 ease-in-out rounded-2xl'
                        /> : 
                        <div className="bg-gray-600/40 h-full w-full rounded-2xl backdrop-blur-2xl"></div>
                    }
                </div>
                {/* TEXT */}
                <div className='px-2 pb-3 mt-5'>
                    <p className='mt-4 font-bold text-gray-200'>
                        {name}
                    </p>
                    <p className='mt-1 text-sm text-gray-400 font-light'>
                        {title}
                    </p>
                </div>
            </div>
        </div>
);
}
