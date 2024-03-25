import _classNames from "classnames";
import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const _Button = styled("button")({
    border: "none", 
    backgroundColor: "transparent", 
    borderRadius: 4,
    fontWeight: 600,
    cursor: 'pointer',

    "&.variant-solid": { 
        backgroundColor: "rgba(88, 86, 214, 1)", 
        color: "#fff"
    }, 
    "&.size-small": { 
        fontSize: 14, 
        padding: "8px 12px"
    },
    "&.size-medium": {
        fontSize: 16, 
        padding: "8px 24px"
    },
    "&.size-large": {
        fontSize: 16, 
        padding: "12px 32px"
    },
    "&:hover": { 
        opacity: 0.85
    },
    "&.disabled": { 
        backgroundColor: 'rgba(0, 0, 0, 0.12)', 
        color: "rgba(0, 0, 0, 0.4)",
        "&:hover": { 
            opacity: 1
        }
    }
})

const Button: React.FC<ButtonProps> = (props) => {
    const { variant = "solid", className = "", size = "medium", disableAnimation = false, disabled = false, children, ...buttonProps } = props;
    return (
        <_Button 
            className={_classNames(!disableAnimation ? "ks-button--animation" : "", `variant-${variant}`, `size-${size}`, disabled ? "disabled" : "", className)}
            disabled={disabled}
            {...buttonProps}
        >
            {children}
        </_Button>
    )
}
export default Button;