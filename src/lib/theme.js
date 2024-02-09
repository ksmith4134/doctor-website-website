import { FiNavigation, FiPlus, FiMinus, FiUser, FiStar, FiCamera, FiPenTool, FiCode, FiImage, FiFolder, FiSearch, FiTool  } from "react-icons/fi";
import { IoAccessibilityOutline, IoDocumentOutline } from "react-icons/io5";
import { GoCommentDiscussion } from "react-icons/go";
import { BsUnlock } from "react-icons/bs";

import { FaUserMd, FaDiagnoses } from "react-icons/fa";
import { FaBrain, FaBone, FaHeart, FaBaby, FaHospital, FaBolt, FaBowlFood, FaPersonWalking, FaRibbon, FaTooth } from "react-icons/fa6";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { GiStomach } from "react-icons/gi";


export const ICONS = {
    'compass': FiNavigation,
    'plus': FiPlus,
    'minus': FiMinus,
    'user': FiUser,
    'star': FiStar,
    'camera': FiCamera,
    'pen': FiPenTool,
    'code': FiCode,
    'image': FiImage,
    'folder': FiFolder,
    'search': FiSearch,  
    'access': IoAccessibilityOutline,  
    'tool': FiTool,
    'discuss': GoCommentDiscussion,
    'unlock': BsUnlock,
    'document': IoDocumentOutline,
    'family': MdOutlineFamilyRestroom,
    'tooth': FaTooth,
    'walking': FaPersonWalking,
    'brain': FaBrain,
    'skin': FaDiagnoses,
    'doctor': FaUserMd,
    'ribbon': FaRibbon,
    'bone': FaBone,
    'stomach': GiStomach,
    'heart': FaHeart,
    'baby': FaBaby,
    'hospital': FaHospital,
    'lightning': FaBolt,
    'food': FaBowlFood,
}


export const FONT_COLORS = {
    "success": "text-emerald-300",
    "error": "text-red-400",
    "warn": "text-amber-400",
}

export const GRADIENT_COLORS = {
    GROUP_HOVER_FROM: {
        "gray": "group-hover:from-gray-400/60",
        "teal": "group-hover:from-teal-600/60",
        "amber": "group-hover:from-amber-600/60",
        "red": "group-hover:from-red-600/60",
    }
}