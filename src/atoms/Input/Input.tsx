// Generated with util/create-component.js
import React from 'react';

import { InputProps } from './Input.types';
import styled from 'styled-components';

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return (
		<StyledInput
			placeholder={props.placeholder}
			textAlign={props.textAlign || 'left'}
			variant={props.variant || 'primary'}
			disabled={props.disabled}
			data-testid="input"
			value={props.value}
			form={props.form}
			name={props.name}
			readOnly={props.readOnly}
			required={props.required}
			min={props.min}
			max={props.max}
			step={props.step}
			type={props.type}
			onChange={props.onChange}
			onBlur={props.onBlur}
			onFocus={props.onFocus}
			fontSize={props.fontSize}
			ref={ref}
			style={props.style}
		/>
	);
});
Input.displayName = 'Input';

export default Input;

const StyledInput = styled.input<InputProps>`
	width: 100%;
	font-size: ${({ fontSize }) => {
		switch (fontSize) {
			case 'sm':
				return '0.5rem';
			case 'lg':
				return '1.5rem';
			case 'xl':
				return '2.5rem';
			case 'xxl':
				return '0.5rem';
			case 'md':
			default:
				return '1rem';
		}
	}};
	border: 0;
	margin: 0;
	padding: 0;
	outline: none;
	${({ type, theme }) =>
		type === 'number'
			? `
    border-bottom: 2px solid ${theme.colors.cell.tertiary};
    border-radius: 0;
    padding: 0.2rem 0.4rem;
    font-family: ${theme.fontFamily.mono};
    `
			: `
    border: 2px solid ${theme.colors.cell.tertiary};
    border-radius: 10px;
    padding: 0.6rem 0.6rem;
	font-family: inherit;
    `}
	border-radius: ${({ type }) => (type === 'number' ? `0` : '10px')};
	text-align: ${(props) => props.textAlign || 'left'};
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'text')};
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
	${({ theme, variant }) => {
		switch (variant) {
			case 'alert':
				return `
                border-color: ${theme.colors.alert.cell};
                background-color: ${theme.colors.cell.background};
                color: ${theme.colors.text.primary};
                & ::placeholder { color: ${theme.colors.text.inactive}; }
                & :-ms-input-placeholder { color: ${theme.colors.text.primary}; }
                & ::-moz-placeholder { color: ${theme.colors.text.primary}; }
                & ::-ms-input-placeholder { color: ${theme.colors.text.primary}; }
                `;
			case 'primary':
			default:
				return `
                border-color: ${theme.colors.cell.tertiary};
                background-color: ${theme.colors.cell.primary};
                color: ${theme.colors.text.primary};
                & ::placeholder { color: ${theme.colors.text.primary}; }
                `;
		}
	}}
	background: transparent;
	caret-color: white;
	&:disabled {
		cursor: not-allowed;
	}
	&::-webkit-outer-spin-button,
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	&[type='number'] {
		-moz-appearance: textfield;
	}
`;
