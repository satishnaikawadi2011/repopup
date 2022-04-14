import React from 'react';
import Alert from '../components/Alert/Alert';
import { VariantType } from '../components/Icon/types';
import { PlacementType } from '../components/Modal/Popup/Popup';

export interface UseAlertArgs {
	/**
	 * Use this to change the text on the "Confirm"-button.
	 */
	confirmButtonText?: string;
	/**
	 * Use this to change the text on the "Deny"-button.
	 */
	denyButtonText?: string;
	/**
	 * Use this as a click handler for the "Confirm"-button.
	 */
	onConfirm?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	/**
	 * Use this as a click handler for the "Deny"-button.
	 */
	onDeny?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	/**
	 * Wheather or not to close the Alert on clicking the backdrop 
	 */
	closeOnBackdropClick?: boolean;
	/**
	 * Used for the title of the alert
	 */
	title: string;
	/**
	 * Used for a description for the Alert.
	 */
	subtitle?: string;
	/**
	 * varinat of a icon to be shown
	 */
	variant: VariantType;
	/**
	 * Use this to change Popup window position
	 */
	placement?: PlacementType;
}

const useAlert = (args: UseAlertArgs) => {
	const {
		closeOnBackdropClick = true,
		placement,
		subtitle,
		title,
		variant,
		confirmButtonText = 'Ok',
		denyButtonText = 'Cancel',
		onConfirm,
		onDeny
	} = args;
	const [
		open,
		setOpen
	] = React.useState(false);

	const openAlert = () => {
		setOpen(true);
	};

	const closeAlert = () => {
		setOpen(false);
	};

	const AlertComponent = () => (
		<Alert
			open={open}
			onClose={() => setOpen(false)}
			title={title}
			variant={variant}
			subtitle={subtitle}
			closeOnBackdropClick={closeOnBackdropClick}
			confirmButtonText={confirmButtonText}
			denyButtonText={denyButtonText}
			onConfirm={onConfirm}
			onDeny={onDeny}
			placement={placement}
		/>
	);

	return { openAlert, AlertComponent, closeAlert };
};

export default useAlert;
