import { profiles } from "../../lib/cms";
import ProfileCard from "@/components/widgets/ProfileCard";

export default function About() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h3 className='text-gray-500 text-lg'>About Us</h3>
            <h2 className='mt-4 font-hind text-center text-gray-300/90 text-6xl text-balance'>
                Doctors rarely stand still.
            </h2>
            <h2 className='mt-4 md:mt-2 font-hind text-center text-gray-300/90 text-6xl font-semibold text-balance'>
                Neither do we.
            </h2>
            <div className='mt-16 max-w-4xl w-full flex flex-col items-center md:flex-row gap-8 md:gap-4'>
                {profiles.map((item) => (
                    <div key={item.id} className='relative w-80'>
                        <ProfileCard
                            profilePic={item.profilePic}
                            name={item.name}
                            title={item.title}
                            picAltText={item.picAltText}
                            gradientColor={item.gradientColor}
                        />
                    </div>
                ))}
            </div>
            <p className='mt-16 text-center text-gray-300/90 text-lg text-balance max-w-2xl'>
                Revered was founded by brothers Kevin and David Smith. They
                share a combined experience of over 20 years in web design and
                development.
            </p>
            <p className='mt-8 text-center text-gray-300/90 text-lg text-balance max-w-2xl'>
                They reside with their families in Greater Rochester, NY - a
                city world renowned for its healthcare education and hospital
                systems.
            </p>
        </div>
    );
}
