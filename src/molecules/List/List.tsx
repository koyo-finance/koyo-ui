// Generated with util/create-component.js
import { styled } from '@storybook/theming';
import React from 'react';

import { ListProps } from './List.types';

const List: React.FC<ListProps> = (props) => (
	<StyledList data-testid="List" padding={props.padding} gap={props.gap} scrollable={props.scrollable}>
		{props.children}
	</StyledList>
);

export default List;

const StyledList = styled.ul<ListProps>`
	background-color: black;
	list-style-type: none;
	padding: ${({ padding }) => padding || '0'};
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: ${({ gap }) => gap || '0'};
	overflow-y: ${({ scrollable }) => (scrollable ? 'scroll' : 'hidden')};
	color: white;
`;
