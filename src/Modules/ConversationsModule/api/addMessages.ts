import {messages_url} from "../../../api/urls.ts";
import type {MessageType} from "../../../Types/MessageType.ts";

const addMessages = async ({
    conversationId,
    textContent,
    // createdBy
}: MessageType) => {
    const token = localStorage.getItem('token');

    const res = await fetch(messages_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            conversationId,
            textContent,
            // createdBy
        })
    })

    if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg);
    }

    return res.json();
}

export default addMessages;