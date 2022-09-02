// Generated with util/create-component.js
import styled from 'styled-components';

import { BaseTextProps } from './Text.types';

const getSharedStyles = (props: any) => `
    font-size: ${props.size}
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

const Headline = styled.h1<BaseTextProps>`
	${(props) => getSharedStyles(props)}
	font-size: 40px;
	line-height: 60px;
`;

const Title = styled.h2<BaseTextProps>`
	${(props) => getSharedStyles(props)}
	font-size: 24px;
	line-height: 36px;
`;

const Subtitle = styled.h3<BaseTextProps>`
	${(props) => getSharedStyles(props)}
	font-size: 20px;
	line-height: 30px;
`;

const Body = styled.p<BaseTextProps>`
	${(props) => getSharedStyles(props)}
	font-size: 16px;
	line-height: 24px;
`;

export default {
	Headline,
	Title,
	Subtitle,
	Body
};
