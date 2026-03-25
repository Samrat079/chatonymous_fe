import useAuth from "../AuthPageModule/UseAuth/useAuth.tsx";
import Card_01 from "../Shared/Components/Card/Card_01.tsx";
import Button_Black from "../Shared/Components/Buttons/Button_Black.tsx";
import LoadingSpinner from "../Shared/Components/LoadingSpinner/LoadingSpinner.tsx";
import {useParams} from "react-router";
import {useQuery} from "@tanstack/react-query";
import type {UserType} from "../../Types/UserType.ts";
import userByUserName from "../LayoutModule/Api/userByUserName.ts";

const Profile = () => {
    const {userName} = useParams();
    const {currUser, logout} = useAuth();
    const loginUser = currUser!;

    const {
        data = [],
        isLoading,
        isError,
        error,
    } = useQuery<UserType[]>({
        queryKey: ['userByUserName', userName],
        queryFn: () => userByUserName(userName!),
    });

    if (isLoading) {
        return <div className='flex h-full items-center justify-center'><LoadingSpinner size={64}/></div>;
    }

    if (isError) {
        return <div className='flex h-full items-center justify-center'>
            Error: {error.message}
        </div>
    }

    const profileData = data?.[0];
    const profileUserName: string = profileData?.userName || "User";


    return (
        <div className="w-full flex flex-col gap-6 p-12">
            <div className="flex items-center gap-6 px-2">

                <div
                    className="w-28 h-28 rounded-full bg-cyan-200 flex items-center justify-center text-4xl font-bold text-cyan-700 shadow-inner">
                    {profileUserName[0].toUpperCase()}
                </div>

                {/* Username */}
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold text-gray-800">
                        {profileUserName}
                    </h1>

                    <p className="text-sm text-gray-500">
                        Anonymous User
                    </p>
                </div>
            </div>


            {/* 🔹 Info Card */}
            <Card_01>
                <div className="flex flex-col gap-5">

                    {/* Info rows */}
                    <div className="flex flex-col gap-3 text-sm">

                        <div className="flex justify-between px-4 py-2 bg-white/40 rounded-lg">
                            <span className="text-gray-600">User ID</span>
                            <span className="text-gray-800 font-medium">{profileData!.id}</span>
                        </div>

                        <div className="flex justify-between px-4 py-2 bg-white/40 rounded-lg">
                            <span className="text-gray-600">Joined</span>
                            <span
                                className="text-gray-800 font-medium">{new Date(profileData.createdAt!).toLocaleDateString()}</span>
                        </div>

                        <div className="flex justify-between px-4 py-2 bg-white/40 rounded-lg">
                            <span className="text-gray-600">Last Updated</span>
                            <span
                                className="text-gray-800 font-medium"> {new Date(profileData.updatedAt!).toLocaleDateString()} </span>
                        </div>

                    </div>

                    {/* Bio */}
                    <div className="px-4 py-3 bg-white/40 rounded-lg">
                        <p className="text-gray-600 text-sm mb-1">Bio</p>
                        <p className="text-gray-800 text-sm">
                            {profileData!.bio || "No bio added yet."}
                        </p>
                    </div>

                    {/* Actions */}
                    {loginUser.id === profileData.id &&
                        <div className="flex justify-end pt-2 gap-6">
                            {/*<Link to="/editUser">*/}
                            {/*    <Button_White>Edit user</Button_White>*/}
                            {/*</Link>*/}
                            <Button_Black onClick={logout}>Logout</Button_Black>
                        </div>
                    }

                </div>
            </Card_01>

        </div>

    );
};

export default Profile;