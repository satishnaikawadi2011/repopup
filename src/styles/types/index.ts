export interface IColor {
	/**
	 * color value like hex,rgb,etc.
	 */
	color: string;
	/**
	 * contrast text color on the for this color
	 */
	contrastText: string;
}

export interface IPalette {
	/**
	 * light shade of main color
	 */
	light: IColor;
	/**
	 * original main color value
	 */
	main: IColor;
	/**
	 * dark shade of main
	 */
	dark: IColor;
}

/**
 * all these styles will be applied when input is focused
 */
export interface IInputFocus {
	border: string | number;
	outline: string;
	boxShadow: string;
}

/**
 * style types for input
 */
export interface IInput {
	margin: number | string;
	padding: number | string;
	width: number | string;
	height: number | string;
	borderRadius: number | string;
	fontSize: number | string;
	transition: string;
	border: number | string;
	boxShadow: string;
	focus: IInputFocus;

	background: string;
	color: string;
}

export interface DefaultTheme {
	palette: {
		common: {
			black: string;
			white: string;
			/**
			 * Use this for the background color of the popup
			 */
			bgColor: string;
			/**
			 * Use this for the color of the content on the popup window
			 */
			textColor: string;
			/**
			 * Use this for the backdrop color of the popup window
			 */
			backdropColor: string;
		};
		primary: IPalette;
		secondary: IPalette;
		success: IPalette;
		error: IPalette;
		cancel: IPalette;
	};
	input: IInput;
}
