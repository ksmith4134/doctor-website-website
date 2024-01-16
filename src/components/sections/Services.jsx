import FlexRow from "../widgets/FlexRow";
import { services2 } from "@/lib/cms";
import { FiPlus } from "react-icons/fi";

export default function Services(props) {

    return (
        <>
            <div className='flex justify-between items-start gap-8'>
                <h1 className='basis-1/2 font-hind font-normal text-6xl leading-tight text-gray-200'>
                    Healthcare<br />big and small.
                </h1>
                <h5 className='basis-1/2 mt-2 text-xl font-light text-gray-200 leading-loose'>
                    Our services were designed to meet the specific needs of healthcare
                    organizations, from{" "}
                    <span className='font-bold'>private practices</span> to{" "}
                    <span className='font-bold'>hospitals</span>. Find out more below.
                </h5>
            </div>

            <div className='mt-16 py-5 flex justify-between items-center gap-8 text-gray-400 font-medium text-md uppercase border-b border-gray-600/60'>
                <h3 className='basis-1/2'>Our Services</h3>
                <h3 className='basis-1/2'>How we work</h3>
            </div>
            {services2.map((service) => (
                <FlexRow
                    key={service.id}
                    title={service.title}
                    bullets={service.bullets}
                />
            ))}
            <button className="mt-8 text-gray-300 flex items-center gap-2">
                View more
                <FiPlus />
            </button>
        </>
    );
}
