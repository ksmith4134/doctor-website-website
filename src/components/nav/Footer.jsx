import Link from "next/link";
import MaxWidth from "../utils/MaxWidth";
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <MaxWidth>
            <footer className="mt-24 w-full py-20">
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="pt-16 text-white text-sm flex flex-col justify-center items-start">
                    <p className="font-bold uppercase">Revere</p>
                    <div className="pt-8 inline-flex items-center">
                        <FaRegCopyright /> <span>&nbsp;{year}</span>
                    </div>
                    <p className="mt-1">Revered Campaigns, LLC</p>
                    <ul className="pt-8 space-y-2 text-xs text-gray-300">
                        <li><Link href="/legal#privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="/legal#terms-and-conditions">Terms & Conditions</Link></li>
                    </ul>
                </div>
            </footer>
        </MaxWidth>
    );
}
