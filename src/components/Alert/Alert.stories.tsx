import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ConfirmButton } from '../Button/Button';
import Alert from './Alert';

export default {
	/* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
	title: 'Alert',
	component: React.Fragment
} as ComponentMeta<typeof React.Fragment>;

export const Success: ComponentStory<typeof React.Fragment> = () => {
	const [
		open,
		setOpen
	] = React.useState(false);
	return (
		<React.Fragment>
			<ConfirmButton onClick={() => setOpen(true)}>Open Alert</ConfirmButton>
			<Alert
				open={open}
				onClose={() => setOpen(false)}
				title={'Success'}
				subtitle={`Task completed successfully.`}
				variant="success"
				onConfirm={() => console.log('Confirmed')}
				onDeny={() => console.log('Denied')}
			/>
		</React.Fragment>
	);
};

export const Error: ComponentStory<typeof React.Fragment> = () => {
	const [
		open,
		setOpen
	] = React.useState(false);
	return (
		<React.Fragment>
			<ConfirmButton onClick={() => setOpen(true)}>Open Alert</ConfirmButton>
			<Alert
				open={open}
				onClose={() => setOpen(false)}
				title={'Oops'}
				subtitle={`Something went wrong,try again!`}
				variant="error"
			/>
		</React.Fragment>
	);
};

export const Info: ComponentStory<typeof React.Fragment> = () => {
	const [
		open,
		setOpen
	] = React.useState(false);
	return (
		<React.Fragment>
			<ConfirmButton onClick={() => setOpen(true)}>Open Alert</ConfirmButton>
			<Alert
				open={open}
				onClose={() => setOpen(false)}
				title={'Note'}
				variant="info"
				subtitle="Please follow the instructions below."
			/>
		</React.Fragment>
	);
};

export const Warning: ComponentStory<typeof React.Fragment> = () => {
	const [
		open,
		setOpen
	] = React.useState(false);
	return (
		<React.Fragment>
			<ConfirmButton onClick={() => setOpen(true)}>Open Alert</ConfirmButton>
			<Alert
				open={open}
				onClose={() => setOpen(false)}
				title={'Warning'}
				variant="warning"
				subtitle="10 minutes before full time."
			/>
		</React.Fragment>
	);
};

export const Question: ComponentStory<typeof React.Fragment> = () => {
	const [
		open,
		setOpen
	] = React.useState(false);
	return (
		<React.Fragment>
			<ConfirmButton onClick={() => setOpen(true)}>Open Alert</ConfirmButton>
			<Alert
				open={open}
				onClose={() => setOpen(false)}
				title={'Answer It'}
				variant="question"
				subtitle={`Is it ok to play games?`}
			/>
		</React.Fragment>
	);
};
