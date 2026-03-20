import {Navigate, Outlet} from "react-router";
import LoadingSpinner from "../../Shared/Components/LoadingSpinner/LoadingSpinner.tsx";
import type {JSX} from "react";
import useAuth from "../UseAuth/useAuth.tsx";

const AuthGuard = (): JSX.Element => {

    const {isLoading, isError} = useAuth();
    const isOnboarded = localStorage.getItem("isOnboarded") === "true";

    if (isLoading) {
        return (
            <div className="flex justify-center items-center w-full min-h-screen">
                <LoadingSpinner size={64}/>
            </div>
        )
    }

    if (!isOnboarded) {
        localStorage.setItem("isOnboarded", "true")
        return <Navigate to="/welcome" replace />;
    }

    if (isError) {
        return <Navigate to="/login" replace/>;
    }


    return (
        <Outlet/>
    )
}
export default AuthGuard
