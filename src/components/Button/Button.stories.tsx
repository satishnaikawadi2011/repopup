import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DenyButton, Button, ConfirmButton, CancelButton, SuccessButton } from './Button';

export default {
	/* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
	title: 'Button',
	component: Button
} as ComponentMeta<typeof Button>;

export const Deny: ComponentStory<typeof Button> = () => <DenyButton>Don't Save</DenyButton>;

export const Confirm: ComponentStory<typeof Button> = () => <ConfirmButton>Save</ConfirmButton>;

export const Cancel: ComponentStory<typeof Button> = () => <CancelButton>Cancel</CancelButton>;

export const Success: ComponentStory<typeof Button> = () => <SuccessButton>Yes,Delete It!</SuccessButton>;
