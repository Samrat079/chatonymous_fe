import {useNavigate, useSearchParams} from "react-router";
import {useMutation, useQuery} from "@tanstack/react-query";
import type {UserType} from "../../../Types/UserType.ts";
import userByUserName from "../Api/userByUserName.ts";
import addConvo from "../Api/addConvo.ts";
import useAuth from "../../AuthPageModule/UseAuth/useAuth.tsx";
import LoadingSpinner from "../../Shared/Components/LoadingSpinner/LoadingSpinner.tsx";
import type {ConversationType} from "../../../Types/ConversationType.ts";
import {VscSearchStop} from "react-icons/vsc";

const NewContacts = () => {
    const {currUser} = useAuth();
    const currUserName = currUser!.userName || "";
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const query = searchParams.get("query") || "";

    const {
        data = [],
        isLoading,
        isError,
    } = useQuery<UserType[]>({
        queryKey: ['userByUserName', query],
        queryFn: () => userByUserName(query),
        enabled: !!query,
    });

    const {mutate, isPending} = useMutation({
        mutationFn: addConvo,
        onSuccess: (data: ConversationType) => {
            navigate("/" + data.id);
            setSearchParams({});
        }
    })

    const onClickHandler = (user: UserType) => {
        mutate([currUserName, user.userName!]);
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

            {data.length == 0 && query.length > 0 &&
                <div className="flex flex-col items-center justify-center text-center p-8 h-full gap-6">
                    <VscSearchStop size={64}/>
                    <p>No users found with username: {query}</p>
                </div>
            }

            {data?.map((user: UserType) => (
                <button
                    disabled={isPending}
                    key={user.id}
                    onClick={() => onClickHandler(user)}
                    className="w-full flex items-center gap-3 px-4 py-3 border-b border-white/30 hover:bg-white/40 transition text-left"
                >
                    <div
                        className="w-9 h-9 rounded-full bg-cyan-200 flex items-center justify-center text-sm font-semibold text-cyan-700"
                    >
                        {user.userName![0].toUpperCase()}
                    </div>

                    <span className="text-gray-800">{user.userName}</span>
                </button>
            ))}
        </>
    )
}
export default NewContacts
