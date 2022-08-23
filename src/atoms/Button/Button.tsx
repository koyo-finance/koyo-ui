// Generated with util/create-component.js
import React from 'react';
import styled, { DefaultTheme, StyledComponentBase } from 'styled-components';

import { ButtonProps } from './Button.types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, variant, size, fluid, ...rest }, ref) => (
	<StyledButton
		data-testid="button"
		variant={variant}
		size={size}
		fluid={fluid}
		ref={ref}
		{...(rest as StyledComponentBase<'button', DefaultTheme, {}, never>)}
	>
		{children}
	</StyledButton>
));

type StyledButtonProps = {
	variant: ButtonProps['variant'];
	size: ButtonProps['size'];
	fluid: ButtonProps['fluid'];
};

const StyledButton = styled.button.attrs<StyledButtonProps>((props) => ({
	variant: props.variant || 'action',
	size: props.size || 'medium',
	disabled: props.disabled || false
}))<StyledButtonProps>`
	font-family: ${(props) => props.theme.fontFamily.main};
	line-height: 1.5rem;
	font-weight: 600;
	border-radius: 0.5rem;
	border: none;
	width: ${(props) => (props.fluid ? '100%' : 'auto')};
	transition: background-color 0.1s ease-in-out;
	${({ variant, disabled, theme }) => {
		switch (variant) {
			case 'alert':
				return `
                background-color: ${theme.colors.alert.cell};
                color: ${theme.colors.alert.text};
                border: 1px solid ${theme.colors.alert.text};
                &:hover {
                    color: ${theme.colors.alert.hover};
                    border: 1px solid ${theme.colors.alert.hover};
                }
                &:active {
                    color: ${theme.colors.alert.text};
                    border: 1px solid ${theme.colors.alert.text};
                }
                &:disabled {
                    color: ${theme.colors.alert.text};
                    border: 1px solid ${theme.colors.alert.text};
                }
            `;
			case 'danger':
				return `
                background-color: ${theme.colors.danger.cell};
                color: ${theme.colors.danger.text};
                border: 1px solid ${theme.colors.danger.text};
                &:hover {
                    color: ${theme.colors.danger.hover};
                    border: 1px solid ${theme.colors.danger.hover};
                }
                &:active {
                    color: ${theme.colors.danger.text};
                    border: 1px solid ${theme.colors.danger.text};
                }
                &:disabled {
                    color: ${theme.colors.danger.text};
                    border: 1px solid ${theme.colors.danger.text};
                }
            `;
			case 'success':
				return `
                background-color: ${theme.colors.success.cell};
                color: ${theme.colors.success.text};
                border: 1px solid ${theme.colors.success.text};
                &:hover {
                    color: ${theme.colors.success.hover};
                    border: 1px solid ${theme.colors.success.hover};
                }
                &:active {
                    color: ${theme.colors.success.text};
                    border: 1px solid ${theme.colors.success.text};
                }
                &:disabled {
                    color: ${theme.colors.success.text};
                    border: 1px solid ${theme.colors.success.text};
                }
            `;
			case 'inform':
				return `
                background-color: ${theme.colors.inform.active};
                color: ${theme.colors.inform.text};
                &:active {
                    background-color: ${theme.colors.inform.active};
                }
                &:disabled {
                    background-color: ${theme.colors.inform.active};
                }
                `;
			case 'action':
			default:
				return `
                background-color: ${theme.colors.action.active};
                color: ${disabled ? theme.colors.text.inactive : theme.colors.action.text};
                &:hover {
                    background-color: ${theme.colors.action.hover};
                }
                &:active {
                    background-color: ${theme.colors.action.active};
                }
                &:disabled {
                    background-color: ${theme.colors.action.inactive};
                }
                `;
		}
	}}

	padding: ${({ size }) => {
		switch (size) {
			case 'small':
				return '8px 16px';
			case 'large':
				return '16px 32px';
			case 'medium':
			default:
				return '12px 24px';
		}
	}};
	font-size: ${({ size }) => {
		switch (size) {
			case 'small':
				return '0.875rem';
			case 'large':
				return '1.25rem';
			case 'medium':
			default:
				return '1rem';
		}
	}};
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

Button.displayName = 'Button';

export default Button;
