import {useQuery} from "@tanstack/react-query";
import type {ConversationType} from "../../../Types/ConversationType.ts";
import convoByIdOrParticipants from "../Api/convoByIdOrParticipants.ts";
import useAuth from "../../AuthPageModule/UseAuth/useAuth.tsx";
import {NavLink, useSearchParams} from "react-router";
import LoadingSpinner from "../../Shared/Components/LoadingSpinner/LoadingSpinner.tsx";
import {VscSearchStop} from "react-icons/vsc";
import Button_White from "../../Shared/Components/Buttons/Button_White.tsx";

const OldContacts = () => {
    const {currUser} = useAuth();
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") || "";

    const participants = [currUser?.userName, query]
        .filter((p): p is string => !!p && p.trim() !== "");

    const { data = [], isLoading, isError } = useQuery({
        queryKey: ['convoByIdOrParticipants', participants],
        queryFn: () => convoByIdOrParticipants(undefined, participants),
        enabled: participants.length > 0,
    });

    const switchSearch = () => {
        setSearchParams({isNewContact: "true", query: query});
    }

    return (
        <>
            {isError && (
                <p className="text-sm text-red-500 text-center">
                    Something went wrong...
                </p>
            )}

            {isLoading &&
                <div className="flex justify-center items-center h-full">
                    <LoadingSpinner size={64}/>
                </div>
            }

            {data.length == 0 && query.length == 0 &&
                <div className="flex flex-col items-center justify-center text-center p-8 h-full gap-6">
                    <VscSearchStop size={64}/>
                    <p>You dont have any conversations yet, try adding more.</p>
                    <Button_White onClick={switchSearch}>Find more</Button_White>
                </div>
            }

            {data!.map((chat: ConversationType) => {
                const otherUser = chat.participants.find(
                    p => p !== currUser!.userName
                );

                return (
                    <NavLink
                        key={chat.id}
                        to={`/${chat.id}`}
                        onClick={() => setSearchParams({})}
                        className={({isActive}) =>
                            `w-full flex items-center gap-3 px-4 py-3 border-b border-white/30 transition
                        ${isActive ? "bg-white/80" : "hover:bg-white/40"}`}
                    >
                        <div
                            className="w-9 h-9 rounded-full bg-pink-200 flex items-center justify-center text-sm font-semibold text-pink-700">
                            {otherUser?.[0]?.toUpperCase()}
                        </div>

                        <span className="text-gray-800">{otherUser}</span>
                    </NavLink>
                );
            })}
        </>
    )
}
export default OldContacts
