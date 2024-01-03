import { portfolioNavigation } from "@/lib/cms";
import Icon from "../utils/Icon";


export default function Portfolio() {
    return (
        <div>
            <div className="max-w-3xl">
                <h3 className="text-gray-500 font-bold text-lg">Our Work</h3>
                <h1 className="mt-4 font-hind font-semibold text-5xl leading-snug text-gray-200">Arnot Health Orthopedics</h1>
                <h5 className="mt-2 text-lg font-light text-white leading-loose">We recently built a patient resources web app for Arnot Health&apos;s orthopedics department. Check out some interactive highlights below or visit <a href="https://www.arnotortho.com" className="text-blue-500 underline underline-offset-4 decoration-1">arnotortho.com</a></h5>
            </div>
            <div className="mt-20 flex gap-12 h-[600px]">

                <div className="w-60 shrink-0">
                    <div className="h-full p-px rounded-4xl bg-gradient-to-br from-white/30 from-0% to-white/5 to-50% overflow-hidden">
                        <div className="relative w-full h-full bg-gray-950 rounded-4xl">
                            <div className="w-full h-full p-8 rounded-4xl bg-gradient-to-br from-[#565A67]/20 to-gray-950 shadow-inner shadow-white/5">
                                <ul>
                                    {portfolioNavigation.map((item) => (
                                        <li key={item.id} className="flex items-center gap-5 first:mt-0 mt-10">
                                            <Icon icon={item.icon} />
                                            <p className="text-sm font-thin text-white">{item.title}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full shrink">
                    <div className="h-full p-px rounded-4xl bg-gradient-to-br from-white/30 from-0% to-white/5 to-50% overflow-hidden">
                        <div className="relative w-full h-full bg-gray-950 rounded-4xl">
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
