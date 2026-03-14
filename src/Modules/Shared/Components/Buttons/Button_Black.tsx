import type {ButtonType} from "./Button_Types.ts";

const ButtonBlack = ({children, ...props}: ButtonType) => {
    return (
        <button
            {...props}
            className="py-4 px-8 border border-black bg-black rounded-xl text-white font-bold hover:bg-transparent hover:text-black hover:border-black transition-all duration-200"
            children={children}
        />
    )
}
export default ButtonBlack
