import {Navigate, Outlet} from "react-router";
import {useQuery} from "@tanstack/react-query";
import LoadingSpinner from "../../Shared/Components/LoadingSpinner/LoadingSpinner.tsx";
import getCurrentUser from "./getCurrentUser.ts";
import type {JSX} from "react";

const AuthGuard = (): JSX.Element => {

    const {isLoading, isError} = useQuery({
        queryKey: ["Current_user"],
        queryFn: getCurrentUser,
        retry: false
    })

    if (isLoading) {
        return (
            <div className="flex justify-center items-center w-full min-h-screen">
                <LoadingSpinner size={64}/>
            </div>
        )
    }

    if (isError) {
        return <Navigate to="/login" replace/>;
    }

    return (
        <Outlet/>
    )
}
export default AuthGuard
