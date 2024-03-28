import { Meta, StoryFn } from "@storybook/react";
import CheckBox from "./CheckBox";
import { CheckBoxProps } from "./CheckBox.types";

export default {
    title: "KS-lib/CheckBox",
    component: CheckBox,
    tags: ['autodocs'],
} as Meta<CheckBoxProps>;

const Template: StoryFn<CheckBoxProps> = (args) => <CheckBox {...args} />;

export const CheckBoxKS = Template.bind({});
CheckBoxKS.args = {
    defaultChecked: true,
    disabled: false,
    checked: false,
    sizes: "medium"
};