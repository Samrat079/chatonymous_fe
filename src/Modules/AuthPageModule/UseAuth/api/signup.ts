import {users_url} from "../../../../api/urls.ts";
import type {LoginReq} from "../../../../Types/LoginReq.ts";

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

export default signup;