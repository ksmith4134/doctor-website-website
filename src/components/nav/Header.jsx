import Link from "next/link";
import MaxWidth from "../utils/MaxWidth";

export default function Header() {
    return (
        <header className="font-hind w-full sticky top-0 z-50 backdrop-blur-xl bg-gray-950/50">
            <div className="w-full h-full bg-noise bg-repeat py-3">
                <MaxWidth>
                    <nav className="flex items-center justify-between">
                        <div className="text-sm text-gray-300 font-bold uppercase">
                            <Link href="/">
                                Revered
                            </Link>
                        </div>
                        <ul className="flex items-center gap-12 text-gray-300 text-sm">
                            <li className="hidden md:block">
                                <Link href="/#services">
                                    <span>Services</span>
                                </Link>
                            </li>
                            <li className="hidden md:block">
                                <Link href="/#work">
                                    <span>Our Work</span>
                                </Link>
                            </li>
                            <li className="hidden md:block">
                                <Link href="/#about">
                                    <span>About</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact">
                                    <button className="px-5 py-2 rounded-full bg-gray-600/50 hover:bg-gray-600 transition duration-300 ease-in-out">Contact</button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </MaxWidth>
            </div>
        </header>
    );
}
