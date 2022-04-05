// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import SubTitle from './SubTitle';

export default {
	/* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
	title: 'SubTitle',
	component: SubTitle
} as ComponentMeta<typeof SubTitle>;

export const Primary: ComponentStory<typeof SubTitle> = () => <SubTitle>This is subtitle</SubTitle>;
