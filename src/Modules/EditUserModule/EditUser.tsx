import useAuth from "../AuthPageModule/UseAuth/useAuth.tsx";
import Card_01 from "../Shared/Components/Card/Card_01.tsx";
import Input_01 from "../Shared/Components/Input/Input_01.tsx";
import Button_Black from "../Shared/Components/Buttons/Button_Black.tsx";
import Button_White from "../Shared/Components/Buttons/Button_White.tsx";
import type {SyntheticEvent} from "react";
import {useMutation} from "@tanstack/react-query";
import {useNavigate} from "react-router";
import LoadingSpinner from "../Shared/Components/LoadingSpinner/LoadingSpinner.tsx";

const EditUser = () => {
    const navigate = useNavigate();
    const {currUser, updateCurrUser} = useAuth();
    const loginUser = currUser!;

    const submitHandler = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        // const userName = formdata.get("userName") as string;
        const bio = formdata.get("bio") as string;
        mutate({bio})
        e.currentTarget.reset();
    }

    const {mutate, isPending} = useMutation({
        mutationFn: updateCurrUser,
        mutationKey: ["updateCurrUser"],
        onSuccess: () => {
            navigate("/profile/" + loginUser.userName);
        }
    });

    return (
        <div className="w-full flex flex-col gap-6 p-12 items-center">
            {isPending && <LoadingSpinner/>}
            <Card_01>
                <p>Edit {loginUser.userName}</p>
                <form
                    onSubmit={submitHandler}
                    className="flex flex-col gap-6 w-156"
                >

                    {/* User Name */}
                    <Input_01
                        label="Username"
                        name="userName"
                        value={loginUser.userName}
                    />

                    {/* Bio */}
                    <Input_01
                        label="Bio"
                        name="bio"
                        value={loginUser.bio}
                    />

                    <div className="flex justify-center gap-4 pt-2">

                        <Button_Black type="submit">
                            Submit
                        </Button_Black>

                        <Button_White type="reset">
                            Clear
                        </Button_White>
                    </div>
                </form>
            </Card_01>
        </div>
    )
}
export default EditUser
