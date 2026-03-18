import {Route, Routes} from "react-router";
import Conversations from "./Modules/ConversationsModule/Conversations.tsx";
import Welcome from "./Modules/WelcomeModule/Welcome.tsx";
import Layout from "./Modules/LayoutModule/Layout.tsx";
import AuthGuard from "./Modules/AuthPageModule/AuthGuard/AuthGuard.tsx";
import LoginForm from "./Modules/AuthPageModule/Login/LoginForm.tsx";
import SignupForm from "./Modules/AuthPageModule/Signup/SignupForm.tsx";
import Profile from "./Modules/ProfileModule/Profile.tsx";

const App = () => {
    return (
        <Routes>
            // Full screen
            <Route path="/welcome" element={<Welcome/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/signup" element={<SignupForm/>}/>

            // Auth guard
            <Route element={<AuthGuard/>}>

                // Not full screen
                <Route element={<Layout/>}>
                    <Route index path="/:id?" element={<Conversations/>}/>
                    <Route path="/profile" element={<Profile />}/>
                </Route>
            </Route>

        </Routes>
    )
}
export default App
