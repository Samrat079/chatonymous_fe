import {NavLink, Outlet} from "react-router";
import {useQuery} from "@tanstack/react-query";
import type {ConversationType} from "../../Types/ConversationType.ts";
import LoadingSpinner from "../Shared/Components/LoadingSpinner/LoadingSpinner.tsx";
import * as React from "react";
import useAuth from "../AuthPageModule/UseAuth/useAuth.tsx";
import convoByIdOrParticipants from "./Api/convoByIdOrParticipants.ts";

const Layout = () => {
    const {data: currUser, logout} = useAuth();

    const {data, isLoading, isError} = useQuery<ConversationType[]>({
        queryKey: ['convoByIdOrParticipants', currUser?.userName],
        queryFn: () => convoByIdOrParticipants(undefined, [currUser!.userName]),
        enabled: !!currUser, // prevents the fetch before user
    });

    const handleSubmit = (
        e: React.SubmitEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <LoadingSpinner size={64}/>
            </div>
        )
    }

    if (isError) {
        return <div>Something went wrong.</div>;
    }

    return (
        <div className="flex min-h-screen">
            <nav className="flex flex-col gap-4">
                <NavLink to='/conversations'>Conversations</NavLink>
                <button onClick={logout}>logout</button>

                <form onSubmit={handleSubmit}>
                    <input type="search" placeholder="newUser45..."/>
                </form>

                {data!.map((chat) => (
                    <NavLink
                        key={chat.id}
                        to={"/conversations/" + chat.id}
                        className="flex flex-col p-2 bg-pink-200"
                        replace
                    >
                        {chat
                            .participants
                            .filter((i: string) => i !==
                                currUser!.userName
                            )
                        }
                    </NavLink>
                ))}
            </nav>
            <div className="w-full min-h-screen">
                <Outlet/>
            </div>
        </div>
    )
}
export default Layout
