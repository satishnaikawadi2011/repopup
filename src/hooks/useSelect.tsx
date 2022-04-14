import React from 'react';
import { Select } from '../components/Input';
import { InputOptionsType } from '../components/Input/Select/Select';

export interface UseSelectArgs {
	/**
	 * Use this to change the text on the "Cancel"-button.
	 */
	cancelButtonText?: string;
	/**
	 * Wheather or not to close the popup on clicking the backdrop 
	 */
	closeOnBackdropClick?: boolean;
	/**
     *  options for the Select dailog component
     */
	inputOptions: InputOptionsType;
	/**
	 * Label for the input field
	 */
	label?: string;
	/**
	 * Function that will be run when the "Submit"-button is clicked
	 */
	onSubmitCallback: (value: any) => void;
	/**
	 * Use this to change the text on the "Submit"-button.
	 */
	submitButtonText?: string;
	/**
	 * Used for the title of the popup
	 */
	title?: string;
}

const useSelect = (args: UseSelectArgs) => {
	const {
		closeOnBackdropClick = true,
		title,
		onSubmitCallback,
		cancelButtonText,
		label,
		submitButtonText,
		inputOptions
	} = args;
	const [
		open,
		setOpen
	] = React.useState(false);

	const openSelectDialog = () => {
		setOpen(true);
	};

	const SelectComponent: React.FC<React.HTMLProps<HTMLSelectElement>> = ({ ...props }) => (
		<Select
			open={open}
			onClose={() => setOpen(false)}
			title={title}
			closeOnBackdropClick={closeOnBackdropClick}
			onSubmitCallback={onSubmitCallback}
			cancelButtonText={cancelButtonText}
			label={label}
			submitButtonText={submitButtonText}
			inputOptions={inputOptions}
			{...props as any}
		/>
	);

	return { openSelectDialog, SelectComponent };
};

export default useSelect;
