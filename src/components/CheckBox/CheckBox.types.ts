import { InputHTMLAttributes, PropsWithRef } from "react"

export type CheckBoxProps = PropsWithRef<InputHTMLAttributes<HTMLInputElement> & {
    className?: string,
    sizes?: "small" | "medium" | "large",
    disabled?: boolean,
    checked?: boolean,
    defaultChecked?: boolean,
    colorIconChecked?: string,
    onChange?: (checked: boolean) => void
}>