import {Route, Routes} from "react-router";
import Conversations from "../ConversationsModule/Conversations.tsx";
import Welcome from "../WelcomeModule/Welcome.tsx";
import Layout from "./Layout.tsx";
import AuthGuard from "../AuthPageModule/AuthGuard/AuthGuard.tsx";
import LoginForm from "../AuthPageModule/Login/LoginForm.tsx";
import SignupForm from "../AuthPageModule/Signup/SignupForm.tsx";

const App = () => {
    return (
        <Routes>
            // Full screen
            <Route index element={<Welcome/>}/>
            <Route path="login" element={<LoginForm/>}/>
            <Route path="signup" element={<SignupForm/>}/>

            // Auth guard
            <Route element={<AuthGuard/>}>

                // Not full screen
                <Route element={<Layout/>}>
                    <Route path="/conversations/:id?" element={<Conversations/>}/>
                </Route>
            </Route>

        </Routes>
    )
}
export default App
