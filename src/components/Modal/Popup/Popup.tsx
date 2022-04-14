import styled from 'styled-components';
import { show, hide } from '../../../animations/keyframes';

export type PlacementType =
	| 'bottom'
	| 'bottom-end'
	| 'bottom-start'
	| 'center'
	| 'center-end'
	| 'center-start'
	| 'top'
	| 'top-end'
	| 'top-start';

export interface PopupProps {
	open?: boolean;
	placement?: PlacementType;
}

export const Popup =
	styled.div <
	PopupProps >
	`
 	display: ${(props) =>

			props.open ? 'grid' :
			'none'};
	position: relative;
	box-sizing: border-box;
	grid-template-columns: minmax(0, 100%);
	width: 32em;
	max-width: 100%;
	padding: 0 0 1.25em;
	border: none;
	border-radius: 5px;
	background: ${(props) => props.theme.palette.common.bgColor};
	color:  ${(props) => props.theme.palette.common.textColor};
	font-family: inherit;
	font-size: 1rem;
	animation: ${(props) =>

			props.open ? show :
			hide} 0.3s;
	${(props) => {
		return getPlacementCss(props);
	}}
`;

/**
 * 
 * @param props popup  props
 * @returns appropriate css to position a popup inside container
 */
const getPlacementCss = (props: PopupProps): string => {
	switch (props.placement) {
		case 'bottom':
			return `
				grid-row:3;
				grid-column: 2;
				align-self: end;
				justify-self: center;
			`;
		case 'bottom-end':
			return `
				grid-column: 3;
				grid-row: 3;
				align-self: end;
				justify-self: end;
				`;
		case 'bottom-start':
			return `
				grid-column: 1;
				grid-row: 3;
				align-self: end;
			`;
		case 'top-start':
			return `
				align-self:start;
			`;
		case 'top':
			return `
				grid-column: 2;
				align-self: start;
				justify-self: center;
			`;
		case 'top-end':
			return `
				grid-column: 3;
				align-self: start;
				justify-self: end;
			`;
		case 'center':
			return `
				grid-column: 2;
				grid-row: 2;
				align-self: center;
				justify-self: center;
			`;
		case 'center-start':
			return `
				grid-row: 2;
				align-self: center;
			`;
		case 'center-end':
			return `
				grid-row: 2;
				grid-column: 3;
				align-self: center;
				justify-self: end;
			`;
		default:
			return `
				grid-column: 2;
				grid-row: 2;
				align-self: center;
				justify-self: center;
			`;
	}
};
