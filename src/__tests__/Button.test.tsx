import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Button, DenyButton } from '../components/Button/Button';
import RepopupProvider from '../styles/Provider/Provider';
import { lightTheme as theme } from '../styles/themes/light';

describe('when rendered with a children', () => {
	it('should paste it into the label text', () => {
		render(<Button>Test Label</Button>);
		expect(screen.getByText(/Test Label/)).toBeInTheDocument();
	});
});

describe('when the button is pressed', () => {
	it('should call the onClick callback', () => {
		const onClickMock = jest.fn();
		render(<Button onClick={onClickMock}>Test Label</Button>);
		fireEvent.click(screen.getByRole('button'));
		expect(onClickMock).toBeCalled();
	});
});

describe('when the DenyButton is rendered', () => {
	it('should have red as its background color', () => {
		render(
			<RepopupProvider>
				<DenyButton>Test Label</DenyButton>
			</RepopupProvider>
		);

		expect(screen.getByRole('button')).toHaveStyle(`background-color:${theme.palette.error.main.color}`);
	});
});
