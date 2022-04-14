import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Title } from '../../components/Typography';

describe('when rendered with a children', () => {
	it('should paste it into the label text', () => {
		render(<Title>Test Label</Title>);
		expect(screen.getByText(/Test Label/)).toBeInTheDocument();
	});
});
