// Generated with util/create-component.js
import React from 'react';
import styled from 'styled-components';

import { BackdropProps } from './Backdrop.types';

const Backdrop: React.FC<BackdropProps> = (props) => (
	<StyledBackdrop
		style={props.style}
		onClick={() => (props.closeModal ? props.closeModal(false) : () => {})}
		modalIsOpen={props.modalIsOpen}
		data-testid="Backdrop"
	/>
);

export default Backdrop;

const StyledBackdrop = styled.div<BackdropProps>`
	position: fixed;
	background-color: #0008;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vh;
	cursor: pointer;
	z-index: 0;
	${({ modalIsOpen }) => (modalIsOpen ? 'display: block;' : 'display: none;')}
`;
