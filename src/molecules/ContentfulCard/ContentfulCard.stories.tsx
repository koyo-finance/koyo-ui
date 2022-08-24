// Generated with util/create-component.js
import React from 'react';
import ContentfulCard from './ContentfulCard';
import { ContentfulCardProps } from './ContentfulCard.types';
import { ComponentMeta, Story } from '@storybook/react';

export default {
    title: 'molecules/ContentfulCard',
    component: ContentfulCard,
    argTypes: {

    },
} as ComponentMeta<typeof ContentfulCard>;

// Create a master template for mapping args to render the ContentfulCard component
const Template: Story<ContentfulCardProps> = (args) => <ContentfulCard {...args}></ContentfulCard>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
    variant: 'base'
};

export const Inform = Template.bind({});
Inform.args = {
    variant: 'inform'
};
