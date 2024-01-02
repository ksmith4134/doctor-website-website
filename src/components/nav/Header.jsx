import Link from "next/link";
import MaxWidth from "../utils/MaxWidth";

export default function Header() {
    return (
        <header className="font-hind w-full py-4 sticky top-0 backdrop-blur-xl bg-gray-950/50">
            <MaxWidth>
                <nav className="flex items-center justify-between">
                    <div className="text-sm text-white font-bold uppercase">
                        <Link href="/">
                            Revere
                        </Link>
                    </div>
                    <ul className="flex items-center gap-12 text-white text-sm">
                        <li className="hidden md:block">
                            <Link href="#services">
                                <span>Services</span>
                            </Link>
                        </li>
                        <li className="hidden md:block">
                            <Link href="#work">
                                <span>Our Work</span>
                            </Link>
                        </li>
                        <li className="hidden md:block">
                            <Link href="#about">
                                <span>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact">
                                <button className="px-5 py-2 rounded-full bg-gray-600 hover:bg-gray-600/50 transition duration-300 ease-in-out">Contact</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </MaxWidth>
        </header>
    );
}
