// Generated with util/create-component.js
import { Card, FallbackCryptoLogo, Icon } from '../../atoms';
import React from 'react';
import styled from 'styled-components';

import { TokenCardProps } from './TokenCard.types';

const TokenCard: React.FC<TokenCardProps> = ({ symbol, logoURI, size, padding, width }) => (
	<StyledTokenCard data-testid="TokenCard" padding={padding} width={width}>
		<StyledLogoNameCard>
			<FallbackCryptoLogo srcs={logoURI} alt={symbol} size={size} />
			<div>USDC</div>
		</StyledLogoNameCard>
		<Icon name="arrowDown" size={size} color={'text'} />
	</StyledTokenCard>
);

export default TokenCard;

export interface StyledTokenCardProps {
	width?: string;
}

const StyledTokenCard = styled(Card).attrs<StyledTokenCardProps>((props) => ({
	width: props.width || 'auto'
}))<StyledTokenCardProps>`
	height: auto;
	width: ${(props) => props.width};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	color: white;
	cursor: pointer;
	transition: 0.1s ease-in-out;
	padding-left: 0.75rem;

	&:hover {
		background-color: ${(props) => props.theme.colors.cell.tertiary};
	}
`;

const StyledLogoNameCard = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;
	color: white;
`;
