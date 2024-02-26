import React, { ButtonHTMLAttributes, PropsWithoutRef } from "react";
import { ButtonProps } from "./Button.types";
import "./Button.css"

const Button: React.FC<PropsWithoutRef<ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps>> = (props) => {
    const { title, buttonType, className, disableAnimation = false, textDecoration = "none", color, backgroundColor, style, ...buttonProps } = props;
    return (
        <button
            className={`ks-button ${!disableAnimation ? "ks-button--animation" : ""} ${typeof buttonType !== "undefined" ? `ks-button--${buttonType}` : ""} ${typeof className !== "undefined" ? className : ""}`}
            style={{ 
                textDecoration, 
                color,
                backgroundColor,
                ...style
            }}
            {...buttonProps}
        >
            {title ?? ""}
        </button>

    )
}
export default Button;