import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ConfirmButton } from '../components/Button/Button';
import useInput from './useInput';
import useAlert from './useAlert';

export default {
	/* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
	title: 'Hooks',
	component: React.Fragment
} as ComponentMeta<typeof React.Fragment>;

export const AlertHook: ComponentStory<typeof React.Fragment> = () => {
	const { openAlert, AlertComponent } = useAlert({
		title: 'Success',
		variant: 'success',
		subtitle: 'This is a success story!!',
		closeOnBackdropClick: true,
		confirmButtonText: 'Ok',
		showDenyButton: false,
		onConfirm: 'close'
	});
	return (
		<React.Fragment>
			<ConfirmButton onClick={() => openAlert()}>Open</ConfirmButton>
			<AlertComponent />
		</React.Fragment>
	);
};

export const InputHook: ComponentStory<typeof React.Fragment> = () => {
	const { InputDialogComponent, openInputDialog } = useInput({
		closeOnBackdropClick: true,
		label: 'Name',
		onSubmitCallback: (val: any) => console.log(val)
	});
	return (
		<React.Fragment>
			<ConfirmButton onClick={() => openInputDialog()}>Open</ConfirmButton>
			<InputDialogComponent placeholder="Write your name ...." />
		</React.Fragment>
	);
};
