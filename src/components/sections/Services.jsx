import Card from "../widgets/Card";

export default function Services(props) {

    const {
        services = [],
    } = props;

    return (
        <div className="text-white grid grid-cols-2 gap-16">
            { services.map((card) => (
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
    );
}
