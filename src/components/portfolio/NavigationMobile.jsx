import Image from "next/image";
import skeleton from "../../../public/portfolio/arnot/Skeleton_Lg_800x920.png"

const circles = [
    { id: 0, label: "elbow", position: "bottom-[6%] left-[3%]" },
    { id: 1, label: "hip", position: "top-[86%] right-[25%]" },
    { id: 2, label: "shoulder", position: "top-[33%] right-[19%]" },
];

export default function NavigationMobile() {
    return (
        <div className='relative w-full h-full flex justify-center overflow-hidden'>
            <div className="relative">
                <Image
                    src={skeleton}
                    alt='skeleton diagram highlighting major joints'
                    width={300}
                    style={{ height: "auto" }}
                    quality={100}
                    className="object-contain object-bottom"
                />
                {circles.map((item) => (
                    <button
                        key={item.id}
                        className={`absolute z-10 h-20 aspect-square rounded-full border-2 border-cyan-700/20 bg-cyan-700/50 shadow-inner shadow-cyan-700/20 ${item.position}`}
                    ></button>
                ))}
                <div className="absolute z-20 -bottom-4 w-full h-full bg-gradient-to-t from-gray-950 from-[6%] to-[80%]"></div>
            </div>
        </div>
    );
}
