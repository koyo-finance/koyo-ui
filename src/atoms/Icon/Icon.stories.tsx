// Generated with util/create-component.js
import React from 'react';
import Icon from './Icon';
import { IconProps } from './Icon.types';
import { ComponentMeta, Story } from '@storybook/react';
import { koyoIcons } from './icons';

export default {
	title: 'atoms/Icon',
	component: Icon,
	argTypes: {
		name: {
			control: {
				type: 'select',
				options: Object.keys(koyoIcons)
			},
			defaultValue: 'swapVertical'
		},
		size: {
			control: {
				type: 'select',
				options: [
					'0.75rem', // xs
					'0.875rem', // sm
					'1rem', // base
					'1.125rem', // lg
					'1.25rem', // xl
					'1.5rem', // 2xl
					'1.875rem', // 3xl
					'2.25rem', // 4xl
					'3rem', // 5xl
					'3.75rem', // 6xl
					'4.5rem', // 7xl
					'6rem', // 8xl
					'8rem' // 9xl
				]
			},
			defaultValue: '1rem'
		},
		color: {
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'tertiary', 'footnote', 'stroke', 'text']
			},
			defaultValue: 'stroke'
		}
	}
} as ComponentMeta<typeof Icon>;

// Create a master template for mapping args to render the Icon component
const Template: Story<IconProps> = (args) => <Icon {...args}></Icon>;

// Reuse that template for creating different stories
export const InfoCircle = Template.bind({});
InfoCircle.args = {
	name: 'infoCircle',
	color: 'text'
};

export const HelpCircle = Template.bind({});
InfoCircle.args = {
	name: 'helpCircle',
	color: 'text'
};

export const ArrowLeft = Template.bind({});
ArrowLeft.args = {
	name: 'arrowLeft',
	color: 'text'
};

export const SwapVertical = Template.bind({});
SwapVertical.args = {
	name: 'swapVertical',
	color: 'stroke'
};

export const Trash = Template.bind({});
Trash.args = {
	name: 'trash',
	color: 'text'
};

export const TrashFill = Template.bind({});
TrashFill.args = {
	name: 'trashFill',
	color: 'text'
};
