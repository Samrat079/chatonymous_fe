import {useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router";

const useLogout = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return () => {
        localStorage.removeItem('token');
        queryClient.removeQueries({queryKey: ["Current_user"]});
        navigate('/login', {replace: true});
    }
}

export default useLogout;