import { koyoIcons } from 'atoms';
import { ReactElement } from 'react';

// Generated with util/create-component.js
export interface ToggleProps {
	trueValue?: string;
	falseValue?: string;
	checked: boolean;
	children?: ReactElement<HTMLSpanElement>;
	onChange?: (checked: boolean) => void;
	icon?: keyof typeof koyoIcons;
}
