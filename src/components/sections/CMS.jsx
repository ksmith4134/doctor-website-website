import CardLarge from "../widgets/CardLarge";


export default function CMS() {
    return (
        <div>
            <h2 className="font-hind text-center text-gray-200 text-5xl">Doctors rarely stand still.</h2>
            <h2 className="mt-2 font-hind text-center text-gray-200 text-5xl font-bold">Neither do we.</h2>
            <div className="mt-20 flex gap-12">

                <div className="basis-1/2">
                    <CardLarge>
                        <div className="flex justify-between items-start gap-2">
                            <div className="">
                                <h4 className="mt-1 text-sm text-gray-600 font-light">Content Management</h4>
                                <h3 className="mt-4 text-3xl text-gray-200 font-semibold">White Coat CMS</h3>
                            </div>
                            <div className="border border-gray-600/20 bg-white/5 text-white px-4 py-1.5 text-xs rounded-full">
                                coming soon
                            </div>
                        </div>
                        <p className="mt-8 font-light text-gray-200">Our content management system (CMS) is designed specifically for doctors who need to quickly and easily add new information and resources to their site.</p>
                    </CardLarge>
                </div>

                <div className="basis-1/2">
                    <CardLarge>
                        
                    </CardLarge>
                </div>

            </div>
        </div>
    );
}
