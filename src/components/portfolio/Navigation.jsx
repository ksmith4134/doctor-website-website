import { useState, useEffect } from "react";
import { portfolioNavigation } from "@/lib/cms";
import { FaCircleInfo } from "react-icons/fa6";

export default function Navigation() {
    return (
        <div className="h-full flex justify-center items-start gap-8">
            <div className="basis-1/2">

                {/* Instructions */}
                <div className="flex items-center gap-3">
                    <FaCircleInfo className="text-2xl text-gray-400" />
                    <p className="text-sm text-white font-semibold">Instructions</p>
                </div>
                <p className="mt-3 w-80 text-white text-xs font-extralight leading-relaxed">Click on the highlighted skeleton joints, filter buttons, or dropdown menus to learn more about your condition.</p>

                {/* Filter Buttons */}

                {/* Dropdown List */}

            </div>
            <div className="basis-1/2">
                
            </div>
        </div>
    );
}
