// Generated with util/create-component.js
import React from 'react';

import { ContentfulCardProps } from './ContentfulCard.types';
import { Card, Icon } from '../../atoms';
import styled from 'styled-components';

const ContentfulCard: React.FC<ContentfulCardProps> = ({ variant, ...rest }) => (
	<StyledContentfulCard data-testid="ContentfulCard" variant={variant} {...rest}>
		{variant === 'inform' && <Icon name="infoCircle" color='text' />}
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas enim, autem eaque beatae odit magni, fuga mollitia iure atque perferendis facere quas deserunt, consequuntur natus velit voluptates officiis debitis tempora.
	</StyledContentfulCard>
);

export default ContentfulCard;

export interface StyledContentfulCardProps {
    variant: ContentfulCardProps['variant']
}


const StyledContentfulCard = styled(Card).attrs<StyledContentfulCardProps>((props) => ({
    variant: props.variant || 'base'
}))<StyledContentfulCardProps>`
    ${({variant}) =>
        variant === 'inform' && `display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        `
    }
    word-wrap: break-word;
    color: white;
`;
