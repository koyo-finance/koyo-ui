// Generated with util/create-component.js
import React from 'react';

import { DropdownProps } from './Dropdown.types';
import { Card } from '../../atoms';
import styled from 'styled-components';

const Dropdown: React.FC<DropdownProps> = (props) => (
    <StyledDropdown  data-testid="Dropdown" variant='base' category={props.category} titles={props.titles}  mobile={props.mobile }>
        {props.titles.map((title) => <StyledDropdownElement hoverColor='' padding='1rem'>{title}</StyledDropdownElement>)}
    </StyledDropdown>
);

export default Dropdown;

const StyledDropdown = styled(Card).attrs<DropdownProps>((props) => ({
    mobile: props.mobile || false
}))<DropdownProps>`
    color: white;
    text-align: center;
`

export interface StyledDropdownElementProps {
    hoverColor: string;
    padding: string;
}

const StyledDropdownElement = styled.div.attrs<StyledDropdownElementProps>((props) => ({
    hoverColor: props.hoverColor || props.theme.colors.cell.tertiary,
    padding: props.padding || '1rem'
}))<StyledDropdownElementProps>``
