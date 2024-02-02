"use client";

import { useState } from "react";
import FlexRow from "../widgets/FlexRow";
import { FiPlus, FiMinus } from "react-icons/fi";

const services = [
    {
        id: 0,
        title: "Design",
        bullets: [
            {
                id: 0,
                body: "Modern tools help create beautifully crafted designs.",
                icon: "pen",
            },
            {
                id: 1,
                body: "Leave feedback and comments on new designs in real-time.",
                icon: "discuss",
            },
        ],
    },
    {
        id: 1,
        title: "Development",
        bullets: [
            {
                id: 0,
                body: "Each site is coded using popular programming languages & tools.",
                icon: "code",
            },
            {
                id: 1,
                body: "No vendor lock-in. You own everything.",
                icon: "unlock",
            },
            {
                id: 2,
                body: "Accessibility to meet the needs of every demographic.",
                icon: "access",
            },
        ],
    },
    {
        id: 2,
        title: "Content Creation",
        bullets: [
            {
                id: 0,
                body: "Storyboard, capture, and edit photography and video.",
                icon: "image",
            },
            {
                id: 1,
                body: "Document creation for protocols, treatments, & educational content.",
                icon: "document",
            },
        ],
    },
    {
        id: 3,
        title: "Content Management",
        bullets: [
            {
                id: 0,
                body: "Easily add new resources and information to your site.",
                icon: "folder",
            },
        ],
    },
    {
        id: 4,
        title: "Patient Discovery",
        bullets: [
            {
                id: 0,
                body: "Amplify new patient discovery using search engine optimization.",
                icon: "search",
            },
        ],
    },
];

export default function Services() {

    const partialList = services.slice(0,3);

    const [list, setList] = useState({services: partialList, full: false})

    const expandList = () => {
        if(list.services.length === services.length) {
            setList({services: partialList, full: false}) 
        } else {
            setList({services, full: true}) 
        }
    }

    return (
        <div>
            {/* <div className='flex justify-start items-start gap-8'>
                <h1 className='font-hind font-normal text-6xl leading-tight text-gray-300 text-center'>
                    Healthcare <span className="font-bold">big</span> and <span className="font-bold">small</span>
                </h1>
                <h5 className='basis-1/2 mt-2 text-xl font-extralight text-gray-300 leading-relaxed'>
                    Our services were designed from the ground up to meet the specific needs of healthcare
                    organizations, from{" "}
                    <span className='font-bold'>private practices</span> to{" "}
                    <span className='font-bold'>hospitals</span>.
                </h5>
            </div> */}

            <h2 className='block md:hidden mb-6 font-hind font-normal text-6xl leading-tight text-gray-300 text-center'>Our Services</h2>

            <div className='hidden py-5 md:flex justify-between items-center gap-8 text-gray-300 font-medium text-md uppercase border-b border-gray-600/60'>
                <h3 className='basis-1/2'>Our Services</h3>
                <h3 className='basis-1/2'>How we work</h3>
            </div>
            {list.services.map((service) => (
                <FlexRow
                    key={service.id}
                    title={service.title}
                    bullets={service.bullets}
                />
            ))}
            <button onClick={expandList} className="mt-8 text-portfolio-primary flex items-center gap-2">
                View more
                {list.full ? <FiMinus /> : <FiPlus />}
            </button>
        </div>
    );
}
