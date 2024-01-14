import Card from "../widgets/Card";

export default function Services(props) {
    const { services = [] } = props;

    return (
        <>
            <div className='max-w-3xl'>
                <h3 className='text-gray-500 font-bold text-lg'>Services</h3>
                <h1 className='mt-4 font-hind font-semibold text-5xl leading-snug text-gray-200'>
                    For healthcare, big and small
                </h1>
                <h5 className='mt-2 text-lg font-extralight text-gray-200 leading-loose'>
                    Our services were designed to meet the specific needs of healthcare
                    organizations, from{" "}
                    <span className='font-bold'>private practices</span> to{" "}
                    <span className='font-bold'>hospitals</span>. Read more below or{" "}
                    <a
                        href='#contact'
                        className='text-blue-500 underline underline-offset-4 decoration-1'
                    >
                        contact us
                    </a>
                    {" "}to learn more.
                </h5>
            </div>
            <div className='mt-20 text-white grid grid-cols-2 grid-flow-row gap-12'>
                {services.map((card) => (
                    <Card
                        key={card.id}
                        kicker={card.kicker}
                        title={card.title}
                        body={card.body}
                        imageUrl={card.image.url}
                        imageWidth={card.image.width}
                        imageHeight={card.image.height}
                        backgroundGradient={card.backgroundGradient}
                    />
                ))}
            </div>
        </>
    );
}
