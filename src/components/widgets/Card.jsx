import Image from "next/image";
import { BACKGROUND } from "@/lib/theme";

export default function Card(props) {

    const {
        kicker = "",
        title = "",
        body = "",
        imageUrl = "",
        imageWidth,
        imageHeight,
        backgroundGradient = "",
    } = props;


    return (
        <div className={`p-px rounded-4xl ${BACKGROUND.GRADIENT_DIRECTION["top-left"]} from-white/10 from-0% to-white/5 to-50% overflow-hidden`}>
            <div className="relative w-full h-full rounded-4xl bg-gray-950">
                <div className="w-full h-full rounded-4xl overflow-hidden bg-noise bg-repeat">
                    <div className={`w-full h-full px-12 py-14 rounded-4xl ${BACKGROUND.GRADIENT_DIRECTION["top-left"]} from-[#565A67]/20 to-transparent shadow-inner shadow-gray-600/5`}>
                        <div className="w-fit px-4 py-2 rounded-full bg-gray-400/70 text-xs font-medium text-gray-950">{kicker}</div>
                        <div dangerouslySetInnerHTML={{__html: title}} className="mt-10 font-hind text-4xl font-medium text-gray-100 leading-snug"></div>
                        <div className="-mb-2 mt-6 text-sm font-light text-gray-300 leading-loose">{body}</div>
                    </div>
                </div>
                <div className="absolute top-1 right-1">
                    <Image src={imageUrl} width={imageWidth} height={imageHeight} alt="simple background pattern" className="rounded-[30px]" />
                </div>
            </div>
        </div>
    );
}
