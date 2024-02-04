
export default function FeatureCard({children}) {

    return (
        <div className='md:h-[480px] lg:h-[530px] rounded-2xl backdrop-blur-3xl bg-gradient-radial from-main-secondary/5 to-white/5 border border-white/5 overflow-hidden'>
            <div className="px-12 py-14 w-full h-full rounded-2xl bg-noise bg-repeat">
                {children}
            </div>
        </div>
    );
}