// Generated with util/create-component.js
import React from 'react';
import NavCenter from './NavCenter';
import { NavCenterProps } from './NavCenter.types';
import { ComponentMeta, Story } from '@storybook/react';

export default {
	title: 'organisms/NavCenter',
	component: NavCenter,
	argTypes: {
		open: {
			control: {
				type: 'select',
				options: ['All Closed', 'Exchange', 'KYO', 'Trade']
			}
		}
	}
} as ComponentMeta<typeof NavCenter>;

// Create a master template for mapping args to render the NavCenter component
const Template: Story<NavCenterProps> = (args) => <NavCenter {...args}></NavCenter>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
	categories: ['Exchange', 'KYO', 'Trade'],
	titles: [['Swap', 'Deposit', 'Withdraw'], ['Lock', 'Vote', 'Farm'], ['Perpetuals']],
	width: '50vw',
	mobile: false,
	open: 'Exchange'
};
