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
	onConfirm?: React.MouseEventHandler<HTMLButtonElement> | undefined | 'close';
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
	 * If set to true, a "Confirm"-button will  be shown.
	 */
	showConfirmButton?: boolean;
	/**
	 * If set to true, a "Deny"-button will  be shown.
	 */
	showDenyButton?: boolean;
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
		onDeny,
		showConfirmButton,
		showDenyButton
	} = args;
	const [
		open,
		setOpen
	] = React.useState(false);

	const openAlert = () => {
		setOpen(true);
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
			onConfirm={

					onConfirm == 'close' ? () => setOpen(false) :
					onConfirm
			}
			onDeny={onDeny}
			placement={placement}
			showConfirmButton={showConfirmButton}
			showDenyButton={showDenyButton}
		/>
	);

	return { openAlert, AlertComponent };
};

export default useAlert;
