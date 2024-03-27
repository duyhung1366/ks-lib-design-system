import _classNames from "classnames";
import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const primaryColor = "var(--ks-primary-color-main, #5856d6)";
const whiteColor = "var(--ks-white-color-default, #fff)"

const _Button = styled("button")({
    border: "none", 
    backgroundColor: "transparent", 
    borderRadius: 4,
    fontWeight: 600,
    cursor: 'pointer',

    "&.variant-solid, &.variant-round, &.variant-icon, &.variant-fab": {
        backgroundColor: primaryColor, 
        color: whiteColor,

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
    }, 
    "&.variant-outline, &.variant-ghost": {
        backgroundColor: "transparent",
        border: `1px solid ${primaryColor}`,
        color: primaryColor,

        "&:hover": {
            backgroundColor: "rgba(88, 86, 214, 0.12)",
        },
        "&.disabled": {
            backgroundColor: 'transparent',
            color: "rgba(0, 0, 0, 0.4)",
            border: "1px solid rgba(0, 0, 0, 0.12)",
            "&:hover": {
                opacity: 1
            }
        }
    }, 
    "&.variant-round": { 
        borderRadius: "21.5px"
    },
    "&.variant-link": { 
        color: '#0d6efd',
        textDecoration: "underline",

        "&:hover": {
            backgroundColor: "rgba(88, 86, 214, 0.12)",
            borderRadius: "21.5px"
        },
        "&:disabled": {
            color: "rgba(0, 0, 0, 0.4)",
            "&:hover": {
                backgroundColor: "transparent",
                borderRadius: 0
            }
        }
    },
    "&.variant-icon": {
        "&.size-small": {
            padding: "4px"
        },
        "&.size-medium": {
            padding: "8px"
        },
        "&.size-large": {
            padding: "12px"
        }, 
    },
    "&.variant-ghost": { 
        borderColor: "rgba(0, 0, 0, 0.12)",

        "&:hover": { 
            backgroundColor: "rgba(0, 0, 0, 0.08)"
        }
    },
    "&.variant-fab": { 
        fontSize: "16px !important",
        "&.size-small": {
            borderRadius: 17.5
        },
        "&.size-medium": {
            padding: "11px 16px",
            borderRadius: 20.5
        },
        "&.size-large": {
            padding: "16px",
            borderRadius: 25.5
        },
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