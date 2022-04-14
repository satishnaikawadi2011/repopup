import React from 'react';
import { TextArea } from '../components/Input';

export interface UseTextAreaArgs {
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

const useTextArea = (args: UseTextAreaArgs) => {
	const { closeOnBackdropClick = true, title, onSubmitCallback, cancelButtonText, label, submitButtonText } = args;
	const [
		open,
		setOpen
	] = React.useState(false);

	const openTextAreaDialog = () => {
		setOpen(true);
	};

	const TextAreaDialogComponent: React.FC<React.HTMLProps<HTMLTextAreaElement>> = ({ ...props }) => (
		<TextArea
			open={open}
			onClose={() => setOpen(false)}
			title={title}
			closeOnBackdropClick={closeOnBackdropClick}
			onSubmitCallback={onSubmitCallback}
			cancelButtonText={cancelButtonText}
			label={label}
			submitButtonText={submitButtonText}
			{...props as any}
		/>
	);

	return { openTextAreaDialog, TextAreaDialogComponent };
};

export default useTextArea;
