// Generated with util/create-component.js
import React from 'react';
import styled from 'styled-components';

import { ToggleProps } from './Toggle.types';
import { Switch as HeadlessSwitch } from '@headlessui/react';
import { Icon } from '../../atoms';

const Toggle: React.FC<ToggleProps> = (props) => (
	<div data-testid="Toggle">
		<StyledToggle checked={props.checked} onChange={props.onChange}>
			<StyledSlider checked={props.checked} className={props.checked ? 'transitioned' : ''}>
				{props.icon && (
					<>
						{!props.checked && <StyledIcon name="circleSlash" color={props.checked ? 'stroke' : 'error'} size="1.75rem" />}
						<StyledIcon name={props.icon} color={props.checked ? 'stroke' : 'error'} />
					</>
				)}
			</StyledSlider>
		</StyledToggle>
	</div>
);

export default Toggle;

const StyledToggle = styled(HeadlessSwitch)<ToggleProps>`
	position: relative;
	display: inline-flex;
	height: 30px;
	width: 54px;
	cursor: pointer;
	border: none;
	padding: 0;
	border-radius: 20px;
	transition: 0.2s ease-in-out;
	background-color: ${(props) => (props.checked ? props.theme.colors.cell.stroke : props.theme.colors.cell.tertiary)};
`;

const StyledSlider = styled.span<ToggleProps>`
	margin: 3px 0 0 3px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	height: 1.5rem;
	width: 1.5rem;
	border-radius: 50%;
	background-color: white;
	transition: 0.2s ease-in-out;
	transform: translateX(${(props) => (props.checked ? '24px' : '0')});
`;

const StyledIcon = styled(Icon)`
	position: absolute;
	margin: 0 auto;
	display: block;
`;
