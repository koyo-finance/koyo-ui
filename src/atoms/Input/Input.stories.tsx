import React from 'react';
import Input from './Input';
import { InputProps } from './Input.types';
import { ComponentMeta, Story } from '@storybook/react';

export default {
	title: 'atoms/Input',
	component: Input,
	argTypes: {
		variant: {
			control: {
				type: 'select',
				options: ['primary', 'alert']
			},
			defaultValue: 'primary'
		},
		placeholder: {
			defaultValue: 'Placeholder',
			control: { type: 'text' }
		},
		disabled: {
			defaultValue: false,
			control: { type: 'boolean' }
		},
		textAlign: {
			defaultValue: 'left',
			control: {
				type: 'select',
				options: ['left', 'center', 'right']
			}
		},
		type: {
			defaultValue: 'text',
			control: {
				type: 'select',
				options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search']
			}
		}
	}
} as ComponentMeta<typeof Input>;

// Create a master template for mapping args to render the Input component
const Template: Story<InputProps> = (args) => <Input {...args}></Input>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
	variant: 'primary',
	placeholder: 'Primary Input'
};

export const Alert = Template.bind({});
Alert.args = {
	variant: 'alert',
	placeholder: 'Alert Input'
};

export const Disabled = Template.bind({});
Disabled.args = {
	placeholder: 'Disabled Input',
	disabled: true
};

export const TextAlignCenter = Template.bind({});
TextAlignCenter.args = {
	placeholder: 'Text Align Center',
	textAlign: 'center'
};

export const TextAlignRight = Template.bind({});
TextAlignRight.args = {
	placeholder: 'Right Aligned Input',
	textAlign: 'right',
	type: 'text'
};
