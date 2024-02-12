export default function FeatureColumn({ service }) {
    return (
        <div className='text-gray-300/90'>
            <h2 className='font-hind text-4xl font-bold leading-snug'>
                {service.title}
            </h2>
            {service.list.map((item) => (
                <div
                    key={item.id}
                    className='first:mt-12 mt-10 flex items-start gap-6'
                >
                    <span className='shrink-0 text-2xl'>{item.icon()}</span>
                    <div>
                        <h3 className='-mt-0.5 text-lg font-semibold'>
                            {item.label}
                        </h3>
                        <p className='mt-2 font-light'>{item.body}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
