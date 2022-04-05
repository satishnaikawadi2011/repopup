import React from 'react';
import Lottie, { Options } from 'react-lottie';

import animationData from '../data/error.json';

const defaultOptions: Options = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings:
		{
			preserveAspectRatio: 'xMidYMid slice'
		}
};

interface Props {
	height?: number;
	width?: number;
}

const ErrorIcon: React.FC<Props> = ({ height = 100, width = 100 }) => {
	return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default ErrorIcon;
