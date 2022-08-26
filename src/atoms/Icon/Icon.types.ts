import { koyoIcons } from './icons';
import type { IconBaseProps } from 'react-icons';

export interface IconProps {
	name: keyof typeof koyoIcons;
	size?: IconBaseProps['size'];
	color?: IconColor;
	className?: string;
	id?: string;
}

export type IconColor = 'primary' | 'secondary' | 'tertiary' | 'footnote' | 'stroke' | 'text' | 'inherit' | 'error';
