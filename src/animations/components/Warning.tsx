import React from 'react';
import Lottie, { Options } from 'react-lottie';

import animationData from '../data/warning.json';

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

const WarningIcon: React.FC<Props> = ({ height = 100, width = 100 }) => {
	return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default WarningIcon;
