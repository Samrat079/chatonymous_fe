import {convos_url} from "../../../api/urls.ts";

const convoByIdOrParticipants = async (
    id?: string,
    participants?: string[]
) => {
    const url = new URL(convos_url);
    const params = new URLSearchParams();

    if (id) params.append('id', id);
    participants?.forEach( (i) => {
        params.append('participants', i);
    })

    url.search = params.toString();

    const res = await fetch(url);
    return res.json();
}

export default convoByIdOrParticipants;