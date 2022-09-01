// Generated with util/create-component.js
import React from 'react';
import styled from 'styled-components';

import { BalanceProps } from './Balance.types';

const Balance: React.FC<BalanceProps> = ({ balance, style }) => (
	<StyledBalance data-testid="Balance" style={style}>
		<div>Balance:</div>
		<StyledBalanceAmount>{balance}</StyledBalanceAmount>
	</StyledBalance>
);

export default Balance;

export interface StyledBalanceProps {
	wrap?: boolean;
}

const StyledBalance = styled.div.attrs<StyledBalanceProps>((props) => ({
	wrap: props.wrap
}))<StyledBalanceProps>`
	display: flex;
	flex-direction: row;
	${({ wrap }) => wrap && 'flex-wrap: wrap;'}
	gap: 0.25rem;
	color: white;
	align-items: center;
	justify-content: center;
`;

const StyledBalanceAmount = styled.div`
	font-family: ${(props) => props.theme.fontFamily.mono};
`;
