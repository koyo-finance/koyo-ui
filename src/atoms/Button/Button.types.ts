import React from 'react';

// Generated with util/create-component.js
export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
	variant?: 'action' | 'inform' | 'alert' | 'danger' | 'success';
	size?: 'small' | 'medium' | 'large';
	fluid?: boolean;
}
