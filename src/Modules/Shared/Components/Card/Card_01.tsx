import type {PropsWithChildren} from "react";

const Card_01 = ({children}: PropsWithChildren) => {
    return (
        <div className="p-8 bg-white/40 backdrop-blur-xl rounded-xl shadow-xl">
            {children}
        </div>
    )
}
export default Card_01
