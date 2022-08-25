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
	>
		<StyledDropdownTitle>
			<div>{props.category}</div> <Icon name="arrowDown" color="text" size={'1.5rem'} />
		</StyledDropdownTitle>
		<StyledDropdownElementsContainer className="dropdown-content" variant="base" padding="sm">
			{props.titles.map((title) => (
				<StyledDropdownElement hoverColor="">{title}</StyledDropdownElement>
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
			case 'middle':
				return 'border-radius: 0;';
			case 'right':
				return `border-top-left-radius: 0px;
                border-bottom-left-radius: 0px;`;
			default:
				return 'border-radius: 15px;';
		}
	}}

	&:hover {
		height: auto;
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
	}

	&:hover .dropdown-content {
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
