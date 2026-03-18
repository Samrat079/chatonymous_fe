import {messages_url} from "../../../api/urls.ts";

const messagesSearch = async (
    convoId?: string,
    textContent?: string
) => {
    const url = new URL(messages_url);
    const params = new URLSearchParams();

    if (convoId) params.append("conversationId", convoId)
    if (textContent) params.append("textContent", textContent);
    url.search = params.toString();

    const res = await fetch(url);
    return res.json();
}

export default messagesSearch;