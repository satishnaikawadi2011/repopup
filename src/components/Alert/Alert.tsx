import React from 'react';
import styled from 'styled-components';
import { VariantType } from '../Icon/types';
import Modal from '../Modal/Modal';
import { PlacementType } from '../Modal/Popup/Popup';

interface AlertProps {
	/**
	 * Use this to change the text on the "Confirm"-button.
	 */
	confirmButtonText?: string;
	/**
	 * Use this to change the text on the "Deny"-button.
	 */
	denyButtonText?: string;
	/**
	 * Boolean describing if the Alert should be shown or not.
	 */
	open: boolean;
	/**
	 * Function that will be run when the Alert is requested to be closed
	 */
	onClose: () => void;
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

export const Icon = styled.div`margin-top: 30px;`;

const Alert: React.FC<AlertProps> = ({
	closeOnBackdropClick = true,
	confirmButtonText = 'Ok',
	denyButtonText = 'Cancel',
	onClose,
	onConfirm,
	onDeny,
	open,
	placement,
	showConfirmButton = true,
	showDenyButton = true,
	subtitle,
	title,
	variant
}) => {
	return (
		<Modal
			open={open}
			onRequestClose={onClose}
			closeOnBackdropClick={closeOnBackdropClick}
			title={title}
			subtitle={subtitle}
			icon={variant}
			placement={placement}
			onConfirm={onConfirm}
			onDeny={onDeny || onClose}
			showConfirmButton={showConfirmButton}
			confirmButtonText={confirmButtonText}
			denyButtonText={denyButtonText}
			showDenyButton={showDenyButton}
		/>
	);
};

export default Alert;
