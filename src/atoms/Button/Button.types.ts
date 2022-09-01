import React, { CSSProperties } from 'react';

// Generated with util/create-component.js
export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
	variant?: 'action' | 'alert' | 'danger' | 'success' | 'max';
	size?: 'small' | 'medium' | 'large';
	animate?: boolean;
	fluid?: boolean;
	style?: CSSProperties;
}
