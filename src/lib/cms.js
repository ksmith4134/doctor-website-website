import davidProfilePic from "../../public/david.jpg";
import kevinProfilePic from "../../public/kevin.jpg";

import { FaBrain, FaBone, FaHeart, FaBaby, FaHospital, FaBolt, FaBowlFood, FaPersonWalking, FaRibbon, FaTooth, FaUserDoctor } from "react-icons/fa6";
import { IoIosPerson } from "react-icons/io";
import { GiStomach } from "react-icons/gi";
import { BsBandaidFill } from "react-icons/bs";

export const profiles = [
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
    { id: 0, label: 'Family Medicine', icon: IoIosPerson },
    { id: 1, label: 'Dentistry', icon: FaTooth },
    { id: 2, label: 'Physical Therapy', icon: FaPersonWalking },
    { id: 3, label: 'Psychiatry', icon: FaBrain },
    { id: 4, label: 'Dermatology', icon: BsBandaidFill },
    { id: 5, label: 'Surgery', icon: FaUserDoctor },
    { id: 6, label: 'Oncology', icon: FaRibbon },
    { id: 7, label: 'Orthopedics', icon: FaBone },
    { id: 8, label: 'Gastroenterology', icon: GiStomach },
    { id: 9, label: 'Cardiology', icon: FaHeart },
    { id: 10, label: 'Pediatrics', icon: FaBaby },
    { id: 11, label: 'Hospitals', icon: FaHospital },
    { id: 12, label: 'Neurology', icon: FaBolt },
    { id: 13, label: 'Dietician', icon: FaBowlFood },
];

export const conditionsGraphic = [
    {id: 0, label: 'Flu'},
    {id: 1, label: 'COVID-19'},
    {id: 2, label: 'Sinus Infection'},
    {id: 3, label: 'Ear Infection'},
    {id: 4, label: 'Strep Throat'},
]