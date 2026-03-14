type LoginReq = {
    userName: string;
    passWord: string;
};

const Signup = async ({userName, passWord}: LoginReq) => {
    const res = await fetch(
        "https://chatonymous-be.onrender.com/api/users/signup",
        {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({userName, passWord}),
        });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
    }

    const data = await res.json();
    console.log(data);
    return data;
};

export default Signup;