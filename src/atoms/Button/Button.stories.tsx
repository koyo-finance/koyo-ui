// Generated with util/create-component.js
import React from 'react';
import Button from './Button';
import { ButtonProps } from './Button.types';
import { ComponentMeta, Story } from '@storybook/react';

export default {
    title: 'atoms/Button',
    component: Button,
    argTypes: {

    },
} as ComponentMeta<typeof Button>;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args}></Button>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
    foo: 'bar'
};
