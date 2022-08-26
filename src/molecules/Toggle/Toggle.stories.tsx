// Generated with util/create-component.js
import React from 'react';
import Toggle from './Toggle';
import { ToggleProps } from './Toggle.types';
import { ComponentMeta, Story } from '@storybook/react';
import { koyoIcons } from '../../atoms';

export default {
	title: 'molecules/Toggle',
	component: Toggle,
	argTypes: {
		icon: {
			control: {
				type: 'select',
				options: Object.keys(koyoIcons)
			},
			defaultValue: 'gasPump'
		}
	}
} as ComponentMeta<typeof Toggle>;

// Create a master template for mapping args to render the Toggle component
const Template: Story<ToggleProps> = (args) => <Toggle {...args}></Toggle>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
	checked: true,
	onChange: (value: boolean) => {
		console.log(value);
	},
	icon: 'gasPump'
};
