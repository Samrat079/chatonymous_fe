import type {MessageType} from "../../../../Types/MessageType.ts";
import useAuth from "../../../AuthPageModule/UseAuth/useAuth.tsx";

const MessageBubble = ({msg}: { msg: MessageType }) => {
    const {currUser} = useAuth();

    const localTime = new Date(msg.createdAt).toLocaleTimeString('en-IN', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    const baseStyle = "p-4 rounded-xl backdrop-blur-md shadow-lg w-fit min-w-64"
    const senderStyle = "bg-white/60 ml-auto"
    const receiverStyle = "bg-cyan-300 mr-auto"

    const optionalStyle = currUser!.userName == msg.createdBy ? senderStyle : receiverStyle;

    return (
        <div className={baseStyle + " " + optionalStyle}>
            <p>{msg.textContent}</p>
            <div className="flex justify-between gap-2 mt-2 text-sm text-black/50 italic">
                <p>{msg.createdBy}</p>
                <p>{localTime}</p>
            </div>
        </div>
    )
}
export default MessageBubble
