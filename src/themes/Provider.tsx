import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './light';
import { darkTheme } from './dark';
import GlobalStyle from './global-styles';
import '../index.css';

interface IProps {
	/**
     * Use this to decide the theme of the components
     */
	theme?: 'light' | 'dark';
}

const RemodalProvider: React.FC<IProps> = ({ children, theme = 'light' }) => {
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

export default RemodalProvider;
