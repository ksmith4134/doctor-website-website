import Icon from "../utils/Icon";

export default function FlexRow(props) {

    const {
        title = "",
        bullets = "",
    } = props;


    return (
        <div className={`py-12 md:py-10 flex flex-col md:flex-row justify-between ${bullets.length > 1 ? 'items-start' : 'items-center'} gap-8 text-gray-300/90 border-b border-gray-600/40`}>
            <div className="basis-1/2 flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="rounded-full w-10 aspect-square border-2 border-gray-300/90 grid place-content-center">
                    <Icon icon={bullets[0].icon} />
                </div>
                <h3 className="mt-2 md:mt-0 text-4xl font-hind md:font-light">{title}</h3>
            </div>
            <div className="basis-1/2 flex flex-col gap-4">
                {bullets.map((item) => (
                    <div key={item.id} className="flex items-start gap-4 font-normal">
                        <div className="hidden mt-0.5 opacity-80">
                            <Icon icon={item.icon} />
                        </div>
                        <p dangerouslySetInnerHTML={{__html: item.body}}></p>
                    </div>
                ))}
            </div>
        </div>
    );
}