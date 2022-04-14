import React from 'react';
import { VariantType } from '../components/Icon/types';
import { Modal } from '../components/Modal';
import { IModalCustomClassType } from '../components/Modal/Modal';
import { PlacementType } from '../components/Modal/Popup/Popup';

interface UseModalArgs {
	/**
	 *  Popup window background (CSS background property). 
	 */
	background?: string;
	/**
	 * Use this to change the text on the "Cancel"-button.
	 */
	cancelButtonText?: string;
	/**
	 * Use this to place children after default content of the popup
	 */
	childrenAfterDefaultContent?: React.ReactNode;
	/**
	 * Use this to place children before default content of the popup
	 */
	childrenBeforeDefaultContent?: React.ReactNode;
	/**
	 * Wheather or not to close the popup on clicking the backdrop 
	 */
	closeOnBackdropClick?: boolean;
	/**
	 * Color for title and content
	 */
	color?: string;
	/**
	 * Use this to change the text on the "Confirm"-button.
	 */
	confirmButtonText?: string;
	/**
	 * A custom CSS class for the popup
	 */
	customClass?: IModalCustomClassType;
	/**
	 * Use this to change the text on the "Deny"-button.
	 */
	denyButtonText?: string;
	/**
	 * varinat of a icon to be shown
	 */
	icon?: VariantType;
	/**
	 * Use this as a click handler for the "Cancel"-button.
	 */
	onCancel?: React.MouseEventHandler<HTMLButtonElement> | undefined | 'close';
	/**
	 * Use this as a click handler for the "Confirm"-button.
	 */
	onConfirm?: React.MouseEventHandler<HTMLButtonElement> | undefined | 'close';
	/**
	 * Use this as a click handler for the "Deny"-button.
	 */
	onDeny?: React.MouseEventHandler<HTMLButtonElement> | undefined | 'close';
	/**
	 * Use this as a click handler for the "Success"-button.
	 */
	onSuccess?: React.MouseEventHandler<HTMLButtonElement> | undefined | 'close';
	/**
	 * Use this to change Popup window position
	 */
	placement?: PlacementType;
	/**
	 * If set to true, a "Cancel"-button will  be shown.
	 */
	showCancelButton?: boolean;
	/**
	 * If set to true, a "Confirm"-button will  be shown.
	 */
	showConfirmButton?: boolean;
	/**
	 * If set to true, a "Deny"-button will  be shown.
	 */
	showDenyButton?: boolean;
	/**
	 * If set to true, a "Success"-button will  be shown.
	 */
	showSuccessButton?: boolean;
	/**
	 * Used for a description for the popup.
	 */
	subtitle?: string;
	/**
	 * Use this to change the text on the "Success"-button.
	 */
	successButtonText?: string;
	/**
	 * Used for the title of the popup
	 */
	title?: string;
}

const useModal = (args: UseModalArgs) => {
	const {
		background,
		cancelButtonText = 'Cancel',
		childrenAfterDefaultContent,
		childrenBeforeDefaultContent,
		closeOnBackdropClick = true,
		color,
		confirmButtonText = 'Confirm',
		customClass,
		denyButtonText = 'Deny',
		icon,
		onCancel,
		onConfirm,
		onDeny,
		onSuccess,
		placement = 'center',
		showCancelButton,
		showConfirmButton,
		showDenyButton,
		showSuccessButton,
		subtitle,
		successButtonText = 'Ok',
		title
	} = args;

	const [
		open,
		setOpen
	] = React.useState(false);

	const openModal = () => {
		setOpen(true);
	};

	const ModalComponent = () => (
		<Modal
			open={open}
			title={title}
			subtitle={subtitle}
			closeOnBackdropClick={closeOnBackdropClick}
			confirmButtonText={confirmButtonText}
			denyButtonText={denyButtonText}
			onConfirm={

					onConfirm == 'close' ? () => setOpen(false) :
					onConfirm
			}
			onDeny={

					onDeny == 'close' ? () => setOpen(false) :
					onDeny
			}
			onSuccess={

					onSuccess == 'close' ? () => setOpen(false) :
					onSuccess
			}
			onCancel={

					onCancel == 'close' ? () => setOpen(false) :
					onCancel
			}
			onRequestClose={() => setOpen(false)}
			placement={placement}
			showConfirmButton={showConfirmButton}
			showDenyButton={showDenyButton}
			background={background}
			childrenAfterDefaultContent={childrenAfterDefaultContent}
			cancelButtonText={cancelButtonText}
			childrenBeforeDefaultContent={childrenBeforeDefaultContent}
			color={color}
			customClass={customClass}
			showCancelButton={showCancelButton}
			showSuccessButton={showSuccessButton}
			successButtonText={successButtonText}
			icon={icon}
		/>
	);

	return { openModal, ModalComponent };
};

export default useModal;
