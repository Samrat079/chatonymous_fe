import type {LoginReq} from "../../../../Types/LoginReq.ts";
import {users_url} from "../../../../api/urls.ts";

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

export default login;