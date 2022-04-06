import React, { useState } from 'react';
import styled from 'styled-components';
import { Actions } from '../../Button/Actions/Actions';
import { CancelButton, ConfirmButton } from '../../Button/Button';
import { Modal } from '../../Modal';
import Title from '../../Typography/Title/Title';
import { InputDialogProps, Label } from '../Input';

const StyledSelect = styled.select`
	margin: ${(props) => props.theme.input.margin};
	min-width: 50%;
	max-width: 100%;
	padding: 0.375em 0.625em;
	background: ${(props) => props.theme.input.background};
	color: ${(props) => props.theme.input.color};
	font-size: ${(props) => props.theme.input.fontSize};
`;

interface OptGroup {
	[key: string | number]: string;
}

interface InputOptionsType {
	[key: string | number]: OptGroup | string;
}

interface SelectProps {
	inputOptions: InputOptionsType;
}

const Select: React.FC<InputDialogProps & SelectProps & React.HTMLProps<HTMLSelectElement>> = ({
	cancelButtonText = 'Cancel',
	closeOnBackdropClick = true,
	inputOptions,
	label,
	onClose,
	onSubmitCallback,
	open,
	placeholder,
	submitButtonText = 'Submit',
	title,
	...props
}) => {
	const [
		value,
		setValue
	] = useState('default');
	const handleConfirm = () => {
		onSubmitCallback(value);
		setValue('');
		onClose();
	};

	const options = (
		<React.Fragment>
			{Object.keys(inputOptions as any).map((k: string) => {
				if (typeof inputOptions[k] == 'string') {
					return (
						<option key={k} value={k}>
							{inputOptions[k]}
						</option>
					);
				}
				return (
					<optgroup key={k} label={k}>
						{Object.keys(inputOptions[k]).map((k2: any) => {
							return (
								<option key={k2} value={k2}>
									{inputOptions[k][k2]}
								</option>
							);
						})}
					</optgroup>
				);
			})}
		</React.Fragment>
	);

	return (
		<Modal open={open} closeOnBackdropClick={closeOnBackdropClick} onRequestClose={onClose}>
			{title && <Title>{title}</Title>}
			{label && <Label>{label}</Label>}
			<StyledSelect {...props as any} value={value} onChange={(e) => setValue(e.target.value)}>
				<option value="default" disabled>
					{placeholder}
				</option>
				{options}
			</StyledSelect>
			<Actions>
				<ConfirmButton onClick={handleConfirm}>{submitButtonText}</ConfirmButton>
				<CancelButton onClick={onClose as any}>{cancelButtonText}</CancelButton>
			</Actions>
		</Modal>
	);
};

export default Select;
