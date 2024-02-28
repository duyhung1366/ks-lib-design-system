// smartRating.stories.tsx
import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";
import { ButtonProps as ButtonType } from "./Button.types";
import { ButtonHTMLAttributes, PropsWithoutRef } from "react";

type ButtonProps = PropsWithoutRef<ButtonHTMLAttributes<HTMLButtonElement> & ButtonType>

export default {
    title: "KS-lib/Button",
    component: Button,
    tags: ['autodocs'],
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
    title: "Primary",
    buttonType: "primary",
    style: { 
        minWidth: 150, 
        minHeight: 43
    }
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
    title: "Secondary",
    buttonType: "secondary",
    style: {
        minWidth: 150,
        minHeight: 43
    }
};

export const ButtonCTA = Template.bind({});
ButtonCTA.args = {
    title: "CTA Button",
    buttonType: "CTA",
    style: {
        minWidth: 150,
        minHeight: 43
    }
};

export const ButtonLink = Template.bind({});
ButtonLink.args = {
    title: "Button link",
    style: { 
        textDecoration: "underline", 
        color: 'var(--ks-primary-color-main, #5856D6)'
    },
    onClick: () => { 
        alert("hello")
    }
};