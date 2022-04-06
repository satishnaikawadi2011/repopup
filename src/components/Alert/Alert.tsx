import React from 'react';
import styled from 'styled-components';
import { VariantType } from '../Icon/types';
import Modal from '../Modal/Modal';
import { PlacementType } from '../Modal/Popup/Popup';

interface AlertProps {
	/**
	 * Boolean describing if the Alert should be shown or not.
	 */
	open: boolean;
	/**
	 * Function that will be run when the Alert is requested to be closed
	 */
	onClose: () => void;
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

export const Icon = styled.div`margin-top: 30px;`;

const Alert: React.FC<AlertProps> = ({
	closeOnBackdropClick = true,
	onClose,
	open,
	placement,
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
			onConfirm={onClose}
			showConfirmButton
		/>
	);
};

export default Alert;
