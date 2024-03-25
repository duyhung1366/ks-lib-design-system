import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react"

export type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & { 
    variant?: "solid" | "outline" | "round" | "link",
    className?: string,
    disableAnimation?: boolean,
    size?: "small" | "medium" | "large",
    disabled?: boolean
}>