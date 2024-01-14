
export default function CardLarge({children}) {
    return (
        <div className='h-[550px] p-px rounded-4xl bg-gradient-to-b from-gray-400/10 from-0% to-white/5 to-50% overflow-hidden'>
            <div className='relative w-full h-full rounded-4xl bg-gray-950'>
                <div className='w-full h-full bg-noise bg-repeat'>
                    <div className="w-full h-full px-12 py-14 rounded-4xl bg-gradient-radial from-[#565A67]/20 to-gray-600/5">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}