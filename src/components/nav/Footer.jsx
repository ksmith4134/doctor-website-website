import Link from "next/link";
import MaxWidth from "../utils/MaxWidth";
import { FaRegCopyright, FaEgg } from "react-icons/fa6";

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <MaxWidth>
            <footer className="w-full py-20">
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="pt-16 flex flex-col sm:flex-row justify-between sm:items-end gap-8">
                    <div className="text-white text-sm flex flex-col justify-center items-start">
                        <p className="font-bold uppercase">Revered</p>
                        <div className="pt-8 inline-flex items-center">
                            <FaRegCopyright /> <span>&nbsp;{year}</span>
                        </div>
                        <p className="mt-1">Revered Campaigns, LLC</p>
                        {/* <ul className="pt-8 space-y-2 text-xs text-gray-300">
                            <li><Link href="/legal#privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="/legal#terms-and-conditions">Terms & Conditions</Link></li>
                        </ul> */}
                    </div>
                    <Link href={'/easteregg'}>
                        <FaEgg className="mb-0.5 text-gray-700 text-4xl hover:text-gray-600" />
                    </Link>
                </div>
            </footer>
        </MaxWidth>
    );
}
