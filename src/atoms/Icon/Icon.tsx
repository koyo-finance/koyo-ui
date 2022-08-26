// Generated with util/create-component.js
import React from 'react';
import { useTheme } from 'styled-components';
import { IconColor, IconProps } from './Icon.types';
import { koyoIcons } from './icons';

const Icon: React.FC<IconProps> = ({ name, size, color = 'stroke', className, id }) => {
	const KIcon = koyoIcons[name];
	const theme = useTheme();

	function resolveColor(color: IconColor) {
		switch (color) {
			case 'primary':
				return theme.colors.cell.primary;
			case 'secondary':
				return theme.colors.cell.secondary;
			case 'tertiary':
				return theme.colors.cell.tertiary;
			case 'footnote':
				return theme.colors.cell.footnote;
			case 'text':
				return theme.colors.text.primary;
			case 'error':
				return theme.colors.alert.cell;
			case 'inherit':
				return 'inherit';
			case 'stroke':
			default:
				return theme.colors.cell.stroke;
		}
	}
	return <KIcon data-testid="Icon" color={resolveColor(color)} size={size} className={className} id={id} />;
};

export default Icon;
