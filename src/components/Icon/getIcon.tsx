import React from 'react';
import { VariantType } from './types';
import SuccessIcon from '../../animations/components/Success';
import ErrorIcon from '../../animations/components/Error';
import InfoIcon from '../../animations/components/Info';
import WarningIcon from '../../animations/components/Warning';
import QuestionIcon from '../../animations/components/Question';

/**
 * 
 * @param variant Varinat of the icon needed to render
 * @returns Icon depending upon varinat passed to the function
 */
export const getIcon = (variant: VariantType) => {
	switch (variant) {
		case 'success':
			return <SuccessIcon />;
		case 'error':
			return <ErrorIcon />;
		case 'info':
			return <InfoIcon />;
		case 'warning':
			return <WarningIcon />;
		case 'question':
			return <QuestionIcon />;
		default:
			break;
	}
};
