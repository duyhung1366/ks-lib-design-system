// smartRating.stories.tsx
import { StoryFn, Meta } from "@storybook/react";
import SmartRating from "./SmartRating";
import { SmartRatingProps } from "./SmartRating.types";

export default {
    title: "ReactComponentLibrary/Rating",
    component: SmartRating,
} as Meta<SmartRatingProps>;

const Template: StoryFn<SmartRatingProps> = (args) => <SmartRating {...args} />;

export const RatingTest = Template.bind({});
RatingTest.args = {
    title: "Default theme",
    theme: "primary",
    testIdPrefix: "rating",
};

export const RatingSecondary = Template.bind({});
RatingSecondary.args = {
    title: "Secondary theme",
    theme: "secondary",
    testIdPrefix: "rating",
};