import Toggle01 from "../../Shared/Components/Toggle/Toggle_01.tsx";
import {FaSearch} from "react-icons/fa";
import {useSearchParams} from "react-router";
import type {ChangeEvent} from "react";

const ToggleSearch = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") || "";
    const isNewContact = searchParams.get("isNewContact");
    const contactBool = isNewContact === "true";

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchParams({isNewContact: contactBool.toString(), query: query});
    };

    const toggleContacts = () => {
        const nextState = !contactBool;
        setSearchParams({isNewContact: nextState.toString(), query: query});
    };

    return (
        // Search bar
        <div className="flex items-center gap-2 px-3 py-4 rounded-xl
                bg-white/50 backdrop-blur-md shadow-lg
                border border-white/40"
        >
            <FaSearch className="text-gray-400"/>
            <input
                type="search"
                placeholder={contactBool ? "Search new contacts..." : "Search conversations..."}
                value={query}
                onChange={handleSearchChange}
                className="flex-1 bg-transparent outline-none
                   placeholder:text-gray-500 text-sm"
            />

            {/* Toggle */}
            <Toggle01
                checked={contactBool}
                onClick={toggleContacts}
            />
        </div>
    )
}
export default ToggleSearch
