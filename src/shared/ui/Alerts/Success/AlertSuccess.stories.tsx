// import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";

// import { AlertSuccess } from "./AlertSuccess";

// const meta = {
//     title: "Shared/AlertSuccess",
//     component: AlertSuccess,
//     tags: ["autodocs"],
//     parameters: {
//         // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
//         layout: "fullscreen",
//     },
//     args: {
//         setShowSuccessAlert: fn(),
//         isOpen,
//     },
// } satisfies Meta<typeof AlertSuccess>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const IsSuccess: Story = {
//     args: {
//         user: {
//             name: "Jane Doe",
//         },
//     },
// };

// export const LoggedOut: Story = {};

import { Meta, Story } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AlertSuccess, AlertProps } from "./AlertSuccess";

export default {
    title: "Components/AlertSuccess",
    component: AlertSuccess,
    argTypes: {
        isOpen: { control: "boolean" },
    },
} as Meta;

const Template: Story<AlertProps> = (args) => (
    <Router>
        <ChakraProvider>
            <AlertSuccess {...args} />
        </ChakraProvider>
    </Router>
);

// export const Default = Template.bind({});
// Default.args = {
//     isOpen: true,
// };

export const Default = {
    args: {
        isOpen: true,
    },
};
