// Generated with util/create-component.js
import React from 'react';

import { DropdownProps } from './Dropdown.types';
import { Card, Icon } from '../../atoms';
import styled from 'styled-components';

const Dropdown: React.FC<DropdownProps> = (props) => (
	<StyledDropdown
		data-testid="Dropdown"
		padding="sm"
		variant="base"
		inGroupPosition={props.inGroupPosition}
		category={props.category}
		titles={props.titles}
		mobile={props.mobile}
		open={props.open}
	>
		<StyledDropdownTitle>
			<div>{props.category}</div> <StyledIcon name="arrowDown" color="text" size={'1.5rem'} open={props.open} />
		</StyledDropdownTitle>
		<StyledDropdownElementsContainer
			className={props.mobile ? (props.open ? 'dropdown-content' : '') : 'dropdown-content'}
			variant="base"
			padding="sm"
		>
			{props.titles.map((title) => (
				<StyledDropdownElement hoverColor={props.hoverColor || ''}>{title}</StyledDropdownElement>
			))}
		</StyledDropdownElementsContainer>
	</StyledDropdown>
);

export default Dropdown;

const StyledDropdown = styled(Card).attrs<DropdownProps>((props) => ({
	mobile: props.mobile || false,
	inGroupPosition: props.inGroupPosition
}))<DropdownProps>`
	color: white;
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	font-weight: 600;
	position: relative;
	width: 10vw;

	${({ inGroupPosition }) => {
		switch (inGroupPosition) {
			case 'left':
				return `border-top-right-radius: 0px;
                border-bottom-right-radius: 0px;`;
			case 'center':
				return 'border-radius: 0;';
			case 'right':
				return `border-top-left-radius: 0px;
                border-bottom-left-radius: 0px;`;
			default:
				return 'border-radius: 15px;';
		}
	}}

	${({ mobile, open }) =>
		!mobile
			? `&:hover {
		height: auto;
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
	}`
			: open
			? `
		height: auto;
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
	`
			: ''}
	${({ mobile }) => !mobile && '&:hover '}.dropdown-content {
		display: flex;
		border-top-left-radius: 0px;
		border-top-right-radius: 0px;
	}
`;

export interface StyledDropdownTitleProps {}

const StyledDropdownTitle = styled.div<StyledDropdownTitleProps>`
	display: flex;
	flex-diretion: row;
	align-items: center;
	justify-content: center;
	gap: 0.25rem;
`;

export interface StyledDropdownElementsContainerProps {}

const StyledDropdownElementsContainer = styled(Card)`
	cursor: pointer;
	width: 10vw;
	transition: color 0.1s ease-in-out;
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	position: absolute;
	display: none;
	paddint-top: 0;
	transform: translate(-0.5rem, 2rem);
`;

export interface StyledDropdownElementProps {
	hoverColor: string;
}

const StyledDropdownElement = styled.div.attrs<StyledDropdownElementProps>((props) => ({
	hoverColor: props.hoverColor || props.theme.colors.cell.tertiary
}))<StyledDropdownElementProps>`
	cursor: pointer;
	transition: color 0.1s ease-in-out;

	&:hover {
		color: ${({ hoverColor }) => hoverColor};
	}
`;

export interface StyledIconProps {
	open?: boolean;
}

const StyledIcon = styled(Icon).attrs<StyledIconProps>((props) => ({
	open: props.open
}))<StyledIconProps>`
	transition: 0.2s ease-in-out;
	transform: rotate(${({ open }) => (open ? '180deg' : '0')});
`;
