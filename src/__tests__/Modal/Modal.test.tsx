import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Modal } from '../../components/Modal';
import RepopupProvider from '../../styles/Provider/Provider';

describe('<Modal/>', () => {
	it('should render ModalContainer and Popup components', () => {
		const onRequestCloseMock = jest.fn();
		render(
			<RepopupProvider>
				<Modal open={false} onRequestClose={onRequestCloseMock} />
			</RepopupProvider>
		);
		expect(screen.getByTestId('modal-container')).toBeInTheDocument();
		expect(screen.getByTestId('popup-window')).toBeInTheDocument();
	});
});

describe('when rendered with children', () => {
	it('should render that children', () => {
		const onRequestCloseMock = jest.fn();
		render(
			<RepopupProvider>
				<Modal open={false} onRequestClose={onRequestCloseMock}>
					<h1>This is Test</h1>
				</Modal>
			</RepopupProvider>
		);
		expect(screen.getByText(/This is Test/)).toBeInTheDocument();
	});
});
