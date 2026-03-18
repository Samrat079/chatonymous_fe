import type {ButtonType} from "./Button_Types.ts";

const ButtonWhite = ({children, ...props}: ButtonType) => {
    return (
        <button
            {...props}
            children={children}
            className="py-3 px-6 border border-black rounded-xl font-bold hover:bg-black hover:text-white transition-all duration-200"
        />
    )
}
export default ButtonWhite
