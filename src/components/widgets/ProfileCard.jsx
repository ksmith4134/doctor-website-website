import Image from "next/image";
import { GRADIENT_COLORS, ICONS } from "@/lib/theme";

export default function ProfileCard(props) {

    const {
        profilePic,
        icon,
        name,
        title,
        picAltText,
        gradientColor = "gray",
        animate = false,
    } = props;

    const gradient = GRADIENT_COLORS.GROUP_HOVER_FROM[gradientColor];
    const Icon = icon && ICONS[icon];

    return (
        <div className='w-full h-full bg-noise bg-repeat rounded-3xl border border-gray-600/20 overflow-hidden group'>
            {/* BG GRADIENT */}
            <div className={`absolute w-full h-full top-0 bg-gradient-radial from-gray-400/20 ${animate && 'group-hover:animate-pulse'} ${gradient} to-transparent to-[90%]`}></div>
            <div className='p-2 w-full h-full bg-gray-600/10 group-hover:bg-gray-600/20'>
                {/* IMAGE */}
                <div className='z-10 relative w-full h-72 md:h-48 lg:h-72'>
                    {profilePic ? 
                        <Image
                            alt={picAltText}
                            src={profilePic}
                            fill={true}
                            className='object-cover opacity-80 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0 transition duration-500 ease-in-out rounded-2xl'
                        /> : 
                        <div className="bg-gray-600/40 h-full w-full rounded-2xl backdrop-blur-2xl"></div>
                    }
                    { icon && (
                        <div className="absolute z-20 top-0 left-0 w-full h-full flex justify-center items-center">
                            <Icon className="text-6xl text-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                        </div>
                    )}
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
