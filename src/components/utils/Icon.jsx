import { ICONS } from "@/lib/theme";

export default function Icon({ icon }) {

    const NewIcon = ICONS[icon];

    return (
        <div className="text-lg text-gray-200">
            <NewIcon />
        </div>
    );
}
