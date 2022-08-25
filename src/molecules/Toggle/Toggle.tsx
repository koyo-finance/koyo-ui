// Generated with util/create-component.js
import React from 'react';
import styled from 'styled-components';

import { ToggleProps } from './Toggle.types';

const Toggle: React.FC<ToggleProps> = (props) => (
	<label data-testid="Toggle">
		<input type="checkbox" />
		<span className="slider round"></span>
	</label>
);

export default Toggle;

const StyledToggle = styled.div;
