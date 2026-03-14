import {NavLink, Outlet, useNavigate} from "react-router";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import conversationByUserName from "./Api/conversationByUserName.ts";
import type {ConversationType} from "../../Types/ConversationType.ts";
import Button_White from "../Shared/Components/Buttons/Button_White.tsx";

const Layout = () => {
    const queryClient = useQueryClient();
    const navigator = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        queryClient.removeQueries({queryKey: ["Current_user"]});
        navigator('/login', {replace: true});
    }

    const currUser: string = "foahov";
    const {data, isLoading, isError} = useQuery<ConversationType[]>({
        queryKey: ['conversationsByUsername'],
        queryFn: () => conversationByUserName(currUser),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Something went wrong.</div>;
    }

    return (
        <div className="flex min-h-screen">
            <nav className="flex flex-col gap-4">
                <NavLink to='/conversations'>Conversations</NavLink>
                <Button_White onClick={handleLogout}>Logout</Button_White>

                <form>
                    <input type="search" placeholder="newUser45..."/>
                </form>

                {data!.map((chat) => (
                    <NavLink
                        key={chat.id}
                        to={"/conversations/" + chat.id}
                        className="flex flex-col p-2 bg-pink-200"
                        replace
                    >
                        {chat.participants.filter((i: string) => i !== currUser)}
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
