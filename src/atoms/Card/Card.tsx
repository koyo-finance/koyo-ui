// Generated with util/create-component.js
import React from 'react';
import styled, { DefaultTheme, StyledComponentBase } from 'styled-components';

import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({ children, ...rest }) => (
	<StyledCard data-testid="card" {...(rest as StyledComponentBase<'div', DefaultTheme, {}, never>)}>
		{children}
	</StyledCard>
);

export default Card;

const StyledCard = styled.div.attrs<CardProps>((props) => ({
	padding: props.padding || 'md',
	variant: props.variant,
	maxWidth: props.maxWidth,
}))<CardProps>`
background-color: ${({ variant, theme }) => {
		switch (variant) {
			case 'actions':
				return theme.colors.cell.background;
			case 'token':
				return theme.colors.cell.tertiary + '88';
			case 'inform':
				return theme.colors.inform.active + '88';
			case 'base':
			default:
				return theme.colors.cell.secondary + '88';
		}
	}};

    width: 100%;
	max-width: ${(props) => props.maxWidth};
    border-radius: ${(props) => props.square ? '0' : '0.75rem'};
	padding: ${({ padding }) => {
		switch (padding) {
			case 'none':
				return '0';
			case 'sm':
				return '0.5rem';
			case 'lg':
				return '2rem';
			case 'md':
			default:
				return '1rem';
		}
	}};
`;
