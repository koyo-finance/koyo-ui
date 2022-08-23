export interface KoyoTheme {
	isDark: boolean;
	colors: {
		cell: {
			background: string;
			primary: string;
			secondary: string;
			tertiary: string;
			stroke: string;
			footnote: string;
		};
		text: {
			primary: string;
            inactive: string;
		};
		action: {
			active: string;
			inactive: string;
			hover: string;
			text: string;
		};
		inform: {
			active: string;
			text: string;
		};
		alert: {
			hover: string;
			active: string;
			text: string;
			cell: string;
		};
		danger: {
			hover: string;
			active: string;
			text: string;
			cell: string;
		};
		success: {
            hover: string;
            active: string;
            text: string;
            cell: string;
        };
	};
	fontFamily: {
		main: string;
	};

}

export const darkTheme: KoyoTheme = {
	isDark: true,
	colors: {
		cell: {
			background: '#300729',
			primary: '#300729',
			secondary: '#000000',
			tertiary: '#805779',
			stroke: '#F0932C',
			footnote: '#9CA3AF'
		},
		text: {
			primary: '#FFFFFF',
			inactive: '#f9fafb',
		},
		action: {
			active: '#F0932C',
			inactive: '#4B5563',
			hover: '#FFB750',
			text: '#000000'
		},
		inform: {
			active: '#805779',
			text: '#ffffff'
		},
		alert: {
			hover: '#ef4444',
			active: '#f87171',
			cell: '#dc2626',
			text: '#ffffff'
		},
		danger: {
			hover: '#ef4444',
			active: '#f87171',
			cell: '#dc2626',
			text: '#ffffff'
		},
		success: {
			hover: '#F0932C',
			active: '#F0932C',
			cell: '#F0932C',
			text: '#000000'
		},

	},
	fontFamily: {
		main: "'Sora', sans-serif"
	}
};

// TODO: Add light theme

export const lightTheme: KoyoTheme = {
	...darkTheme,
	isDark: false
};