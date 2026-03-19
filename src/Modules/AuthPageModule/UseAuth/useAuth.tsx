import {useQuery, useQueryClient} from "@tanstack/react-query";
import type {UserType} from "../../../Types/UserType.ts";
import getCurrentUser from "./api/getCurrentUser.ts";
import {useNavigate} from "react-router";
import login from "./api/login.ts";
import signup from "./api/signup.ts";

const UseAuth = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const query = useQuery<UserType>({
        queryKey: ['getCurrentUser'],
        queryFn: getCurrentUser,
    })

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
        logout,
        login,
        signup,
    }
}
export default UseAuth
