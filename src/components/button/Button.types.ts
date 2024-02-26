import { ReactNode } from "react"

export interface ButtonProps { 
    title: ReactNode,
    buttonType?: "primary" | "secondary" | "CTA",
    className?: string,
    disableAnimation?: boolean,
    textDecoration?: React.CSSProperties["textDecoration"], 
    color?: string, 
    backgroundColor?: string
}