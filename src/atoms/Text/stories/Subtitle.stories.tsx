// Generated with util/create-component.js
import React from 'react';
import Text from '../Text';
import { BaseTextProps } from '../Text.types';
import { ComponentMeta, Story } from '@storybook/react';

export default {
	title: 'atoms/Text/Subtitle',
	component: Text.Subtitle,
	argTypes: {
		variant: {
			control: {
				type: 'select',
				options: ['light', 'regular', 'semi-bold', 'bold', 'bolder']
			}
		},
		color: {
			control: {
				type: 'select',
				options: ['primary', 'inactive']
			},
			defaultValue: 'primary'
		},
		align: {
			control: {
				type: 'select',
				options: ['left', 'center', 'right']
			},
			defaultValue: 'left'
		},
		margin: {
			control: 'text',
			defaultValue: '0'
		},
		fontFamily: {
			control: {
				type: 'select',
				options: ['main', 'mono']
			},
			defaultValue: 'main'
		}
	}
} as ComponentMeta<typeof Text.Subtitle>;

// Create a master template for mapping args to render the Text component
const Template: Story<BaseTextProps> = (args) => <Text.Subtitle {...args}>Lorem Ipsum</Text.Subtitle>;

// Reuse that template for creating different stories
export const Light = Template.bind({});
Light.args = {
	variant: 'light'
};

export const Regular = Template.bind({});
Regular.args = {
	variant: 'regular'
};

export const SemiBold = Template.bind({});
SemiBold.args = {
	variant: 'semi-bold'
};

export const Bold = Template.bind({});
Bold.args = {
	variant: 'bold'
};

export const Bolder = Template.bind({});
Bolder.args = {
	variant: 'bolder'
};
