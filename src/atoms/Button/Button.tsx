// Generated with util/create-component.js
import React from 'react';
import styled, { DefaultTheme, StyledComponentBase, keyframes, css } from 'styled-components';

import { ButtonProps } from './Button.types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, disabled, variant, size, animate, fluid, style, ...rest }, ref) => (
	<StyledButton
		data-testid="button"
		variant={variant}
		size={size}
		animate={animate}
		fluid={fluid}
		ref={ref}
		style={style}
		{...(rest as StyledComponentBase<'button', DefaultTheme, {}, never>)}
	>
		{children}
	</StyledButton>
));

export interface StyledButtonProps {
	variant: ButtonProps['variant'];
	size: ButtonProps['size'];
	animate: ButtonProps['animate'];
	fluid: ButtonProps['fluid'];
}

const StyledButtonKeyframes = keyframes`
    0% {
        transform: scale(0.95);
    }
    40% {
        transform: scale(1.02);
    }
    100% {
        transform: scale(1);
    }
`;

const StyledButton = styled.button.attrs<StyledButtonProps>((props) => ({
	variant: props.variant || 'action',
	size: props.size || 'medium',
	animate: typeof props.animate === 'undefined' ? true : props.animate,
	disabled: props.disabled || false
}))<StyledButtonProps>`
	font-family: ${(props) => props.theme.fontFamily.main};
	line-height: 1.5rem;
	font-weight: 600;
	border-radius: 0.5rem;
	border: none;
	width: ${(props) => (props.fluid ? '100%' : 'auto')};

	transition: background-color 0.1s ease-in-out;

	${({ animate }) => {
		switch (animate) {
			case false:
				return '';
			case true:
			default:
				return css`
					animation: ${StyledButtonKeyframes} 0.25s ease-out;
					&:active:hover,
					&:active:focus {
						animation: none;
					}
					&:active:hover,
					&:active:focus {
						transform: scale(0.95);
					}
				`;
		}
	}}

	${({ variant, disabled, theme }) => {
		switch (variant) {
			case 'alert':
				return `
                background-color: ${theme.colors.alert.cell};
                color: ${theme.colors.alert.text};
                &:hover {
                    color: ${theme.colors.alert.text};
                }
                &:active {
                    color: ${theme.colors.alert.text};
                    background-color: ${theme.colors.alert.active};
                }
                &:disabled {
                    color: ${theme.colors.alert.text};
                }
            `;
			case 'danger':
				return `
                background-color: ${theme.colors.danger.cell};
                color: ${theme.colors.danger.text};
                &:hover {
                    color: ${theme.colors.danger.text};
                }
                &:active {
                    color: ${theme.colors.danger.text};
                    background-color: ${theme.colors.danger.active};
                }
                &:disabled {
                    color: ${theme.colors.danger.text};
                }
            `;
			case 'success':
				return `
                background-color: ${theme.colors.success.cell};
                color: ${theme.colors.success.text};
                &:hover {
                    background-color: ${theme.colors.success.hover}
                }
                &:active {
                    background-color: ${theme.colors.success.active};
                }
            `;
			case 'max':
				return `
                background-color: ${theme.colors.cell.background};
                color: ${theme.colors.cell.stroke};
                border: 2px solid ${theme.colors.cell.stroke};
                &:hover {
                    background-color: ${theme.colors.cell.stroke};
                    color: ${theme.colors.cell.background};
                }
                &:active {
                    background-color: ${theme.colors.success.active};
                }
            `;
			case 'action':
			default:
				return `
                background-color: ${theme.colors.action.active};
                color: ${disabled ? theme.colors.action.inactiveText : theme.colors.action.text};
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

	${({ variant }) => variant === 'max' && 'padding: 0.25rem;'}
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

Button.displayName = 'Button';

export default Button;
