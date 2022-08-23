// Generated with util/create-component.js
import * as RCSlider from 'rc-slider';
import { SliderTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';
import styled, { DefaultTheme, StyledComponentBase } from 'styled-components';
import { SliderHandleExtProps, SliderHandleProps, SliderProps } from './Slider.types';

export const SliderHandle: (extProps: SliderHandleExtProps) => React.FC<SliderHandleProps> = ({ overlayTransform }) => {
	return ({ value, dragging, index, ...restProps }) => (
		<SliderTooltip
			prefixCls="rc-slider-tooltip"
			overlay={overlayTransform ? overlayTransform(value) : ''}
			visible={dragging}
			placement="top"
			key={index}
		>
			<RCSlider.Handle value={value} {...restProps} />
		</SliderTooltip>
	);
};

const Slider: React.FC<SliderProps> = ({ overlay, marks, min, max, step, variant, ...rest }) => (
	<StyledSliderContainer data-testid="Slider" variant={variant} {...(rest as StyledComponentBase<'div', DefaultTheme, {}, never>)}>
		<RCSlider.default
			min={min}
			max={max}
			step={step}
			marks={marks}
			handle={SliderHandle({ overlayTransform: overlay }) as RCSlider.SliderProps['handle']}
			{...rest}
		/>
	</StyledSliderContainer>
);

export default Slider;

export interface StyledSliderContainerProps {
	variant: SliderProps['variant'];
}

const StyledSliderContainer = styled.div.attrs<StyledSliderContainerProps>((props) => ({
	variant: props.variant || 'primary'
}))<StyledSliderContainerProps>`
	.rc-slider-rail {
		background: linear-gradient(90deg, rgba(30, 34, 61, 1) 0%, rgba(40, 45, 74, 1) 100%);
	}

	.rc-slider-track {
		background: linear-gradient(90deg, rgba(46, 61, 205, 1) 0%, rgba(45, 66, 252, 1) 100%);
	}

	.rc-slider-dot {
		border: none;
		border-radius: 1px;
		width: 2px;
		margin-left: -1px;
		background: ${({ variant, theme }) => {
			switch (variant) {
				case 'primary':
				default:
					return theme.colors.cell.tertiary;
			}
		}};
	}

	.rc-slider-dot-active {
		background: ${({ variant, theme }) => {
			switch (variant) {
				case 'primary':
				default:
					return theme.colors.cell.stroke;
			}
		}};
	}

	.rc-slider-handle {
		border: ${({ variant, theme }) => {
			switch (variant) {
				case 'primary':
				default:
					return `solid 2px ${theme.colors.cell.stroke}`;
			}
		}};
		background: ${({ variant, theme }) => {
			switch (variant) {
				case 'primary':
				default:
					return theme.colors.cell.tertiary;
			}
		}};
	}

	.rc-slider-handle:active {
		box-shadow: ${({ variant, theme }) => {
			switch (variant) {
				case 'primary':
				default:
					return `0 0 0.4rem 0.6rem ${theme.colors.cell.background}`;
			}
		}};
	}

	.rc-slider-mark-text,
	.rc-slider-mark-text-active {
		color: white;
		opacity: 0.5;
	}

	.rc-slider-mark-text:hover,
	.rc-slider-mark-text-active:hover {
		opacity: 1;
	}

	.rc-slider-tooltip {
		z-index: 5;
	}

	.rc-slider-tooltip-inner {
		box-shadow: none;
		padding: 0.465rem 0.8rem;
		background: ${({ variant, theme }) => {
			switch (variant) {
				case 'primary':
				default:
					return theme.colors.cell.tertiary;
			}
		}};
	}

	.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
		border-top-color: ${({ variant, theme }) => {
			switch (variant) {
				case 'primary':
				default:
					return theme.colors.cell.tertiary;
			}
		}};
	}
`;