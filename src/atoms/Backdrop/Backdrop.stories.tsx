// Generated with util/create-component.js
import React from 'react';
import Backdrop from './Backdrop';
import { BackdropProps } from './Backdrop.types';
import { ComponentMeta, Story } from '@storybook/react';

export default {
	title: 'atoms/Backdrop',
	component: Backdrop,
	argTypes: {}
} as ComponentMeta<typeof Backdrop>;

// Create a master template for mapping args to render the Backdrop component
const Template: Story<BackdropProps> = (args) => {
	return <Backdrop {...args}></Backdrop>;
};

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
	closeModal: (value) => {
		console.log(value);
	},
	modalIsOpen: true
};
