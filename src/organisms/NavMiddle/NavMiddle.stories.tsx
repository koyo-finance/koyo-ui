// Generated with util/create-component.js
import React from 'react';
import NavMiddle from './NavMiddle';
import { NavMiddleProps } from './NavMiddle.types';
import { ComponentMeta, Story } from '@storybook/react';

export default {
    title: 'organisms/NavMiddle',
    component: NavMiddle,
    argTypes: {

    },
} as ComponentMeta<typeof NavMiddle>;

// Create a master template for mapping args to render the NavMiddle component
const Template: Story<NavMiddleProps> = (args) => <NavMiddle {...args}></NavMiddle>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
    foo: 'bar'
};
