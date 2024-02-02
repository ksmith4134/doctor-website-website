
export default function FeatureCard({children}) {

    return (
        <div className='h-[530px] rounded-2xl backdrop-blur-3xl bg-gradient-radial from-main-secondary/20 to-white/0 border border-white/5 overflow-hidden'>
            <div className="px-12 py-14 w-full h-full rounded-2xl bg-noise bg-repeat">
                {children}
            </div>
        </div>
    );
}