import { KoyoTheme } from '../../theme';

export type TextColor = keyof KoyoTheme['colors']['text'];
export type Font = keyof KoyoTheme['fontFamily'];

export interface BaseTextProps {
	variant?: 'light' | 'regular' | 'semi-bold' | 'bold' | 'bolder';
	fontFamily?: Font;
	color?: TextColor;
	align?: 'left' | 'center' | 'right';
	margin?: string;
	size?: string;
}
