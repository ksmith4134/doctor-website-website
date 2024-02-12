import { FONT_COLORS } from "@/lib/theme";

export default function ToastMessage({ message }) {

    const messageColor = FONT_COLORS[message.type];

    return (
        <div className='h-6 text-xs text-center'>
            <p className={`${messageColor}`}>{message.body}</p>
        </div>
    );
}
