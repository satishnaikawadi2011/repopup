import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ConfirmButton } from '../Button/Button';
import InputDialog from './Input';
import TextArea from './Textarea/TextArea';
import Select from './Select/Select';

export default {
	/* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
	title: 'Input',
	component: InputDialog
} as ComponentMeta<typeof InputDialog>;

export const Text: ComponentStory<typeof React.Fragment> = () => {
	const [
		open,
		setOpen
	] = React.useState(false);
	const submitCallback = (value: any) => {
		console.log(value);
	};
	return (
		<React.Fragment>
			<ConfirmButton onClick={() => setOpen(true)}>Open</ConfirmButton>
			<InputDialog
				label="Name"
				onSubmitCallback={submitCallback}
				onClose={() => setOpen(false)}
				open={open}
				title={`Your name`}
				type="text"
				placeholder="Enter your name"
			/>
		</React.Fragment>
	);
};

export const Password: ComponentStory<typeof React.Fragment> = () => {
	const [
		open,
		setOpen
	] = React.useState(false);
	const submitCallback = (value: any) => {
		console.log(value);
	};
	return (
		<React.Fragment>
			<ConfirmButton onClick={() => setOpen(true)}>Open</ConfirmButton>
			<InputDialog
				label="Password"
				onSubmitCallback={submitCallback}
				onClose={() => setOpen(false)}
				open={open}
				title={`Your Password`}
				type="password"
				placeholder="Enter your password"
			/>
		</React.Fragment>
	);
};

export const Textarea: ComponentStory<typeof React.Fragment> = () => {
	const [
		open,
		setOpen
	] = React.useState(false);
	const submitCallback = (value: any) => {
		console.log(value);
	};
	return (
		<React.Fragment>
			<ConfirmButton onClick={() => setOpen(true)}>Open</ConfirmButton>
			<TextArea
				label="Message"
				onSubmitCallback={submitCallback}
				onClose={() => setOpen(false)}
				open={open}
				placeholder="Write a message"
			/>
		</React.Fragment>
	);
};

export const SelectInput: ComponentStory<typeof React.Fragment> = () => {
	const [
		open,
		setOpen
	] = React.useState(false);
	const submitCallback = (value: any) => {
		console.log(value);
	};
	const inputOptions = {
		Fruits:
			{
				apples: 'Apples',
				bananas: 'Bananas',
				grapes: 'Grapes',
				oranges: 'Oranges'
			},
		Vegetables:
			{
				potato: 'Potato',
				broccoli: 'Broccoli',
				carrot: 'Carrot'
			},
		icecream: 'Ice cream'
	};
	return (
		<React.Fragment>
			<ConfirmButton onClick={() => setOpen(true)}>Open</ConfirmButton>
			<Select
				label="Subject"
				inputOptions={inputOptions}
				onSubmitCallback={submitCallback}
				onClose={() => setOpen(false)}
				open={open}
				placeholder="Select a subject"
			/>
		</React.Fragment>
	);
};
