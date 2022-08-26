// Generated with util/create-component.js
import React from 'react';
import Card from './Card';
import { CardProps } from './Card.types';
import { ComponentMeta, Story } from '@storybook/react';
import { Text } from '../Text';

export default {
	title: 'atoms/Card',
	component: Card,
	argTypes: {
		variant: {
			control: {
				type: 'select',
				options: ['base', 'inform', 'token', 'actions', 'modal', 'listElement']
			},
			defaultValue: 'base',
			description: 'Variant of the card.'
		},
		padding: {
			control: {
				type: 'select',
				options: ['none', 'sm', 'md', 'lg']
			},
			defaultValue: 'md',
			description: 'The padding of the card.'
		}
	},
	parameters: {
		layout: 'fullscreen'
	},
	decorators: [
		(Story) => (
			<div style={{ padding: '3rem' }}>
				<Story />
			</div>
		)
	]
} as ComponentMeta<typeof Card>;

// Create a master template for mapping args to render the Card component
const Template: Story<CardProps> = (args) => (
	<Card {...(args as any)}>
		<Text.Body>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga provident distinctio temporibus maxime vitae cupiditate inventore
			repellat numquam, incidunt esse quam pariatur saepe iusto minima architecto, at sint earum.
		</Text.Body>
	</Card>
);

export const Base = Template.bind({});
Base.args = {
	variant: 'base',
	border: false
};

export const Inform = Template.bind({});
Inform.args = {
	variant: 'inform',
	border: false
};

export const Token = Template.bind({});
Token.args = {
	variant: 'token',
	border: false
};
export const Actions = Template.bind({});
Actions.args = {
	variant: 'actions',
	border: false
};
export const Modal = Template.bind({});
Modal.args = {
	variant: 'modal',
	border: false
};
export const ListElement = Template.bind({});
ListElement.args = {
	variant: 'listElement',
	border: false
};
