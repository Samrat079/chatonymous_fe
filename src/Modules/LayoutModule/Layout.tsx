import {NavLink, Outlet, useSearchParams} from "react-router";
import useAuth from "../AuthPageModule/UseAuth/useAuth.tsx";
import NewContacts from "./views/newContacts.tsx";
import OldContacts from "./views/oldContacts.tsx";
import {FaUser} from "react-icons/fa";
import ToggleSearch from "./components/toggleSearch.tsx";

const Layout = () => {
    const {currUser} = useAuth();

    const [searchParams] = useSearchParams();
    const isNewContact = searchParams.get("isNewContact");
    const contactBool = isNewContact === "true";

    return (
        <div className="flex min-h-screen bg-linear-to-br from-cyan-200 to-pink-100">

            <nav className="flex flex-col gap-2 p-2 w-80 h-screen bg-white/50 backdrop-blur-lg border-r border-white/40 shadow-lg">

                <p className="text-2xl py-3 px-2 font-semibold ">
                    Chatonymous
                </p>

                {/* Search with toggle */}
                <ToggleSearch/>

                <div className="flex flex-row flex-1 overflow-hidden rounded-xl shadow-lg">
                    <div className="flex-1 overflow-y-auto bg-white/30">
                        {contactBool ? <NewContacts/> : <OldContacts/>}
                    </div>
                </div>

                {/* profile link */}
                <NavLink
                    to="/profile"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/ 40hover:bg-white/60 border border-white/30 shadow-lg transition"
                >
                    <FaUser className="text-cyan-600"/>
                    {currUser!.userName}
                </NavLink>
            </nav>

            {/* outlet */}
            <div className="flex-1"><Outlet/></div>
        </div>
    );
};

export default Layout;