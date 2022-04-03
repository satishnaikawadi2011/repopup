import React from 'react';
import RemodalProvider from '../src/styles/Provider/Provider';

export const parameters = {
	actions  : { argTypesRegex: '^on[A-Z].*' },
	controls : {
		matchers : {
			color : /(background|color)$/i,
			date  : /Date$/
		}
	}
};

export const decorators = [
	(Story) => (
		<RemodalProvider theme="light">
			<Story />
		</RemodalProvider>
	)
];
