type LoginReq = {
    userName: string;
    passWord: string;
};

const Login = async ({userName, passWord}: LoginReq) => {
    const res = await fetch(
        "https://chatonymous-be.onrender.com/api/users/login",
        {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({userName, passWord}),
        });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
    }

    return res.json();
};

export default Login;