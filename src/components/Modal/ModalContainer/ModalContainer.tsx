import styled from 'styled-components';
import { PopupProps } from '../Popup/Popup';

export const ModalContainer =
	styled.div <
	PopupProps >
	`
	display: grid;
	Z-index: ${(props) =>

			props.open ? 1060 :
			-1060};
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	box-sizing: border-box;
	grid-template-areas: 'top-start     top            top-end' 'center-start  center         center-end'
		'bottom-start  bottom-center  bottom-end';
	grid-template-rows: minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);
	height: 100%;
	padding: .625em;
	overflow-x: hidden;
	transition: background-color .1s;
	background: ${(props) =>

			props.open ? props.theme.palette.common.backdropColor :
			''};
	-webkit-overflow-scrolling: touch;
	${(props) => {
		return getPlacementCss(props);
	}}
`;

/**
 * 
 * @param props Modal container props
 * @returns appropriate css to position a popup inside container
 */
const getPlacementCss = (props: PopupProps): string => {
	switch (props.placement) {
		case 'bottom':
			return `grid-template-columns: auto minmax(0, 1fr) auto;`;
		case 'bottom-end':
			return `grid-template-columns: auto auto minmax(0, 1fr);`;
		case 'bottom-start':
			return `grid-template-columns: minmax(0, 1fr) auto auto;`;
		case 'top-start':
			return `grid-template-columns: minmax(0, 1fr) auto auto;`;
		case 'top':
			return `grid-template-columns: auto minmax(0, 1fr) auto;`;
		case 'top-end':
			return `grid-template-columns: auto auto minmax(0, 1fr);`;
		case 'center':
			return `grid-template-columns: auto minmax(0, 1fr) auto;`;
		case 'center-start':
			return `grid-template-columns: minmax(0, 1fr) auto auto;`;
		case 'center-end':
			return `grid-template-columns: auto auto minmax(0, 1fr)`;
		default:
			return `grid-template-columns: auto minmax(0, 1fr) auto;`;
	}
};

export default ModalContainer;
