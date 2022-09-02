import { CSSProperties } from 'react';

// Generated with util/create-component.js
export type PaddingSizes = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps {
	variant?: 'base' | 'inform' | 'token' | 'actions' | 'modal' | 'listElement';
	padding?: PaddingSizes;
	square?: boolean;
	maxWidth?: string;
	className?: string;
	border?: boolean;
	style?: CSSProperties;
}
