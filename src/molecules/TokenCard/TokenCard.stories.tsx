// Generated with util/create-component.js
import React from 'react';
import TokenCard from './TokenCard';
import { TokenCardProps } from './TokenCard.types';
import { ComponentMeta, Story } from '@storybook/react';

export default {
	title: 'molecules/TokenCard',
	component: TokenCard,
	argTypes: {
		width: {
			type: 'string'
		},
		size: {
			type: 'string'
		}
	}
} as ComponentMeta<typeof TokenCard>;

// Create a master template for mapping args to render the TokenCard component
const Template: Story<TokenCardProps> = (args) => <TokenCard {...args}></TokenCard>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
	symbol: 'USDC',
	logoURI: ['https://tokens.koyo.finance/logos/DAI/512x512.png'],
	size: '2rem',
	padding: 'sm',
	width: '50vw',
	onClick: () => {}
};
