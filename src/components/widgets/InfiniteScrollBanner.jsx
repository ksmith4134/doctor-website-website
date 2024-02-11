import { doctorTypes } from "@/lib/cms";

export default function InfiniteScrollBanner() {
    return (
        <div className='relative h-48 bg-gradient-radial from-white/5 to-[30%] whitespace-nowrap overflow-hidden flex items-center'>
            <ul className='slide-animate inline-flex items-center'>
                {doctorTypes.map((item) => (
                    <li
                        key={item.id}
                        className='mx-16 text-gray-500 text-center flex gap-2 items-center'
                    >
                        <div className='text-main-primary'>{item.icon()}</div>
                        <p>{item.label}</p>
                    </li>
                ))}
            </ul>
            <ul className='slide-animate inline-flex items-center'>
                {doctorTypes.map((item) => (
                    <li
                        key={item.id}
                        className='mx-16 text-gray-500 text-center flex gap-2 items-center'
                    >
                        <div className='text-main-primary'>{item.icon()}</div>
                        <p>{item.label}</p>
                    </li>
                ))}
            </ul>
            <div className='absolute z-10 w-full h-full bg-gradient-to-r from-gray-950 from-[10%] to-transparent to-[40%]'></div>
            <div className='absolute z-10 w-full h-full bg-gradient-to-l from-gray-950 from-[10%] to-transparent to-[40%]'></div>
        </div>
    );
}
