import React, {type InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input01: React.FC<InputProps> = ({label, ...props}) => {
    return (
        <label>
            {label}
            <input
                {...props}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/50 backdrop-blur-md border border-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
        </label>
    );
};

export default Input01;