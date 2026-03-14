const getCurrentUser = async () => {

    const token = localStorage.getItem("token");
    console.log("token found: " + token);

    if (!token) throw new Error("No token provided");

    const url = "https://chatonymous-be.onrender.com/api/users/current_user"
    const res = await fetch(url, {
            headers: {"authorization": `Bearer ${token}`, "Content-Type": "application/json"}
        }
    )

    if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
    }

    const data = await res.json();
    console.log(data);
    return data;
}

export default getCurrentUser;