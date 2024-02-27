import React, { ButtonHTMLAttributes, PropsWithoutRef } from "react";
import { ButtonProps } from "./Button.types";
import styled from "styled-components";
import _classNames from "classnames";

const _Button = styled("button")({
    padding: "12px 4px", 
    border: "none", 
    fontSize: 16, 
    textAlign: "center", 
    cursor: "pointer", 
    backgroundColor: "transparent", 
    
    "&.ks-button--primary,&.ks-button--secondary": {
        borderRadius: 4
    }, 

    "&.ks-button--primary": { 
        backgroundColor: "var(--ks-primary-color-main, #5856D6)",
        color: "var(--ks-secondary-color-main, #fff)"
    },

    "&.ks-button--secondary": {
        backgroundColor: "var(--ks-secondary-color-main, #fff)",
        color: "var(--ks-primary-color-main, #5856D6)",
        border: "1px solid var(--ks-primary-color-main, #5856D6)"
    },
    "&.ks-button--CTA": {
        backgroundColor: "var(--ks-primary-color-main, #5856D6)",
        color: "var(--ks-secondary-color-main, #fff)",
        borderRadius: "10rem",
    }
})

const Button: React.FC<PropsWithoutRef<ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps>> = (props) => {
    const { title, buttonType, className, disableAnimation = false, ...buttonProps } = props;
    return (
        <_Button 
            className={_classNames(!disableAnimation ? "ks-button--animation" : "", typeof buttonType !== "undefined" ? `ks-button--${ buttonType }` : "", typeof className !== "undefined" ? className : "")}
            {...buttonProps}
        >
            {title ?? ""}
        </_Button>
    )
}
export default Button;