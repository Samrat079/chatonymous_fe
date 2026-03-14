const DummyChatApi = () => {
    return Array.from({ length: 20 }, () => Math.floor(Math.random() * 1000));
}

export default DummyChatApi;