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

export const BACKGROUND = {
    GRADIENT_DIRECTION: {
        "radial": "bg-gradient-radial",
        "top-left": "bg-gradient-to-tl",
        "top-right": "bg-gradient-to-tr",
        "bottom-left": "bg-gradient-to-bl",
        "bottom-right": "bg-gradient-to-br",
    },
}

export const FONT_COLORS = {
    "success": "text-emerald-300",
    "error": "text-red-400",
    "warn": "text-amber-400",
}