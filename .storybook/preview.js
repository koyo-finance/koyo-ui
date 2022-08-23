import { ThemeProvider } from '../src/theme';
import { useDarkMode } from 'storybook-dark-mode';
import './global.css';

const customViewports = {
	samsungS9: {
		name: 'Samsung Galaxy S9',
		styles: {
			width: '360px',
			height: '740px'
		}
	},
	samsungS20: {
		name: 'Samsung Galaxy S20',
		styles: {
			width: '480px',
			height: '1067px'
		}
	},
	iphone7P: {
		name: 'iPhone 7+',
		styles: {
			width: '414px',
			height: '736px'
		}
	},
	iphone11: {
		name: 'iPhone 11',
		styles: {
			width: '276px',
			height: '598px'
		}
	}
};

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	layout: 'centered',
	viewport: { viewports: customViewports }
};

export const decorators = [
	(Story) => {
		const isDark = useDarkMode();
		return (
			<ThemeProvider isDark={isDark}>
				<Story />
			</ThemeProvider>
		);
	}
];
