import Image from "next/image";
import award from "../../../public/portfolio/arnot/award.svg";

const credentials = [
    {
        id: 0,
        label: "Boards",
        list: [{ id: 0, label: "American Board of Orthopedic Surgery" }],
    },
    { id: 1, label: "Licensed", list: [{ id: 0, label: "New York" }] },
    {
        id: 2,
        label: "Professional Organizations",
        list: [{ id: 0, label: "American Academy of Orthopedic Surgeons" }],
    },
    {
        id: 3,
        label: "Awards & Recognitions",
        list: [{ id: 0, label: "Alpha Omega Alpha Honor Medical Society" }],
    },
];

const education = [
    { id: 0, label: "BS, Biology", link: "Syracuse University" },
    { id: 1, label: "MD", link: "Syracuse University" },
    {
        id: 2,
        label: "Residency, Orthopedic Surgery",
        link: "SUNY Upstate Medical University",
    },
    {
        id: 3,
        label: "Fellowship, Sports Medicine",
        link: "Orthopaedic Research Institute",
    },
    { id: 4, label: "Attending Physician", link: "Arnot Ogden Medical Center" },
];

export default function Profile() {
    return (
        <div className='w-full h-full flex justify-between items-start gap-12'>
            <div className='relative basis-7/12 rounded-lg border border-cyan-700/0 bg-noise bg-repeat text-gray-300/90 overflow-hidden'>
                <div className='p-12 bg-cyan-600/10'>
                    <h3 className='font-semibold text-2xl'>Credentials</h3>
                    {credentials.map((item) => (
                        <div key={item.id} className='mt-8'>
                            <h4 className='font-bold text-sm'>{item.label}</h4>
                            {item.list.map((item) => (
                                <h5
                                    key={item.id}
                                    className='mt-2 text-xs font-light'
                                >
                                    {item.label}
                                </h5>
                            ))}
                        </div>
                    ))}
                    <Image
                        alt='award icon'
                        src={award}
                        width={80}
                        style={{ height: "auto" }}
                        className='absolute top-8 right-8'
                    />
                </div>
            </div>
            <div className='pt-12'>
                <h3 className='mb-10 font-semibold text-2xl text-gray-200'>
                    Education
                </h3>
                {education.map((item) => (
                    <div
                        key={item.id}
                        className='mt-3 mb-2 last:pb-0 pb-8 border-l border-gray-400/30'
                    >
                        <div className='flex justify-start items-start gap-4'>
                            <div className='-ml-[5px] w-2 h-2 bg-gray-300 rounded-full'></div>
                            <div className='-mt-1'>
                                <h4 className='font-light text-gray-200 text-sm'>
                                    {item.label}
                                </h4>
                                <h5
                                    key={item.id}
                                    className='mt-1 font-light text-xs text-gray-300/90'
                                >
                                    {item.link}
                                </h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
