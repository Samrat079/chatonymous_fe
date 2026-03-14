import {useParams} from "react-router";

const Conversations = () => {
    const { id } = useParams();

    if (id == null) return (
        <div className="flex items-center justify-center h-full">
            <p>You dont have any chats. try adding more people to chat with.</p>
        </div>
    )

    return (
        <div>
            Chatroom no {id}
        </div>
    )
}
export default Conversations
