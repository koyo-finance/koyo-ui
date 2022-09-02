// Generated with util/create-component.js
import React from 'react';
import { LogoProps } from './Logo.types';
import WideDark from '../../assets/wide-dark.svg';
import Wide from '../../assets/wide.svg';

const KoyoLogo: React.FC<LogoProps> = (props) => <div style={props.style}>{props.variant === 'dark' ? <WideDark /> : <Wide />}</div>;

export default KoyoLogo;
