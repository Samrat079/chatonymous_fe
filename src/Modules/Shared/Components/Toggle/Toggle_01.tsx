import type {InputHTMLAttributes} from "react";

const Toggle01 = ({...props}: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <div className="relative inline-block w-11 h-5">
            <input
                {...props}
                id="switch-component-1" type="checkbox"
                className="peer appearance-none w-11 h-5 bg-pink-200 rounded-full checked:bg-cyan-200 cursor-pointer transition-colors duration-300"/>
            <label htmlFor="switch-component-1"
                   className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
            </label>
        </div>
    )
}
export default Toggle01
