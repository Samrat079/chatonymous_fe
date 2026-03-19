import {useParams} from "react-router";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import convoByIdOrParticipants from "../LayoutModule/Api/convoByIdOrParticipants";
import type {ConversationType} from "../../Types/ConversationType";
import messagesSearch from "./api/messagesSearch";
import type {MessageType} from "../../Types/MessageType";
import useAuth from "../AuthPageModule/UseAuth/useAuth";
import LoadingSpinner from "../Shared/Components/LoadingSpinner/LoadingSpinner";
import addMessages from "./api/addMessages";
import {type SyntheticEvent} from "react";
import MessageBubble from "../Shared/Components/MessageBubble/MessageBubble.tsx";

const Conversations = () => {
    const {currUser} = useAuth();
    const {id} = useParams<{ id: string }>();
    const queryClient = useQueryClient();

    // 🔹 Fetch conversation
    const {data: convoList, isLoading: convoLoading} = useQuery<ConversationType[]>({
        queryKey: ["convoByIdOrParticipants", id],
        queryFn: () => convoByIdOrParticipants(id!, []),
        enabled: !!id,
    });

    // 🔹 Fetch messages
    const {data: messages, isLoading: msgLoading} = useQuery<MessageType[]>({
        queryKey: ["messagesSearch", id],
        queryFn: () => messagesSearch(id!, ""),
        enabled: !!id && !!convoList,
    });

    // 🔹 Mutation
    const {mutate: mutateMsg} = useMutation({
        mutationFn: addMessages,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["messagesSearch", id]});
        }
    });

    // 🔹 Submit handler
    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const input = formData.get("chatInput") as string;
        if (!input?.trim() || !currUser?.userName) return;

        mutateMsg({
            conversationId: id!,
            // createdBy: currUser.userName,
            textContent: input,
        });

        e.currentTarget.reset();
    };

    const convo = convoList?.[0];

    return (
        <div className="flex flex-col h-screen">


            {/* Header */}
            <div className="bg-white/50 backdrop-blur-md p-4">
                {convo?.participants.filter((i) => i !== currUser?.userName)}
            </div>

            {(convoLoading || msgLoading) &&
                <div className="flex items-center justify-center h-full">
                    <LoadingSpinner size={64}/>
                </div>
            }

            {/* Messages */}
            <div className="flex flex-col flex-1 overflow-auto mx-8 gap-2">
                {messages?.map((msg: MessageType) => (
                    <MessageBubble msg={msg} key={msg.id} />
                ))}
            </div>

            {/* Input */}
            <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 mx-8 mb-6 px-3 py-4 rounded-xl bg-white/50 backdrop-blur-md shadow-lg border border-white/40"
            >
                <input
                    name="chatInput"
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 bg-transparent outline-none placeholder:text-gray-500 text-sm"
                />
            </form>
        </div>
    );
};

export default Conversations;