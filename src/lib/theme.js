import { FiNavigation, FiPlus, FiMinus, FiUser, FiStar, FiCamera, FiPenTool, FiCode, FiImage, FiFolder, FiSearch, FiTool  } from "react-icons/fi";
import { IoAccessibilityOutline, IoDocumentOutline } from "react-icons/io5";
import { GoCommentDiscussion } from "react-icons/go";
import { BsUnlock } from "react-icons/bs";

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
        "red": "group-hover:from-red-600/60",
    }
}