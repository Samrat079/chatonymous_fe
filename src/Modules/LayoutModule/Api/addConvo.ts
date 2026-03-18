import {convos_url} from "../../../api/urls.ts";

const addConvo = async (participants: string[]) => {
    const token = localStorage.getItem("token");
    const res = await fetch(convos_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            participants,
        })
    })

    if (!res.ok){
        const msg = await res.text();
        throw new Error(msg);
    }

    return res.json();
}

export default addConvo;