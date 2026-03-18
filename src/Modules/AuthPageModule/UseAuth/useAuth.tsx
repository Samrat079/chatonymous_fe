import {useQuery, useQueryClient} from "@tanstack/react-query";
import type {UserType} from "../../../Types/UserType.ts";
import getCurrentUser from "./getCurrentUser.ts";
import {useNavigate} from "react-router";
import type {LoginReq} from "../../../Types/LoginReq.ts";
import {users_url} from "../../../api/urls.ts";

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

    const login = async ({userName, passWord}: LoginReq) => {
        const res = await fetch(
            users_url + "/login",
            {
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify({userName, passWord}),
            });

        if (!res.ok) {
            const text = await res.text();
            throw new Error(text);
        }

        return res.json();
    }

    const signup = async ({userName, passWord}: LoginReq) => {
        const res = await fetch(
            users_url + "/signup",
            {
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify({userName, passWord}),
            });

        if (!res.ok) {
            const text = await res.text();
            throw new Error(text);
        }

        return res.json();
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
