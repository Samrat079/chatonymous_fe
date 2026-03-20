import type {MessageType} from "../../../../Types/MessageType.ts";
import useAuth from "../../../AuthPageModule/UseAuth/useAuth.tsx";
import {useState} from "react";
import {FaLock, FaLockOpen} from "react-icons/fa";

const MessageBubble = ({msg}: { msg: MessageType }) => {
    const {currUser} = useAuth();
    const [locked, setLocked] = useState<boolean>(false);

    const localTime = new Date(msg.createdAt!).toLocaleTimeString('en-IN', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    const baseStyle = "flex flex-col gap-2 p-4 rounded-xl backdrop-blur-md shadow-lg w-fit min-w-64"
    const senderStyle = "bg-white/60 ml-auto"
    const receiverStyle = "bg-cyan-300 mr-auto"

    const optionalStyle = currUser!.userName == msg.createdBy ? senderStyle : receiverStyle;

    return (
        <div className={baseStyle + " " + optionalStyle}>
            <div className="flex justify-between items-center gap-4">
                <p>{msg.textContent}</p>
                <button
                    className="hover:text-black/60 rounded-full p-2"
                    onClick={() => setLocked(!locked)}
                >
                    {locked ? < FaLockOpen/> : < FaLock/>}
                </button>
            </div>

            {locked && msg.encryptedContent &&
                <div
                    className="p-2 rounded-lg bg-black/80 text-green-400 text-xs font-mono break-all"
                    onClick={() => navigator
                        .clipboard
                        .writeText(msg.encryptedContent!)
                    }
                >
                    {msg.encryptedContent}
                </div>

            }

            <div className="flex justify-between gap-2 text-sm text-black/50 italic">
                <p>{msg.createdBy}</p>
                <p>{localTime}</p>
            </div>
        </div>
    )
}
export default MessageBubble
