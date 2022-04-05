import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Modal from './Modal';
import { ConfirmButton } from '../Button/Button';

export default {
	/* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
	title: 'Modal',
	component: React.Fragment
} as ComponentMeta<typeof React.Fragment>;

export const PopupModal: ComponentStory<typeof React.Fragment> = () => {
	const [
		open,
		setOpen
	] = React.useState(false);
	return (
		<React.Fragment>
			<ConfirmButton onClick={() => setOpen(true)}>Open Modal</ConfirmButton>
			<Modal
				title="Hello World"
				subtitle="This is hello world template !!!!"
				showConfirmButton
				placement="center"
				open={open}
				onRequestClose={() => setOpen(false)}
			/>
		</React.Fragment>
	);
};
