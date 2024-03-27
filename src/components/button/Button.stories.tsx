import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

export default {
    title: "KS-lib/Button",
    component: Button,
    tags: ['autodocs'],
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const ButtonBase = Template.bind({});
ButtonBase.args = {
    children: "xin chao",
    disabled: false,
    variant: "solid",
    size: "medium",
    className: ''
};