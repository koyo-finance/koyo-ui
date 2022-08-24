// Generated with util/create-component.js
import React from 'react';
import FallbackCurrencyLogo from './FallbackCurrencyLogo';
import { FallbackCurrencyLogoProps } from './FallbackCurrencyLogo.types';
import { ComponentMeta, Story } from '@storybook/react';

export default {
	title: 'atoms/FallbackCurrencyLogo',
	component: FallbackCurrencyLogo,
	argTypes: {
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
} as ComponentMeta<typeof FallbackCurrencyLogo>;

// Create a master template for mapping args to render the FallbackCryptoLogo component
const Template: Story<FallbackCurrencyLogoProps> = (args) => <FallbackCurrencyLogo {...args}></FallbackCurrencyLogo>;

// Reuse that template for creating different stories
export const DAILogo = Template.bind({});
DAILogo.args = {
	srcs: ['https://tokens.koyo.finance/logos/DAI/512x512.png'],
	alt: 'DAI'
};
