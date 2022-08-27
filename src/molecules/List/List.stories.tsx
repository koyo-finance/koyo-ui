// Generated with util/create-component.js
import React from 'react';
import List from './List';
import { ListProps } from './List.types';
import { ComponentMeta, Story } from '@storybook/react';

export default {
	title: 'molecules/List',
	component: List,
	argTypes: {}
} as ComponentMeta<typeof List>;

// Create a master template for mapping args to render the List component
const Template: Story<ListProps> = (args) => (
	<List {...args}>
		<li>Token1</li>
		<li>Token2</li>
		<li>Token3</li>
	</List>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
	gap: '1rem',
	padding: '1rem',
	scrollable: true
};
