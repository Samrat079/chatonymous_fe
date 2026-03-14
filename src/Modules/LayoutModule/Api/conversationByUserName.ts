const conversationByUserName = async (username: string) => {
    const url = "https://chatonymous-be.onrender.com/api/conversations?userName="
    const res = await fetch(url + username);
    return await res.json();
}

export default conversationByUserName;