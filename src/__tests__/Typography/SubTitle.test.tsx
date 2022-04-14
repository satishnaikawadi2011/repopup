import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { SubTitle } from '../../components/Typography';

describe('when rendered with a children', () => {
	it('should paste it into the label text', () => {
		render(<SubTitle>Test Label</SubTitle>);
		expect(screen.getByText(/Test Label/)).toBeInTheDocument();
	});
});
