import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../themes/light';
import { darkTheme } from '../themes/dark';
import GlobalStyle from '../global-styles';

interface IProps {
	/**
     * Use this to decide the theme of the components
     */
	theme?: 'light' | 'dark';
}

const RepopupProvider: React.FC<IProps> = ({ children, theme = 'light' }) => {
	const selectedTheme =

			theme == 'light' ? lightTheme :
			darkTheme;
	return (
		<React.Fragment>
			<GlobalStyle />
			<ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
		</React.Fragment>
	);
};

export default RepopupProvider;
