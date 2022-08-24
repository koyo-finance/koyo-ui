// Generated with util/create-component.js
import React from 'react';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';
import { ComponentMeta, Story } from '@storybook/react';

export default {
    title: 'molecules/Dropdown',
    component: Dropdown,
    argTypes: {

    },
} as ComponentMeta<typeof Dropdown>;

// Create a master template for mapping args to render the Dropdown component
const Template: Story<DropdownProps> = (args) => <Dropdown {...args}></Dropdown>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
    category: 'KYO',
    titles: ['lock', 'farms', 'vote'],
    mobile: false,
};
