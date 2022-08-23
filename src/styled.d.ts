import 'styled-components';
import { KoyoTheme } from './theme';

declare module 'styled-components' {
	export interface DefaultTheme extends KoyoTheme {}
}
