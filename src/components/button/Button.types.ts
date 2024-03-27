import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react"

export type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & { 
    variant?: "solid" | "outline" | "round" | "link" | "icon" | "ghost",
    className?: string,
    disableAnimation?: boolean,
    size?: "small" | "medium" | "large",
    disabled?: boolean
}>