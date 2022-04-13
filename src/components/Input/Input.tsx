import React, { useState } from 'react';
import styled from 'styled-components';
import { Actions } from '../Button/Actions/Actions';
import { CancelButton, ConfirmButton } from '../Button/Button';
import { Modal } from '../Modal';
import Title from '../Typography/Title/Title';

export const Label = styled.label`
	display: flex;
	justify-content: center;
	margin: 1em auto 0;
`;

export const Input = styled.input`
	height: ${(props) => props.theme.input.height};
	padding: ${(props) => props.theme.input.padding};
	margin: ${(props) => props.theme.input.margin};
	box-sizing: border-box;
	width: ${(props) => props.theme.input.width};
	transition: ${(props) => props.theme.input.transition};
	border: ${(props) => props.theme.input.border};
	border-radius: ${(props) => props.theme.input.borderRadius};
	background: ${(props) => props.theme.input.background};
	box-shadow: ${(props) => props.theme.input.boxShadow};
	color: ${(props) => props.theme.input.color};
	font-size: ${(props) => props.theme.input.fontSize};
	&:focus {
		border: ${(props) => props.theme.input.focus.border};
		outline: ${(props) => props.theme.input.focus.outline};
		box-shadow: ${(props) => props.theme.input.focus.boxShadow};
	}
	&::placeholder {
		color: #ccc;
	}
`;

export interface InputDialogProps {
	/**
	 * Use this to change the text on the "Cancel"-button.
	 */
	cancelButtonText?: string;
	/**
	 * Wheather or not to close the popup on clicking the backdrop 
	 */
	closeOnBackdropClick?: boolean;
	/**
	 * Label for the input field
	 */
	label?: string;
	/**
	 * Function that will be run when the popup is requested to be closed
	 */
	onClose: () => void;
	/**
	 * Function that will be run when the "Submit"-button is clicked
	 */
	onSubmitCallback: (value: any) => void;
	/**
	 * Boolean describing if the popup should be shown or not.
	 */
	open: boolean;
	/**
	 * Use this to change the text on the "Submit"-button.
	 */
	submitButtonText?: string;
	/**
	 * Used for the title of the popup
	 */
	title?: string;
}

const InputDialog: React.FC<InputDialogProps & React.HTMLProps<HTMLInputElement>> = ({
	label,
	onClose,
	title,
	open,
	closeOnBackdropClick = true,
	onSubmitCallback,
	submitButtonText = 'Submit',
	cancelButtonText = 'Cancel',
	...props
}) => {
	const [
		value,
		setValue
	] = useState('');

	const handleConfirm = () => {
		onSubmitCallback(value);
		setValue('');
		onClose();
	};
	return (
		<Modal open={open} closeOnBackdropClick={closeOnBackdropClick} onRequestClose={onClose}>
			{title && <Title>{title}</Title>}
			{label && <Label>{label}</Label>}
			<Input {...props as any} value={value} onChange={(e) => setValue(e.target.value)} />
			<Actions>
				<ConfirmButton onClick={handleConfirm}>{submitButtonText}</ConfirmButton>
				<CancelButton onClick={onClose as any}>{cancelButtonText}</CancelButton>
			</Actions>
		</Modal>
	);
};

export default InputDialog;
