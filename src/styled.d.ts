// import original module declarations
import 'styled-components';
import { IPalette } from './styles/types';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		palette: {
			common: {
				black: string;
				white: string;
				bgColor: string;
				textColor: string;
				backdropColor: string;
			};
			primary: IPalette;
			secondary: IPalette;
			success: IPalette;
			error: IPalette;
			cancel: IPalette;
		};
	}
}
