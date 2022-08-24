// Generated with util/create-component.js
import React from 'react';

import { LogoProps } from './Logo.types';

const KoyoLogo: React.FC<LogoProps> = (props) => (
    <img src={props.variant === 'dark' ? '../../assets/wide-dark.svg' : '../../assets/dark.svg'} alt={`Logo - ${props.variant}`} height={props.height} width={props.width} />
);

export default KoyoLogo;

