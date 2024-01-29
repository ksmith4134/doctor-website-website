
export default function FeatureCard({children}) {

    return (
        <div className='h-[530px] rounded-2xl backdrop-blur-[64px] bg-white/5 border-2 border-white/5 overflow-hidden'>
            <div className="px-12 py-14 w-full h-full rounded-2xl bg-noise bg-repeat">
                {children}
            </div>
        </div>
    );
}