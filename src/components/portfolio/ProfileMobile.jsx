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

export default function ProfileMobile() {
    return (
        <div className='w-full h-full relative rounded-lg border border-cyan-700/0 bg-noise bg-repeat text-gray-300/90 overflow-hidden'>
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
            <div className="absolute z-20 -bottom-4 w-full h-full bg-gradient-to-t from-gray-950 from-[6%] to-[80%]"></div>
        </div>
    );
}
