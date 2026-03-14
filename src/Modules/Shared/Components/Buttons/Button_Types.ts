import type {ButtonHTMLAttributes, ReactNode} from "react";

export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};