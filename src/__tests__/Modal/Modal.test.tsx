import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Modal } from '../../components/Modal';
import RepopupProvider from '../../styles/Provider/Provider';

describe('<Modal/>', () => {
	it('should render ModalContainer and Popup components', () => {
		const onRequestCloseMock = jest.fn();
		render(
			<RepopupProvider>
				<Modal open={true} onRequestClose={onRequestCloseMock} />
			</RepopupProvider>
		);
		expect(screen.getByTestId('modal-container')).toBeInTheDocument();
		expect(screen.getByTestId('popup-window')).toBeInTheDocument();
	});
});
