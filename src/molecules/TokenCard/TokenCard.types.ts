import { PaddingSizes } from 'atoms/Card/Card.types';
import { IconBaseProps } from 'react-icons';

// Generated with util/create-component.js
export interface TokenCardProps {
	symbol: string;
	logoURI: string[];
	size?: IconBaseProps['size'];
	padding?: PaddingSizes;
	width?: string;
	onClick?: () => void;
}
