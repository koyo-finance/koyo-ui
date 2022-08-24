import React from 'react';
import { darkTheme, lightTheme, KoyoTheme } from './themes';
import { ThemeProvider as StyledComponentsThemeProvider, ThemeContext } from 'styled-components';
import './global.css';

export interface ThemeProviderProps {
	isDark?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ isDark, children }) => {
	const theme = isDark ? darkTheme : lightTheme;
	return <StyledComponentsThemeProvider theme={theme}><>{children}</></StyledComponentsThemeProvider>;
};

export const useTheme = () => React.useContext<KoyoTheme>(ThemeContext);
