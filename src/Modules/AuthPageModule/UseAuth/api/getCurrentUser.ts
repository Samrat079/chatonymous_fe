import {users_url} from "../../../../api/urls.ts";

const getCurrentUser = async () => {

    const token = localStorage.getItem("token");

    if (!token) throw new Error("No token provided");

    const url = users_url + "/current_user";
    const res = await fetch(url, {
            headers: {"authorization": `Bearer ${token}`, "Content-Type": "application/json"}
        }
    )

    if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
    }

    return res.json();
}

export default getCurrentUser;