
export default function CardLarge({children}) {
    return (
        <div className='h-[580px] p-px rounded-4xl bg-gradient-to-tl from-white/10 from-0% to-white/5 to-50% overflow-hidden'>
            <div className='relative w-full h-full rounded-4xl bg-gray-950 overflow-hidden'>
                <div className='w-full h-full bg-noise bg-repeat'>
                    <div className="w-full h-full px-12 py-14 rounded-4xl bg-gradient-radial from-[#565A67]/40 to-gray-600/5 shadow-inner shadow-gray-400/5">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}