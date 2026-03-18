import type {ButtonType} from "./Button_Types.ts";

const ButtonBlack = ({children, ...props}: ButtonType) => {
    return (
        <button
            {...props}
            className="py-3 px-6 border border-black bg-black rounded-xl text-white font-semibold hover:bg-transparent hover:text-black hover:border-black transition-all duration-200"
            children={children}
        />
    )
}
export default ButtonBlack
