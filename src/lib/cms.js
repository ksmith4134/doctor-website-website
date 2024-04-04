import davidProfilePic from "../../public/david.jpg";
import kevinProfilePic from "../../public/kevin.jpg";

import Navigation from "../components/portfolio/Navigation";
import NavigationMobile from "@/components/portfolio/NavigationMobile";
import Condition from "../components/portfolio/Condition";
import ConditionMobile from "@/components/portfolio/ConditionMobile";
import Profile from "../components/portfolio/Profile";
import ProfileMobile from "@/components/portfolio/ProfileMobile";

import {
    FaBrain,
    FaBone,
    FaHeart,
    FaBaby,
    FaHospital,
    FaBolt,
    FaBowlFood,
    FaPersonWalking,
    FaRibbon,
    FaTooth,
    FaUserDoctor,
} from "react-icons/fa6";
import { BsBandaidFill } from "react-icons/bs";
import { FiPenTool, FiCode, FiCamera, FiUser, FiFolder } from "react-icons/fi";
import { IoAccessibilityOutline } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import { GiStomach } from "react-icons/gi";

export const profiles = [
    {
        id: 0,
        profilePic: davidProfilePic,
        icon: '',
        name: "David Smith",
        title: "Founder, Design Engineer",
        picAltText: "profile picture of company founder, David Smith",
        gradientColor: "teal",
        url: '/',
        animate: false,
    },
    {
        id: 1,
        profilePic: kevinProfilePic,
        icon: '',
        name: "Kevin Smith",
        title: "Founder, Software Engineer",
        picAltText: "profile picture of company founder, Kevin Smith",
        gradientColor: "red",
        url: '/',
        animate: false,
    },
    {
        id: 2,
        profilePic: null,
        icon: 'egg',
        name: "Dr. Doogie Howser",
        title: "Medical Advisor, Prodigy",
        picAltText: "profile picture of company medical advisor, Doogie Howser",
        gradientColor: "amber",
        url: '/easteregg',
        animate: true,
    },
];

export const code = `try {
    const data = await sendMail();
    const response = data.json();
    if(response.ok){
        setSuccess({message: 'Welcome!'})
    } else {
        throw new Error();
    }
} catch (err) {
    console.log('Please try again.');
}`;

export const doctorTypes = [
    { id: 0, label: "Family Medicine", icon: IoIosPerson },
    { id: 1, label: "Dentistry", icon: FaTooth },
    { id: 2, label: "Physical Therapy", icon: FaPersonWalking },
    { id: 3, label: "Psychiatry", icon: FaBrain },
    { id: 4, label: "Dermatology", icon: BsBandaidFill },
    { id: 5, label: "Surgery", icon: FaUserDoctor },
    { id: 6, label: "Oncology", icon: FaRibbon },
    { id: 7, label: "Orthopedics", icon: FaBone },
    { id: 8, label: "Gastroenterology", icon: GiStomach },
    { id: 9, label: "Cardiology", icon: FaHeart },
    { id: 10, label: "Pediatrics", icon: FaBaby },
    { id: 11, label: "Hospitals", icon: FaHospital },
    { id: 12, label: "Neurology", icon: FaBolt },
    { id: 13, label: "Dietician", icon: FaBowlFood },
];

export const conditionsGraphic = [
    { id: 0, label: "Influenza" },
    { id: 1, label: "COVID-19" },
    { id: 2, label: "RSV" },
    { id: 3, label: "Strep" },
    { id: 4, label: "Common cold" },
];

export const portfolio = [
    {
        id: 0,
        label: "Navigation",
        description:
            "See how patients find condition information using an interactive skeleton",
        url: "https://www.arnotortho.com/#body-diagram",
        desktopComponent: () => <Navigation />,
        mobileComponent: () => <NavigationMobile />,
    },
    {
        id: 1,
        label: "Education",
        description: "View fully-customizable, wiki-style condition pages",
        url: "https://www.arnotortho.com/knee/knee-arthritis?index=Background",
        desktopComponent: () => <Condition />,
        mobileComponent: () => <ConditionMobile />,
    },
    {
        id: 2,
        label: "Profiles",
        description:
            "Check out beautiful and professional doctor profile pages",
        url: "https://www.arnotortho.com/team/bryan-jarvis",
        desktopComponent: () => <Profile />,
        mobileComponent: () => <ProfileMobile />,
    },
];

export const services = [
    {
        id: 0,
        title: "Design & Development",
        list: [
            { id: 0, label: "Collaborative design process", body: "Leave feedback and comment on new designs in real-time. Get a picture-perfect site.", icon: FiPenTool },
            { id: 1, label: "No vendor lock-in", body: "Each site is coded using popular programming languages & tools. You own everything.", icon: FiCode },
            { id: 2, label: "Accessibility for all", body: "Accessibility to meet the needs of every demographic.", icon: IoAccessibilityOutline },
        ],
    },
    {
        id: 1,
        title: "Content Management",
        list: [
            { id: 0, label: "Storyboard, capture, and edit", body: "We work with photographers and videographers to help deliver professional content.", icon: FiCamera },
            { id: 1, label: "Patient education resources", body: "Create documentation for conditions, treatments, protocols, and more.", icon: FiUser },
            { id: 2, label: "Quickly add content to your site", body: "A custom-tailored content dashboard makes it easy for anyone on your team to upload new content.", icon: FiFolder },
        ],
    },
];


// Not currently used
const innovationOld = [
    {
        id: 0,
        title: "White Coat CMS",
        body: "Our content management system (CMS) is designed specifically for doctors who need to quickly and easily add new information and resources to their site.",
    },
    {
        id: 1,
        title: "AI Assistant",
        body: "Create reusable patient resources in a fraction of the time using our ChatGPT-powered, AI assistant. Write new content for treatment pages, PDFs, and more.",
    },
];

const servicesOld = [
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
                body: "Document creation for protocols, treatments, & more.",
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
