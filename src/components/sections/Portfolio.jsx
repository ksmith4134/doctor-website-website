import Gallery from "@/components/widgets/Gallery";

export default function Portfolio() {
    return (
        <>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col items-center text-center'>
                    <h3 className='text-gray-500 text-lg'>Our Work</h3>
                    <h1 className='mt-4 font-hind text-6xl leading-tight text-gray-300/90'>
                        Arnot Health Orthopedics
                    </h1>
                    <h5 className='mt-4 text-lg text-gray-300/90 leading-relaxed text-balance'>
                        Arnot Health&apos;s orthopedics department reached out
                        to us to build a patient resource web app. Check out
                        some highlights below or click to learn more.
                    </h5>
                </div>
            </div>
            <Gallery />
            <div className='pt-24 flex justify-center items-center gap-16'>
                <div className='flex flex-col justify-center items-center gap-8'>
                    <p className='max-w-3xl text-xl text-center text-gray-300 leading-relaxed font-light text-balance'>
                        &quot;Revered delivered a perfect website that has
                        greatly benefited our physicians, advanced practice
                        providers, and most importantly, our patients. Thank
                        you, Revered, for your dedication to delivering a
                        successful project!&quot;
                    </p>
                    <div className='flex items-center gap-4'>
                        <div className='h-px w-6 bg-portfolio-primary'></div>
                        <p className='text-cyan-700 text-lg italic'>
                            Arnot Health Orthopedics
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
