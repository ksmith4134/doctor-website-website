import Icon from "../utils/Icon";

export default function FlexRow(props) {

    const {
        title = "",
        bullets = "",
    } = props;


    return (
        <div className='py-10 flex justify-between items-start gap-8 text-gray-300 border-b border-gray-600/80'>
            <div className="basis-1/2">
                <div className="flex items-center gap-6">
                    <div>
                        <h3 className="text-4xl font-hind font-light">{title}</h3>
                    </div>
                </div>
            </div>
            <div className="basis-1/2 flex flex-col gap-6 pr-0">
                {bullets.map((item) => (
                    <div key={item.id} className="flex items-start gap-4 font-light">
                        <div className="mt-0.5 opacity-80">
                            <Icon icon={item.icon} />
                        </div>
                        <p dangerouslySetInnerHTML={{__html: item.body}}></p>
                    </div>
                ))}
            </div>
        </div>
    );
}