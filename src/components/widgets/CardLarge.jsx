// [#565A67]
import { BACKGROUND } from "@/lib/theme";


export default function CardLarge({children, bgColor}) {

    const color = BACKGROUND.FROM_COLOR[bgColor];

    return (
        <div className='h-[530px] p-px rounded-xl bg-gradient-to-b from-gray-400/10 from-0% to-white/5 to-50% overflow-hidden'>
            <div className='relative w-full h-full rounded-xl bg-gray-950'>
                <div className='w-full h-full bg-noise bg-repeat'>
                    <div className={`w-full h-full px-12 py-14 rounded-xl bg-gradient-radial from-slate-300/20 to-gray-600/5`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}