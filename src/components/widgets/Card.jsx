import Image from "next/image";

export default function Card(props) {

    const {
        kicker = "",
        title = "",
        body = "",
        imageUrl = "",
        imageWidth,
        imageHeight,
    } = props;

    return (
        <div className="p-px rounded-4xl bg-gradient-to-br from-white/30 from-0% to-white/5 to-50% overflow-hidden">
            <div className="relative w-full h-full rounded-4xl bg-gray-950">
                <div className="w-full h-full px-10 py-14 rounded-4xl bg-gradient-to-br from-[#565A67]/30 to-gray-950 shadow-inner shadow-white/5">
                    <div className="w-fit px-4 py-2 rounded-full bg-gray-400/70 text-xs font-medium text-gray-950">{kicker}</div>
                    <div dangerouslySetInnerHTML={{__html: title}} className="mt-10 font-hind text-4xl font-medium text-gray-100 leading-snug"></div>
                    <div className="mt-6 -mb-2 text-sm font-light text-gray-300 leading-loose">{body}</div>
                </div>
                <div className="absolute top-0 right-0">
                    <Image src={imageUrl} width={imageWidth} height={imageHeight} alt="simple background pattern" className="opacity-60" />
                </div>
            </div>
        </div>
    );
}
