import React, { CSSProperties } from 'react';
import { Actions } from '../Button/Actions/Actions';
import { CancelButton, ConfirmButton, DenyButton, SuccessButton } from '../Button/Button';

import { ModalContainer } from './ModalContainer/ModalContainer';
import { PlacementType, Popup } from './Popup/Popup';
import SubTitle from '../Typography/SubTitle/SubTitle';
import Title from '../Typography/Title/Title';
import { VariantType } from '../Icon/types';
import { Icon } from '../Icon/Icon';
import { getIcon } from '../Icon/getIcon';

interface IModalCustomClassType{
	/**
	 * class for a container of buttons
	 */
	actions?: string;
	/**
	 * class for "Cancel"-button.
	 */
	cancelButton?: string;
	/**
	 * class for "Confirm"-button.
	 */
	confirmButton?: string;
	/**
	 * class for container of a popup
	 */
	container?: string;
	/**
	 * class for "Deny"-button.
	 */
	denyButton?: string;
	/**
	 * class for icon on a popup.
	 */
	icon?: string;
	/**
	 * class for popup window.
	 */
	popup?: string;
	/**
	 * class for a subtitle on popup window
	 */
	subtitle?: string;
	/**
	 * class for a subtitle on popup window
	 */
	successButton?: string;
	/**
	 * class for "Success"-button.
	 */
	title?: string;
}

export interface ModalProps {
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
	onCancel?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	/**
	 * Use this as a click handler for the "Confirm"-button.
	 */
	onConfirm?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	/**
	 * Use this as a click handler for the "Deny"-button.
	 */
	onDeny?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	/**
	 * Function that will be run when the modal is requested to be closed
	 */
	onRequestClose: () => void;
	/**
	 * Use this as a click handler for the "Success"-button.
	 */
	onSuccess?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	/**
	 * Boolean describing if the modal should be shown or not.
	 */
	open: boolean;
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

const Modal: React.FC<ModalProps> = ({
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
	onRequestClose,
	onSuccess,
	open,
	placement = 'center',
	showCancelButton,
	showConfirmButton,
	showDenyButton,
	showSuccessButton,
	subtitle,
	successButtonText = 'Ok',
	title,
	children
}) => {
	const popupStyle: CSSProperties = {
		color,
		background
	}

	return (
		<ModalContainer
			className={`modal__container ${customClass?.container}`}
			onClick={

					closeOnBackdropClick ? onRequestClose :
					() => {}
			}
			open={open}
			placement={placement}
		>
			<Popup
				className={customClass?.popup}
				open={open}
				placement={placement}
				onClick={(e: React.MouseEvent) => e.stopPropagation()}
				style={popupStyle}

			>	<React.Fragment>{childrenBeforeDefaultContent}</React.Fragment>
				<React.Fragment>{children}</React.Fragment>
				{icon && <Icon className={customClass?.icon}>{getIcon(icon)}</Icon>}
				{title && <Title className={customClass?.title}>{title}</Title>}
				{subtitle && <SubTitle className={customClass?.subtitle}>{subtitle}</SubTitle>}
				<Actions className={customClass?.actions}>
					{showConfirmButton && <ConfirmButton className={customClass?.confirmButton} onClick={onConfirm}>{confirmButtonText}</ConfirmButton>}
					{showSuccessButton && <SuccessButton className={customClass?.successButton} onClick={onSuccess}>{successButtonText}</SuccessButton>}
					{showDenyButton && <DenyButton className={customClass?.denyButton} onClick={onDeny}>{denyButtonText}</DenyButton>}
					{showCancelButton && <CancelButton className={customClass?.cancelButton} onClick={onCancel}>{cancelButtonText}</CancelButton>}
				</Actions>
				<React.Fragment>{childrenAfterDefaultContent}</React.Fragment>
			</Popup>
		</ModalContainer>
	);
};

export default Modal;
