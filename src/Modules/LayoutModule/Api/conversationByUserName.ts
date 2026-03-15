import {convos_url} from "../../../api/urls.ts";

const conversationByUserName = async (username: string) => {
    const res = await fetch(convos_url + username);
    return await res.json();
}

export default conversationByUserName;