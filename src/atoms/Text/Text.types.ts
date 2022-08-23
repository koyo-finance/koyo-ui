import { KoyoTheme } from '../../theme';

type TextColor = keyof KoyoTheme['colors']['text'];

export interface BodyProps {
	variant?: 'light' | 'regular' | 'semi-bold' | 'bold' | 'bolder';
	fontFamily?: 'main';
	color?: TextColor;
	align?: 'left' | 'center' | 'right';
	margin?: string;
}
