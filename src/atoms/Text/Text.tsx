// Generated with util/create-component.js
import styled from 'styled-components';

import { BodyProps } from './Text.types';

const getSharedStyles = (props: any) => `
    font-family: ${props.theme.fontFamily[props.fontFamily || 'main']};
    margin: ${props.margin || '0'};
    color: ${props.theme.colors.text[props.color || 'primary']};
    text-align: ${props.align || 'left'};
    font-weight: ${(() => {
		switch (props.variant) {
			case 'light':
				return '300';
			case 'semi-bold':
				return '600';
			case 'bold':
				return '700';
			case 'bolder':
				return '900';
			case 'regular':
			default:
				return '400';
		}
	})()};
`;

const Body = styled.p<BodyProps>`
	${(props) => getSharedStyles(props)}
	font-size: 16px;
	line-height: 24px;
`;

export default {
	Body
};
