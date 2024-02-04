import davidProfilePic from "../../../public/david.jpg";
import kevinProfilePic from "../../../public/kevin.jpg";
import ProfileCard from "../widgets/ProfileCard";

const profiles = [
    {
        id: 0, 
        profilePic: davidProfilePic, 
        name: "David Smith",
        title: "Founder, Design Engineer",
        picAltText: "profile picture of company founder, David Smith",
        gradientColor: "teal",
    },
    {
        id: 1, 
        profilePic: kevinProfilePic, 
        name: "Kevin Smith",
        title: "Founder, Software Engineer",
        picAltText: "profile picture of company founder, Kevin Smith",
        gradientColor: "red",
    },
    // {
    //     id: 2, 
    //     profilePic: null, 
    //     name: "Dr. Jared Smith",
    //     title: "Medical Advisor, Surgeon",
    //     picAltText: "profile picture of company medical advisor, Jared Smith",
    //     gradientColor: "gray",
    // },
];

export default function About() {
    return (
        <div className='flex items-center gap-8'>
            <div className="basis-5/12 flex flex-col items-start gap-8">
                <h2 className='font-hind text-6xl leading-tight text-gray-300 text-center'>
                    About Us
                </h2>
                <p className='text-gray-200 font-extralight text-balance max-w-xl'>
                    Revered was founded by brothers Kevin and David Smith.
                    They share a combined experience of over 20 years in web
                    design and development.
                </p>
                <p className='text-gray-200 font-extralight text-balance max-w-xl'>
                    They reside with their families in
                    Greater Rochester, NY - a city world renowned for its
                    healthcare education and hospital systems.
                </p>
            </div>
            <div className='basis-7/12 shrink-0 flex flex-col sm:flex-row gap-8'>
                {profiles.map((item) => (
                    <div key={item.id} className="relative basis-1/2">
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
        </div>
    );
}
