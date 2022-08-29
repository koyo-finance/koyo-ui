// Generated with util/create-component.js
import React from 'react';
import Balance from './Balance';
import { BalanceProps } from './Balance.types';
import { ComponentMeta, Story } from '@storybook/react';

export default {
	title: 'atoms/Balance',
	component: Balance,
	argTypes: {}
} as ComponentMeta<typeof Balance>;

// Create a master template for mapping args to render the Balance component
const Template: Story<BalanceProps> = (args) => <Balance {...args}></Balance>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
	balance: '1234802.321',
	wrap: false
};
