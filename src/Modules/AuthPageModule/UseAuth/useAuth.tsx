import {useQuery, useQueryClient} from "@tanstack/react-query";
import type {UserType} from "../../../Types/UserType.ts";
import getCurrentUser from "./api/getCurrentUser.ts";
import {useNavigate} from "react-router";
import login from "./api/login.ts";
import signup from "./api/signup.ts";
import updateCurrUser from "./api/updateCurrUser.tsx";

const UseAuth = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const query = useQuery<UserType>({
        queryKey: ['getCurrentUser'],
        queryFn: getCurrentUser,
        retry: false,
    })

    const isNewUser = localStorage.getItem('newUser') == "true";

    const setIsNewUser = () => {
        localStorage.setItem('newUser', "true");
    }

    const logout = () => {
        localStorage.removeItem('token');
        queryClient.removeQueries({queryKey: ["Current_user"]});
        navigate('/login', {replace: true});
    }

    return {
        currUser: query.data,
        isLoading: query.isLoading,
        isError: query.isError,
        error: query.error,
        refetch: query.refetch,
        isNewUser,
        setIsNewUser,
        logout,
        login,
        signup,
        updateCurrUser
    }
}
export default UseAuth
