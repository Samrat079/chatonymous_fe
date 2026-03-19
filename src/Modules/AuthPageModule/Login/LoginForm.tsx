import Card_01 from "../../Shared/Components/Card/Card_01.tsx";
import * as React from "react";
import Button_Black from "../../Shared/Components/Buttons/Button_Black.tsx";
import Button_White from "../../Shared/Components/Buttons/Button_White.tsx";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Link, useNavigate} from "react-router";

import {FaUser, FaLock} from "react-icons/fa";
import LoadingSpinner from "../../Shared/Components/LoadingSpinner/LoadingSpinner.tsx";
import useAuth from "../UseAuth/useAuth.tsx";

const LoginForm = () => {

    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {login} = useAuth();

    const {mutate, isPending, isError, error} = useMutation({
        mutationFn: login,
        onSuccess: async (data) => {
            localStorage.setItem("token", data.token);
            await queryClient.invalidateQueries({queryKey: ["getCurrentUser"]});
            navigate("/profile", {replace: true})
        }
    });

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userName = formData.get("userName") as string;
        const passWord = formData.get("passWord") as string;

        mutate({userName, passWord});

        e.currentTarget.reset();
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-6 bg-linear-to-br from-cyan-200 to-pink-100">

            <Card_01>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 w-80"
                >

                    <div className="text-center flex flex-col gap-2">
                        <p className="text-3xl font-bold">
                            Welcome Back
                        </p>
                        <p className="text-sm text-gray-600">
                            Login anonymously to continue
                        </p>
                    </div>

                    <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"/>
                        <input
                            name="userName"
                            type="text"
                            placeholder="username"
                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/50 backdrop-blur-md border border-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                        />
                    </div>

                    {/* PASSWORD */}
                    <div className="relative">
                        <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"/>
                        <input
                            name="passWord"
                            type="password"
                            placeholder="password"
                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/50 backdrop-blur-md border border-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                        />
                    </div>

                    {isError && (
                        <p className="text-red-500 text-sm text-center">
                            {error.message}
                        </p>
                    )}

                    <div className="flex justify-center gap-4 pt-2">

                        <Button_Black type="submit" disabled={isPending}>
                            {isPending ? <LoadingSpinner size={24} /> : "Login"}
                        </Button_Black>

                        <Button_White type="reset">
                            Clear
                        </Button_White>
                    </div>
                    <p className="text-center text-sm">
                        Meeting us first time?
                        <Link
                            to="/signup"
                            className="text-indigo-500 hover:text-indigo-500"
                            replace
                        >
                            Signup
                        </Link>
                    </p>
                </form>
            </Card_01>

        </div>
    )
}

export default LoginForm