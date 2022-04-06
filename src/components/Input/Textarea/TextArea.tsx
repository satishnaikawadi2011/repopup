import React, { useState } from 'react';
import styled from 'styled-components';
import { Actions } from '../../Button/Actions/Actions';
import { CancelButton, ConfirmButton } from '../../Button/Button';
import { Modal } from '../../Modal';
import Title from '../../Typography/Title/Title';
import { InputDialogProps, Label } from '../Input';

export const StyledTextArea = styled.textarea`
	height: 6.75em;
	padding: .75em
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

const TextArea: React.FC<InputDialogProps & React.HTMLProps<HTMLTextAreaElement>> = ({
	submitButtonText = 'Submit',
	cancelButtonText = 'Cancel',
	closeOnBackdropClick = true,
	label,
	onClose,
	onSubmitCallback,
	open,
	title,
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
			<StyledTextArea {...props as any} value={value} onChange={(e) => setValue(e.target.value)} />
			<Actions>
				<ConfirmButton onClick={handleConfirm}>{submitButtonText}</ConfirmButton>
				<CancelButton onClick={onClose as any}>{cancelButtonText}</CancelButton>
			</Actions>
		</Modal>
	);
};

export default TextArea;
