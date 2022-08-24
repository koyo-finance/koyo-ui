// Generated with util/create-component.js
import React from 'react';
import KoyoLogo from './Logo';
import { LogoProps } from './Logo.types';
import { ComponentMeta, Story } from '@storybook/react';

export default {
    title: 'atoms/Logo',
    component: KoyoLogo,
    argTypes: {

    },
} as ComponentMeta<typeof KoyoLogo>;

// Create a master template for mapping args to render the Logo component
const Template: Story<LogoProps> = (args) => <KoyoLogo {...args}></KoyoLogo>;

// Reuse that template for creating different stories
export const Dark = Template.bind({});
Dark.args = {
    variant: 'dark',
    height: 100,
    width: 200
};

export const Light = Template.bind({});
Light.args = {
    variant: 'light',
    height: 100,
    width: 200
};
