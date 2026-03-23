import type {UserType} from "../../../../Types/UserType.ts";
import {users_url} from "../../../../api/urls.ts";

const updateCurrUser = async ({bio}: UserType) => {
    const token = localStorage.getItem("token");
    const res = await fetch(
        users_url + "/update",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                bio,
            })
        })

    if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
    }
    return res.json();
}

export default updateCurrUser;