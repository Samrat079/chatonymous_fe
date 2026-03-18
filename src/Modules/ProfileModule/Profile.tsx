import useAuth from "../AuthPageModule/UseAuth/useAuth.tsx";
import Card_01 from "../Shared/Components/Card/Card_01.tsx";
import Button_Black from "../Shared/Components/Buttons/Button_Black.tsx";
import LoadingSpinner from "../Shared/Components/LoadingSpinner/LoadingSpinner.tsx";

const Profile = () => {
    const {currUser, logout, isLoading} = useAuth();

    if (isLoading) {
        return <div className='flex h-full items-center justify-center'><LoadingSpinner size={64}/></div>;
    }

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex items-center gap-6 px-2">

                {/* Avatar */}
                <div
                    className="w-28 h-28 rounded-full bg-cyan-200 flex items-center justify-center text-4xl font-bold text-cyan-700 shadow-inner">
                    {currUser!.userName[0].toUpperCase()}
                </div>

                {/* Username */}
                <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        {currUser!.userName}
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
                            <span className="text-gray-800 font-medium">{currUser!.id}</span>
                        </div>

                        <div className="flex justify-between px-4 py-2 bg-white/40 rounded-lg">
                            <span className="text-gray-600">Joined</span>
                            <span
                                className="text-gray-800 font-medium">{new Date(currUser!.createdAt).toLocaleDateString()}</span>
                        </div>

                        <div className="flex justify-between px-4 py-2 bg-white/40 rounded-lg">
                            <span className="text-gray-600">Last Updated</span>
                            <span
                                className="text-gray-800 font-medium"> {new Date(currUser!.updatedAt).toLocaleDateString()} </span>
                        </div>

                    </div>

                    {/* Bio */}
                    <div className="px-4 py-3 bg-white/40 rounded-lg">
                        <p className="text-gray-600 text-sm mb-1">Bio</p>
                        <p className="text-gray-800 text-sm">
                            {currUser!.bio || "No bio added yet."}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end pt-2">
                        <Button_Black onClick={logout}>Logout</Button_Black>
                    </div>

                </div>
            </Card_01>

        </div>

    );
};

export default Profile;