// Generated with util/create-component.js
import React from 'react';

import { NavCenterProps } from './NavCenter.types';
import { Dropdown } from '../../molecules';
import { dropdownGroupPositionType } from 'molecules/Dropdown/Dropdown.types';
import styled from 'styled-components';

const NavCenter: React.FC<NavCenterProps> = (props) => {
	let positionsArray: dropdownGroupPositionType[] = [];
	if (props.categories.length === 1) positionsArray = [undefined];
	if (props.categories.length === 2) positionsArray = ['left', 'right'];
	if (props.categories.length >= 3) {
		positionsArray = props.categories.map((_, index) => {
			if (index > 0 && index < props.categories.length - 1) return 'center';
			if (index === 0) return 'left';
			if (index === props.categories.length - 1) return 'right';
			return undefined;
		});
	}
	return (
		<StyledNavCenter categories={props.categories} titles={props.titles} data-testid="NavCenter">
			{props.categories.map((category, i) => (
				<Dropdown
					category={category}
					titles={props.titles[i]}
					hoverColor={props.hoverColor}
					mobile={props.mobile}
					inGroupPosition={positionsArray[i]}
					open={props.open === category}
				/>
			))}
		</StyledNavCenter>
	);
};

export default NavCenter;

const StyledNavCenter = styled.div<NavCenterProps>`
	display: flex;
	flex-direction: row;
	width: ${(props) => (props.width ? props.width : 'auto')};
`;
