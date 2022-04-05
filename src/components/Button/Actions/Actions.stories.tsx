import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Actions } from './Actions';
import { ConfirmButton, DenyButton } from '../Button';

export default {
	/* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
	title: 'Actions',
	component: Actions
} as ComponentMeta<typeof Actions>;

export const Centered: ComponentStory<typeof Actions> = () => (
	<Actions>
		<ConfirmButton>Confirm</ConfirmButton>
		<DenyButton> Deny</DenyButton>
	</Actions>
);

export const Satrt: ComponentStory<typeof Actions> = () => (
	<Actions placement="start">
		<ConfirmButton>Confirm</ConfirmButton>
		<DenyButton> Deny</DenyButton>
	</Actions>
);

export const End: ComponentStory<typeof Actions> = () => (
	<Actions placement="end">
		<ConfirmButton>Confirm</ConfirmButton>
		<DenyButton> Deny</DenyButton>
	</Actions>
);
