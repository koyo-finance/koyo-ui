// Generated with util/create-component.js
import { HandleProps, SliderProps as RCSliderProps } from 'rc-slider';
import { CSSProperties } from 'react';

export interface SliderHandleExtProps {
	overlayTransform?: (value?: number) => string;
}

export interface SliderHandleProps extends HandleProps {
	index: number;
	dragging?: boolean;
}

export interface SliderProps extends Omit<RCSliderProps, 'marks' | 'min' | 'max' | 'step'> {
	overlay?: SliderHandleExtProps['overlayTransform'];
	marks?: Record<number, string>;
	min: number;
	max: number;
	step: number;
	style?: CSSProperties;
	variant?: 'primary';
}
