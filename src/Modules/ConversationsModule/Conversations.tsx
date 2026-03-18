import {useParams} from "react-router";
import {useQuery} from "@tanstack/react-query";
import convoByIdOrParticipants from "../LayoutModule/Api/convoByIdOrParticipants.ts";
import type {ConversationType} from "../../Types/ConversationType.ts";
import messagesSearch from "./api/messagesSearch.ts";
import type {MessageType} from "../../Types/MessageType.ts";
import useAuth from "../AuthPageModule/UseAuth/useAuth.tsx";

const Conversations = () => {
    const {currUser} = useAuth();
    const {id} = useParams();

    const {data: convoList} = useQuery<ConversationType[]>({
        queryKey: ["convoByIdOrParticipants", id],
        queryFn: () => convoByIdOrParticipants(id, [])
    })

    const {data: messages} = useQuery<MessageType[]>({
        queryKey: ["messagesSearch", id],
        queryFn: () => messagesSearch(id, ""),
        enabled: !!convoList
    })

    const convo = convoList?.[0]; // Taking the only match
    console.log(messages);

    return (
        <div>
            Convo for the user {convo?.participants.filter(p => p !== currUser!.userName)}
        </div>
    )
}
export default Conversations
