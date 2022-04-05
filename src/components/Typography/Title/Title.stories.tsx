// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from './Title';

export default {
	/* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
	title: 'Title',
	component: Title
} as ComponentMeta<typeof Title>;

export const Primary: ComponentStory<typeof Title> = () => <Title>Remodal</Title>;
