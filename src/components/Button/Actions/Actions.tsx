import styled from 'styled-components';

interface IActionsProps {
	/**
	 * Use this for the placement of the buttons inside the container 
	 */
	placement?:
		| 'space-around'
		| 'space-between'
		| 'space-evenly'
		| 'stretch'
		| 'center'
		| 'end'
		| 'flex-end'
		| 'flex-start'
		| 'start';
}

export const Actions =
	styled.div <
	IActionsProps >
	`
	display: flex;
	z-index: 1;
	box-sizing: border-box;
	flex-wrap: wrap;
	align-items: center;
	justify-content: ${(props) =>

			props.placement ? props.placement :
			'center'};
	width: auto;
	margin: 1.25em auto 0;
	padding: 0;
`;
