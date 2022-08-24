// Generated with util/create-component.js
import React from 'react';
import Slider from './Slider';
import { SliderProps } from './Slider.types';
import { ComponentMeta, Story } from '@storybook/react';
import { useArgs } from '@storybook/addons';

export default {
	title: 'atoms/Slider',
	component: Slider,
	argTypes: {
		variant: {
			control: {
				type: 'select',
				options: ['primary']
			},
			defaultValue: 'primary',
			description: 'Variant of the slider.'
		},
		value: {
			control: { type: 'range' }
		},
		min: {
			control: 'number'
		},
		max: {
			control: 'number'
		},
		step: {
			control: 'number'
		},
		onChange: {
			action: 'onChange'
		}
	},
	parameters: {
		layout: 'centered',
		controls: { exclude: ['overlay', 'onChange'] }
	}
} as ComponentMeta<typeof Slider>;

// Create a master template for mapping args to render the Slider component
const Template: Story<SliderProps> = ({ onChange, ...args }) => {
	const [{ value }, updateArgs] = useArgs();

	return (
		<div
			style={{
				width: '50vw'
			}}
		>
			<Slider
				{...args}
				value={value}
				onChange={(ev) => {
					onChange ? onChange(ev) : null;
					updateArgs({ value: Number(ev) });
				}}
			/>
		</div>
	);
};

// Reuse that template for creating different stories
export const LeverageSlider = Template.bind({});
LeverageSlider.argTypes = {
	value: {
		control: { type: 'range', min: 1.1, max: 30.5, step: 0.1 },
		defaultValue: 1.1
	}
};
LeverageSlider.args = {
	overlay: (value) => `${parseFloat((value ?? 0).toString()).toFixed(2)}x`,
	min: 1.1,
	max: 30.5,
	step: 0.1,
	marks: {
		2: '2x',
		5: '5x',
		10: '10x',
		15: '15x',
		20: '20x',
		25: '25x',
		30: '30x'
	}
};
