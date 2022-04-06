import { DefaultTheme } from 'styled-components';
export const darkTheme: DefaultTheme = {
	palette:
		{
			common:
				{
					black: '#000000',
					white: '#ffffff',
					bgColor: '#19191a',
					textColor: '#ffffff',
					backdropColor: 'rgba(25, 25, 26,0.75)'
				},
			primary:
				{
					main:
						{
							color: '#2196f3',
							contrastText: '#ffffff'
						},
					light:
						{
							color: '#4dabf5',
							contrastText: '#000000'
						},
					dark:
						{
							color: '#1769aa',
							contrastText: '#ffffff'
						}
				},
			secondary:
				{
					main:
						{
							color: '#f50057',
							contrastText: '#ffffff'
						},
					light:
						{
							color: '#f73378',
							contrastText: '#ffffff'
						},
					dark:
						{
							color: '#ab003c',
							contrastText: '#ffffff'
						}
				},
			success:
				{
					main:
						{
							color: '#66bb6a',
							contrastText: '#000000'
						},
					light:
						{
							color: '#84c887',
							contrastText: '#000000'
						},
					dark:
						{
							color: '#47824a',
							contrastText: '#ffffff'
						}
				},
			error:
				{
					main:
						{
							color: '#f44336',
							contrastText: '#ffffff'
						},
					light:
						{
							color: '#f6685e',
							contrastText: '#000000'
						},
					dark:
						{
							color: '#aa2e25',
							contrastText: '#ffffff'
						}
				},
			cancel:
				{
					main:
						{
							color: '#6e7881',
							contrastText: '#ffffff'
						},
					light:
						{
							color: '#8b939a',
							contrastText: '#ffffff'
						},
					dark:
						{
							color: '#4d545a',
							contrastText: '#ffffff'
						}
				}
		},
	input:
		{
			borderRadius: '0.1875em',
			boxShadow: 'inset 0 1px 1px rgba(#000, .06), 0 0 0 3px transparent',
			border: '1px solid #4d4d4d',
			height: '2.625em',
			fontSize: '1.125em',
			margin: '1em 2em 3px',
			padding: '0 .75em',
			width: 'auto',
			transition: 'border-color .1s, box-shadow .1s',
			focus:
				{
					border: '1px solid #b4dbed',
					boxShadow: 'inset 0 1px 1px rgba(#000, .06), 0 0 0 3px rgba(100, 150, 200, .5);',
					outline: 'none'
				},
			background: '#303031',
			color: '#e1e1e1'
		}
};
