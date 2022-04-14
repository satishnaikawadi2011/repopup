import { DefaultTheme } from 'styled-components';
export const lightTheme = {
	palette:
		{
			common:
				{
					black: '#000000',
					white: '#ffffff',
					bgColor: '#ffffff',
					textColor: '#545454',
					backdropColor: 'rgba(0,0,0,0.4)'
				},
			primary:
				{
					main:
						{
							color: '#1976d2',
							contrastText: '#ffffff'
						},
					light:
						{
							color: '#4791db',
							contrastText: '#ffffff'
						},
					dark:
						{
							color: '#115293',
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
							color: '#2e7d32',
							contrastText: '#ffffff'
						},
					light:
						{
							color: '#57975b',
							contrastText: '#ffffff'
						},
					dark:
						{
							color: '#205723',
							contrastText: '#ffffff'
						}
				},
			error:
				{
					main:
						{
							color: '#d32f2f',
							contrastText: '#ffffff'
						},
					light:
						{
							color: '#db5858',
							contrastText: '#ffffff'
						},
					dark:
						{
							color: '#932020',
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
			background: 'inherit',
			color: 'inherit'
		}
};
