// Generated with util/create-component.js
import React from 'react';
import TokenAmountInput from './TokenAmountInput';
import { TokenAmountInputProps } from './TokenAmountInput.types';
import { ComponentMeta, Story } from '@storybook/react';

export default {
    title: 'molecules/TokenAmountInput',
    component: TokenAmountInput,
    argTypes: {

    },
} as ComponentMeta<typeof TokenAmountInput>;

// Create a master template for mapping args to render the TokenAmountInput component
const Template: Story<TokenAmountInputProps> = (args) => <TokenAmountInput {...args}></TokenAmountInput>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
    foo: 'bar'
};
