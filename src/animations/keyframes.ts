import { keyframes } from 'styled-components';

export const show = keyframes`
	0% {
		transform: scale(.7);
	}

	45% {
		transform: scale(1.05);
	}

	80% {
		transform: scale(.95);
	}

	100% {
		transform: scale(1);
	}
`;

export const hide = keyframes`
	0% {
		transform: scale(1);
		opacity: 1;
	}

	100% {
		transform: scale(.5);
		opacity: 0;
	}
`;
