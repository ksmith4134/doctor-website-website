import MaxWidth from "@/components/utils/MaxWidth";
import {
    FiPenTool,
    FiCode,
    FiCamera,
    FiUser,
    FiFolder,
    FiPlay,
    FiMenu,
} from "react-icons/fi";
import { FaCircleInfo } from "react-icons/fa6";
import { IoAccessibilityOutline } from "react-icons/io5";
import { BsFileEarmarkPdf } from "react-icons/bs";
import ProfileCard from "@/components/widgets/ProfileCard";
import davidProfilePic from "../../public/david.jpg";
import kevinProfilePic from "../../public/kevin.jpg";
import ContactForm from "../components/forms/ContactForm";
import { codeToHtml } from "shiki";
import Image from "next/image";

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
    {
        id: 2,
        profilePic: null,
        name: "Dr. Doogie Howser",
        title: "Medical Advisor, Prodigy",
        picAltText: "profile picture of company medical advisor, Doogie Howser",
        gradientColor: "amber",
    },
];

const code = `try {
    const data = await sendMail();
    const response = data.json();
    if(response.ok){
        setSuccess({message: 'Welcome!'})
    } else {
        throw new Error();
    }
} catch (err) {
    console.log('Please try again.');
}
`;

const html = await codeToHtml(code, {
    lang: "javascript",
    theme: "nord",
});

export default function Home() {
    return (
        <main>
            <div id='hero'>
                <MaxWidth>
                    <div className='relative -mt-10 -mb-24 min-h-screen flex flex-col justify-center items-center gap-6'>
                        <h1 className='font-hind text-6xl leading-tight text-gray-300/90 text-balance text-center'>
                            Building better websites for{" "}
                            <span className='font-semibold'>
                                doctors & their patients
                            </span>
                        </h1>
                        <h2 className='text-xl text-gray-300/90'>
                            From small private practices to large hospitals
                        </h2>
                        <ContactForm />
                    </div>
                </MaxWidth>
            </div>
            <div id='services'>
                <MaxWidth>
                    <div className='py-24 flex justify-between items-center gap-16'>
                        <div className='max-w-md w-full text-gray-300/90'>
                            <h2 className='font-hind text-4xl font-bold leading-snug'>
                                Design & Development
                            </h2>
                            <div className='mt-12 flex items-start gap-6'>
                                <FiPenTool className='shrink-0 w-6 h-6' />
                                <div className=''>
                                    <h3 className='-mt-0.5 text-lg font-semibold'>
                                        Collaborative design process
                                    </h3>
                                    <p className='mt-2 font-light'>
                                        Leave feedback and comment on new
                                        designs in real-time. Get a
                                        picture-perfect site.
                                    </p>
                                </div>
                            </div>
                            <div className='mt-10 flex items-start gap-6'>
                                <FiCode className='shrink-0 w-6 h-6' />
                                <div className=''>
                                    <h3 className='-mt-0.5 text-lg font-semibold'>
                                        No vendor lock-in
                                    </h3>
                                    <p className='mt-2 font-light'>
                                        Each site is coded using popular
                                        programming languages & tools. You own
                                        everything.
                                    </p>
                                </div>
                            </div>
                            <div className='mt-10 flex items-start gap-6'>
                                <IoAccessibilityOutline className='shrink-0 w-6 h-6' />
                                <div className=''>
                                    <h3 className='-mt-0.5 text-lg font-semibold'>
                                        Accessibility for all
                                    </h3>
                                    <p className='mt-2 font-light'>
                                        Accessibility to meet the needs of every
                                        demographic.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full relative'>
                            <div className='flex justify-end'>
                                <div className='w-80 rounded-2xl backdrop-blur-3xl bg-gradient-radial from-main-secondary/30 to-main-secondary/10 border border-white/5 overflow-hidden'>
                                    <div className='p-2 w-full h-full bg-noise bg-repeat flex flex-col gap-3'>
                                        <div className='w-full px-4 py-3 rounded-lg bg-main-secondary/10 flex justify-between items-center text-gray-300/90'>
                                            <div>
                                                <p className='text-xs'>
                                                    ACL Tear
                                                </p>
                                                <p className='text-sm font-medium'>
                                                    Background
                                                </p>
                                            </div>
                                            <FiMenu className='w-6 h-6' />
                                        </div>
                                        <div className='w-full px-4 py-3 rounded-lg bg-main-secondary/20 text-2xl font-hind'>
                                            <p className='text-xs text-gray-300/90'>
                                                An ACL injury is a tear or
                                                sprain of the anterior cruciate
                                                ligament. It is a common sports
                                                injury that occurs when the knee
                                                is twisted or impacted.
                                            </p>
                                        </div>
                                        <div className='w-full aspect-video px-4 py-3 rounded-lg relative overflow-hidden'>
                                            <Image
                                                alt='x-ray image'
                                                src={
                                                    "/portfolio/arnot/x-ray-2.jpg"
                                                }
                                                fill={true}
                                                className='object-cover'
                                            />
                                        </div>
                                        <div className='w-full px-4 py-3 rounded-lg bg-white/10 flex items-center gap-4'>
                                            <FaCircleInfo className='w-8 h-8 text-red-400/80 shrink-0' />
                                            <p className='text-xs text-gray-300/90'>
                                                In case of an emergency, pelase
                                                call 911 or the Posion Control
                                                Hotline at 1-800-222-1222
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='absolute top-[25%] left-10 w-96 h-72'>
                                <div className='w-full h-full rounded-xl backdrop-blur-3xl bg-gradient-radial from-main-secondary/5 to-white/5 border border-white/5 overflow-hidden shadow-lg shadow-gray-950/20'>
                                    <div className='p-8 w-full h-full rounded-2xl bg-noise bg-repeat'>
                                        <div
                                            className='text-sm'
                                            dangerouslySetInnerHTML={{
                                                __html: html,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidth>
                <MaxWidth>
                    <div className='py-24 flex justify-between items-center gap-16'>
                        <div className='w-full relative'>
                            <div className='flex justify-start h-[480px]'>
                                <div className='w-96 h-72 rounded-xl bg-gradient-radial from-main-secondary/30 to-main-secondary/5 border border-white/5 overflow-hidden'>
                                    <div className='p-8 w-full h-full bg-noise bg-repeat'></div>
                                </div>
                            </div>
                            <div className='absolute bottom-[0%] right-10 w-96 h-72'>
                                <div className='w-full h-full rounded-xl backdrop-blur-3xl bg-gradient-radial from-main-secondary/5 to-white/5 border border-white/5 overflow-hidden shadow-lg shadow-gray-950/20'>
                                    <div className='p-8 w-full h-full bg-noise bg-repeat'></div>
                                </div>
                            </div>
                            <div className='absolute z-10 top-14 right-[26%] flex justify-center items-center'>
                                <div className='rounded-full border border-white/5 shadow-inner shadow-white/5 backdrop-blur-lg bg-white/5 flex justify-center items-center w-20 h-20'>
                                    <FiPlay className='ml-2 w-10 h-10 text-gray-300/80' />
                                </div>
                            </div>
                            <div className='absolute z-10 bottom-14 left-[19%] flex justify-center items-center'>
                                <div className='rounded-xl border border-white/5 shadow-inner shadow-white/5 backdrop-blur-lg bg-white/5 flex justify-center items-center w-20 h-20'>
                                    <BsFileEarmarkPdf className='w-10 h-10 text-gray-300/80' />
                                </div>
                            </div>
                        </div>
                        <div className='max-w-md w-full text-gray-300/90'>
                            <h2 className='font-hind text-4xl font-bold leading-snug'>
                                Content Management
                            </h2>
                            <div className='mt-12 flex items-start gap-6'>
                                <FiCamera className='shrink-0 w-6 h-6' />
                                <div className=''>
                                    <h3 className='-mt-0.5 text-lg font-semibold'>
                                        Storyboard, capture, and edit
                                    </h3>
                                    <p className='mt-2 font-light'>
                                        We work with photographers and
                                        videographers to help deliver
                                        profressional content
                                    </p>
                                </div>
                            </div>
                            <div className='mt-10 flex items-start gap-6'>
                                <FiUser className='shrink-0 w-6 h-6' />
                                <div className=''>
                                    <h3 className='-mt-0.5 text-lg font-semibold'>
                                        Patient education resources
                                    </h3>
                                    <p className='mt-2 font-light'>
                                        Document creation for protocols,
                                        treatments, & more.
                                    </p>
                                </div>
                            </div>
                            <div className='mt-10 flex items-start gap-6'>
                                <FiFolder className='shrink-0 w-6 h-6' />
                                <div className=''>
                                    <h3 className='-mt-0.5 text-lg font-semibold'>
                                        Quickly add content to your site
                                    </h3>
                                    <p className='mt-2 font-light'>
                                        A custom-tailored Content Management
                                        System (CMS) makes it easy for anyone on
                                        your team to upload new content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidth>
            </div>
            <div id='work'>
                <MaxWidth>
                    <div className='py-24 flex flex-col items-center'>
                        <div className='flex flex-col items-center text-center'>
                            <h3 className='text-gray-500 text-lg'>Our Work</h3>
                            <h1 className='mt-4 font-hind text-6xl leading-tight text-gray-300/90'>
                                Arnot Health Orthopedics
                            </h1>
                            <h5 className='mt-4 text-lg text-gray-300/90 leading-relaxed text-balance'>
                                Arnot Health&apos;s orthopedics department
                                reached out to us to build a patient resource
                                web app. Check out some highlights below or
                                click to learn more.
                            </h5>
                        </div>
                        <div className='mt-12 w-96 h-12 rounded-full backdrop-blur-3xl bg-gradient-radial from-main-secondary/5 to-white/5 border border-white/5 shadow-inner shadow-white/5 overflow-hidden'>
                            <div className='px-8 py-1 w-full h-full rounded-2xl bg-noise bg-repeat flex justify-between items-center gap-8 text-sm text-gray-300/90'>
                                <p>Navigation</p>
                                <p className='w-full h-full rounded-full backdrop-blur-lg flex justify-center items-center bg-gradient-radial from-white/10'>
                                    Education
                                </p>
                                <p>Profiles</p>
                            </div>
                        </div>
                        <div className='mt-8 max-w-4xl w-full aspect-video rounded-xl backdrop-blur-3xl bg-gradient-radial from-main-secondary/5 to-white/5 border border-white/5 overflow-hidden'>
                            <div className='p-8 w-full h-full rounded-2xl bg-noise bg-repeat'>
                                <code className='text-gray-300/60'></code>
                            </div>
                        </div>
                    </div>
                    <div className='pb-24 flex justify-center items-center gap-16'>
                        <div className='flex flex-col justify-center items-center gap-8'>
                            <p className='max-w-3xl text-xl text-center text-gray-300 leading-relaxed font-light text-balance'>
                                &quot;Revered delivered a perfect website that
                                has greatly benefited our physicians, advanced
                                practice providers, and most importantly, our
                                patients. Thank you, Revered, for your
                                dedication to delivering a successful
                                project!&quot;
                            </p>
                            <div className='flex items-center gap-4'>
                                <div className='h-px w-6 bg-portfolio-primary'></div>
                                <p className='text-portfolio-primary text-lg italic'>
                                    Arnot Health Orthopedics
                                </p>
                            </div>
                        </div>
                    </div>
                </MaxWidth>
            </div>
            <div id='about'>
                <MaxWidth>
                    <div className='py-24 flex flex-col justify-center items-center'>
                        <h3 className='text-gray-500 text-lg'>About Us</h3>
                        <h2 className='mt-4 font-hind text-center text-gray-300/90 text-6xl text-balance'>
                            Doctors rarely stand still.
                        </h2>
                        <h2 className='mt-4 md:mt-2 font-hind text-center text-gray-300/90 text-6xl font-semibold text-balance'>
                            Neither do we.
                        </h2>
                        <div className='mt-16 max-w-4xl w-full flex flex-col sm:flex-row gap-4'>
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
                            Revered was founded by brothers Kevin and David
                            Smith. They share a combined experience of over 20
                            years in web design and development.
                        </p>
                        <p className='mt-8 text-center text-gray-300/90 text-lg text-balance max-w-2xl'>
                            They reside with their families in Greater
                            Rochester, NY - a city world renowned for its
                            healthcare education and hospital systems.
                        </p>
                    </div>
                </MaxWidth>
            </div>
            <div id='contact'>
                <MaxWidth>
                    <div className='py-24 flex flex-col justify-center items-center'>
                        <h1 className='mt-4 font-hind text-6xl leading-tight text-gray-300/90'>
                            Contact us
                        </h1>
                        <ContactForm />
                    </div>
                </MaxWidth>
            </div>
        </main>
    );
}
