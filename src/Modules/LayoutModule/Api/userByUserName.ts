import {users_url} from "../../../api/urls.ts";

const UserByUserName = async (
    userName: string,
) => {
    const url = new URL(users_url);
    const params = new URLSearchParams();
    params.append('userName', userName);

    url.search = params.toString();

    const res = await fetch(url);
    return res.json();
}

export default UserByUserName;